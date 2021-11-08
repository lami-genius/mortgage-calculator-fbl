import { QuoteService } from './../services/quote.service';

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IQuote } from '../model/iquote';

@Component({
  selector: 'mcfbl-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  private _quote: IQuote = {
    quoteBy: 'Jean Chatzky',
    quoteText: "Debt certainly isn't always a bad thing.A mortgage can help you afford a home.Student loans can be a necessity in getting a good job.Both are investments worth making, and both come with fairly low interest rates.",
  };

  public get quote(): IQuote {
    return this._quote;
  }

  public set quote(quote: IQuote) {
    this._quote = quote;
  }

  constructor(private _toastrService: ToastrService, private _quoteService: QuoteService) { }

  ngOnInit(): void {
    this.quote = this._quoteService.getQuote();
  }
  getQuote() {
    this.quote = this._quoteService.getQuote();
    this._toastrService.success("Hurray! new mortgage quote")
  }

}
