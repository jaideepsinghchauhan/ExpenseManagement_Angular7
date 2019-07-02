import { Component, OnInit } from '@angular/core';
import { ExpenseDetailService } from '../expense-detail.service';
import { Expense } from '../shared/expense';
import { formatDate } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalBudget: number;
  totalCategories = [];
  Expenses: Expense;
  expensesArray: Expense[];
  errors: string = "";
  totalExpenses: number;
  percentSpent: number;

  config: any;

  constructor(private expenseDetails: ExpenseDetailService) { }

  pageChanged(event) {
    this.config.currentPage = event;
  }
  public pieChartData: number[] = [];
  public pieChartType: string = 'pie';
  public pieChartOptions: any = {};

  ngOnInit() {
    this.totalBudget = this.expenseDetails.totalBudget;
    this.totalExpenses = +this.expenseDetails.totalExpenses;
    this.totalCategories = this.expenseDetails.getcategories();
    this.expensesArray = this.expenseDetails.getExpenseDetails();
    this.percentSpent = Math.round(((this.totalExpenses / (+this.totalBudget)) * 100));
    if (Number.isNaN(this.percentSpent)) {
      this.percentSpent = 0;
    }
    this.calculateData();
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.expensesArray.length
    };

  }

  calculateData() {
    this.totalCategories.forEach((v) => {
      console.log(v);
      var temp = 0;
      for (var i = 0; i < this.expensesArray.length; i++) {
        if (v == this.expensesArray[i].category) {
          console.log(" category" + this.expensesArray[i].category);
          temp += this.expensesArray[i].amount;
        }
      }
      this.pieChartData.push(temp);
    });
  }

  addExpenses(category: HTMLInputElement,
    itemName: HTMLInputElement,
    amount: HTMLInputElement,
    date: HTMLInputElement) {

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



    if ((this.totalExpenses + (Number.parseInt(amount.value))) < this.totalBudget) {
      let ex = new Expense(category.value, itemName.value, +amount.value, formatDate(date.value, format, locale));
      console.log("expenses");
      console.log(ex);
      this.expenseDetails.updateExpense(Number.parseInt(amount.value));
      this.expenseDetails.addExpenseDetails(ex);
    } else {
      this.errors += "Total Expenses cannot be more then budget";
    }
    console.log("expenses added" + category.value + " " +
      itemName.value + " " + amount.value + " " + date.value);

    if (!this.errors) {
      $('#myModal').modal('hide');
      amount.value = "";
      itemName.value = "";
      date.value = "";
    }

  }

  focused() {
    this.errors = "";
  }

  deleteExpenseDetails(index) {
    console.log(index);
    this.expenseDetails.deleteDetails(index);
  }
}
