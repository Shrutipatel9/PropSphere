import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss'],
})
export class CalcComponent implements OnInit {
  loanAmount: number = 100000;
  interestRate: number = 24;
  loanDuration: number = 6;

  monthlyEMI: number = 0;
  totalAmountPayable: number = 0;
  interestComponent: number = 0;

  constructor() {
    this.calculateEMI();
  }
  ngOnInit(): void {}

  calculateEMI() {
    const P = this.loanAmount;
    const r = this.interestRate / (12 * 100);
    const n = this.loanDuration * 12;

    this.monthlyEMI = P * r * (Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1));
    this.totalAmountPayable = this.monthlyEMI * n;
    this.interestComponent = this.totalAmountPayable - P;
  }
}
