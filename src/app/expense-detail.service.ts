import { Injectable } from '@angular/core';
import { Expense } from './shared/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseDetailService {
  categoriesArr = [];
  expenseDetailsArray = [];

  constructor() {
    if (localStorage.getItem("categories") != null) {
      this.categoriesArr = JSON.parse(localStorage.getItem('categories'));
    }
    if (localStorage.getItem("expenseDetails") != null) {
      this.expenseDetailsArray = JSON.parse(localStorage.getItem('expenseDetails'));
    }

    console.log(this.categoriesArr);
    console.log(this.expenseDetailsArray);
  }

  addExpenseDetails(expense: Expense) {
    console.log("inside service expense");
    console.log(expense);
    if (!expense) {
      return;
    } else {
      this.expenseDetailsArray.push(expense);
      localStorage.setItem('expenseDetails', JSON.stringify(this.expenseDetailsArray));
    }
  }


  updateBudget(amount) {
    if (amount < 0) {
      amount = 0;
      localStorage.setItem('projectBudget', amount);
    } else {
      localStorage.setItem('projectBudget', amount);
    }
  }
  updateExpense(amount) {
    if (amount < 0) {
      amount = 0;
      localStorage.setItem('projectExpense', amount);
    } else {
      let pExpense = localStorage.getItem('projectExpense');

      amount += Number.parseInt(pExpense);
      localStorage.setItem('projectExpense', amount);
    }
  }

  addCategory(name: string) {
    if (!name) {
      return;
    } else {
      this.categoriesArr.push(name);
      console.log(localStorage.setItem('categories', JSON.stringify(this.categoriesArr)));
    }
  }
  getExpenseDetails() {
    return this.expenseDetailsArray;
  }
  get totalBudget() {
    let amount = localStorage.getItem('projectBudget');
    if (!amount) {
      return 0;
    } else {
      return amount;
    }
  }
  get totalExpenses() {
    let pExpense = localStorage.getItem('projectExpense');
    if (!pExpense) {
      return 0;
    } else {
      return pExpense;
    }
  }
  getcategories() {
    return this.categoriesArr;
  }
}
