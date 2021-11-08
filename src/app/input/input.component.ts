import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'mcfbl-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  downPayment: number = 100000;
  purchasePrice: number = 400000;
  repaymentTime: number = 30;
  interestRate: number = 5;
  maxRepaymentDuration: number = 100;
  maxAmount: number = 1000000;
  minValue: number = 0;
  title = 'mortgage-calculator-fbl';
  loanAmount: number = 0;
  estimatedPerMonth: number = 0;

  ngOnInit(): void {
    this.calMortgage()
  }

  calMortgage() {
    let P = (this.purchasePrice - this.downPayment)
    let r = (this.interestRate / (100.0 * 12))
    let n = this.repaymentTime * 12.0;

    this.estimatedPerMonth = P * ((r * (1 + r) ** n) / (((1 + r) ** n) - 1))

    // rounding up
    if (n != 0) {
      this.loanAmount = Math.ceil(this.estimatedPerMonth * n) > 0 ? Math.ceil(this.estimatedPerMonth * n) : 0
      this.estimatedPerMonth = Math.ceil(this.estimatedPerMonth) > 0 ? Math.ceil(this.estimatedPerMonth) : 0
    }
    else {
      this.loanAmount = 0
      this.estimatedPerMonth = 0
    }


  }

  getUpdatedInterestRate(event: MatSliderChange) {
    this.interestRate = event.value ? event.value : this.interestRate;

    // update calculation
    this.calMortgage()
  }

  getUpdatedDownPayment(event: MatSliderChange) {
    this.downPayment = event.value ? event.value : this.downPayment;

    // update calculation
    this.calMortgage()
  }

  getUpdatedPurchasePrice(event: MatSliderChange) {
    this.purchasePrice = event.value ? event.value : this.purchasePrice;

    // update calculation
    this.calMortgage()
  }

  getUpdatedRepaymentTime(event: MatSliderChange) {
    this.repaymentTime = event.value ? event.value : this.repaymentTime;

    // update calculation
    this.calMortgage()
  }

  getLoanAmount() {
    return this.loanAmount
  }

  getMonthlyAmount() {
    return this.estimatedPerMonth
  }


}
