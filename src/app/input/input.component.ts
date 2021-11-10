import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { ToastrService } from 'ngx-toastr';

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
  maxRepaymentDuration: number = 250;
  maxAmount: number = 1000000;
  minValue: number = 0;
  title = 'mortgage-calculator-fbl';
  loanAmount: number = 0;
  estimatedPerMonth: number = 0;

  constructor(private _toastrService: ToastrService) { }

  ngOnInit(): void {
    this.calMortgage()
  }

  calMortgage() {
    let P = (this.purchasePrice - this.downPayment)
    let r = (this.interestRate / (100.0 * 12))
    let n = this.repaymentTime * 12.0;

    this.estimatedPerMonth = P * ((r * (1 + r) ** n) / (((1 + r) ** n) - 1))

    // rounding up
    if (n === 0 || r == 0 || P == 0) {
      this.loanAmount = 0
      this.estimatedPerMonth = 0
    }
    else {
      this.loanAmount = Math.ceil(this.estimatedPerMonth * n) > 0 ? Math.ceil(this.estimatedPerMonth * n) : 0
      this.estimatedPerMonth = Math.ceil(this.estimatedPerMonth) > 0 ? Math.ceil(this.estimatedPerMonth) : 0
    }


  }

  getUpdatedInterestRate(event: MatSliderChange) {
    this.interestRate = event.value ? event.value : 0;

    // update calculation
    this.calMortgage()
  }

  getUpdatedDownPayment(event: MatSliderChange) {
    this.downPayment = event.value ? event.value : 0;

    // update calculation
    this.calMortgage()
  }

  getUpdatedPurchasePrice(event: MatSliderChange) {
    this.purchasePrice = event.value ? event.value : 0;

    if (this.purchasePrice < this.downPayment)
      this.downPayment = this.purchasePrice

    // update calculation
    this.calMortgage()
  }

  getUpdatedRepaymentTime(event: MatSliderChange) {
    this.repaymentTime = event.value ? event.value : 0;

    // update calculation
    this.calMortgage()
  }

  getLoanAmount() {
    return this.loanAmount
  }

  getMonthlyAmount() {
    return this.estimatedPerMonth
  }


  onKeyPurchasePrice(event: any) {
    if (event.target.value < 0) {
      this._toastrService.warning('Purchase Price cannot be negative!')
    } else if (event.target.value < this.downPayment) {
      this.downPayment = this.purchasePrice
    }
    else {
      this.purchasePrice = event.target.value
    }


    // update calculation
    this.calMortgage()
  }

  onKeyDownPayment(event: any) {
    if (event.target.value < 0) {
      this._toastrService.warning('Down Payment cannot be negative!')
    }
    else if (event.target.value <= this.purchasePrice)
      this.downPayment = event.target.value
    else if (event.target.value > this.purchasePrice) {
      this.downPayment = this.purchasePrice
      this._toastrService.info('Down Payment must be less than or equal to Purchase Price')
    }


    // update calculation
    this.calMortgage()
  }
  onKeyRepaymentTime(event: any) {
    if (event.target.value < 0) {
      this._toastrService.warning('Repayment Time cannot be negative!')
    }
    else if (event.target.value > this.maxRepaymentDuration) {
      this.repaymentTime = this.maxRepaymentDuration
      this._toastrService.info('Repayment Time is at most ' + this.maxRepaymentDuration + ' years!')
    }
    else {
      this.repaymentTime = event.target.value
    }

    // update calculation
    this.calMortgage()
  }

  onKeyInterestRate(event: any) {
    if (event.target.value < 0) {
      this._toastrService.warning('Interest Rate cannot be negative!')
    }
    if (event.target.value > 100) {
      {
        this.interestRate = 100
        this._toastrService.warning('Interest Rate must be at most 100!')
      }
    }
    else {
      this.interestRate = event.target.value
    }

    // update calculation
    this.calMortgage()
  }
}


