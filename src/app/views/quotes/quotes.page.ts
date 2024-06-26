import { Component, OnInit } from '@angular/core';
import { IQuotes } from 'src/app/interfaces/Iquote';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {
  public loaded = false;
  constructor( private quoteService: QuoteService) { }
  
  quotes: Array<IQuotes> = []
  ngOnInit() {
    this.loadQuote()
  }

  loadQuote(){
    this.loaded = true;
    this.quoteService.loadingQuotes().subscribe((res: any) =>{
      const { quotes } = res
      this.quotes = quotes
      // console.log(res)
      this.loaded = false;
    })
  }

}
