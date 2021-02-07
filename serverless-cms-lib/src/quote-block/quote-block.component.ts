import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-block',
  templateUrl: './quote-block.component.html',
  styleUrls: ['./quote-block.component.scss']
})
export class QuoteBlockComponent implements OnInit {

  @Input() content: { 
    entryType: string,
    quoteText: string,
    source: string, 
    qualification: string,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
