import { UnitTestService } from './../unit-test.service';
import { Component, OnInit, Input, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.css']
})
export class TestDetailComponent implements OnInit {
  @Input() selectedUT: any;
  uTestStartup: any;

  constructor(private unitTestService: UnitTestService) { }

  ngOnInit() {
    console.log("test detail init")
    // this.getUTestDetails()
    
    
  }

}
