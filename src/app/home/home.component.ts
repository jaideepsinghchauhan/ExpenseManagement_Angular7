import { Component, OnInit } from '@angular/core';
import { ExpenseDetailService } from '../expense-detail.service';
import { Expense } from '../shared/expense';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalBudget: string;
  totalCategories = [];
  Expenses: Expense;
  expensesArray: Expense[];
  errors: string = "";
  constructor(private expenseDetails: ExpenseDetailService) { }

  ngOnInit() {
    this.totalBudget = this.expenseDetails.totalBudget as string;
    this.totalCategories = this.expenseDetails.getcategories();
    this.expensesArray = this.expenseDetails.getExpenseDetails();
    console.log("this.expensesArray");
    console.log(this.expensesArray);
  }

  addExpenses(category: HTMLInputElement,
        itemName: HTMLInputElement,
        amount: HTMLInputElement,
        date: HTMLInputElement ) {

    if (!category.value || !itemName.value || !date.value || !amount.value) {
      this.errors = "All fields are required!";
      return;
    }

    const format = 'yyyy-MM-dd';
    const myDate = new Date();
    const locale = 'en-US';
    const formattedDate = formatDate(myDate, format, locale);

    if (date.value > formattedDate) {
      this.errors += " Date cannot be future date.";
      return;
    }
      console.log("expenses added" + category.value + " " +
      itemName.value + " " + amount.value + " " + date.value);

    let ex = new Expense(category.value, itemName.value, +amount.value, formatDate(date.value, format, locale));
    console.log("expenses");
    console.log(ex);
    this.expenseDetails.addExpenseDetails(ex);
  }

  focused() {
    this.errors = "";
  }
}
