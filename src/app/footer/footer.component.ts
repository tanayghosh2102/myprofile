import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() linkName;
  // @Output() selectedNameOut;
  selectedLink = "home";

  // @Output() manageFooterLink = new EventEmitter<any>();

  manageFooterLinks(linkName) {
    console.log(linkName);
    this.selectedLink = linkName;
  }

  constructor() { }

  ngOnInit() {
  }

}
