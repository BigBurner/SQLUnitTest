import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.css']
})
export class TestDetailComponent implements OnInit {
  @Input() selectedUT: any;
  constructor() { }

  ngOnInit() {
  }

}
