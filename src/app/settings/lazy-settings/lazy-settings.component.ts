import { Component, OnInit } from '@angular/core';
import { ExpenseDetailService } from 'src/app/expense-detail.service';

@Component({
  selector: 'app-lazy-settings',
  templateUrl: './lazy-settings.component.html',
  styleUrls: ['./lazy-settings.component.css']
})
export class LazySettingsComponent implements OnInit {
  inputBudget: number;
  inputCategory: string;
  categoryArray  = [];
  constructor( private expenseDetails: ExpenseDetailService) { 
    this.categoryArray = this.expenseDetails.getcategories();
    console.log(this.categoryArray);
  }

  ngOnInit() {
    this.inputBudget = this.expenseDetails.totalBudget;
  }

  AddBudget() {
    this.expenseDetails.updateBudget(this.inputBudget);
    console.log("clicked"+this.inputBudget);
  }

  addCategories(){
    this.expenseDetails.addCategory(this.inputCategory);
    console.log("added category"+ this.inputCategory);
  }

  deletecategories(index){
    this.expenseDetails.deleteCategories(index);
  }
}
