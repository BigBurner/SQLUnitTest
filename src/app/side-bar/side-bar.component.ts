import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UnitTestService } from './../unit-test.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  unitTests: any[];
  selectedUnitTest: any;
  
  constructor(private router: Router, private unitTestService: UnitTestService) { }
  
  ngOnInit() {
    this.getData()
    // console.log(this.udata.length)
  }

  getData(): void {
    this.unitTestService.getUnitTests()
    .then(data => {console.log(data); this.unitTests = data})
  }

  onSelect (unitTest: any) {
    this.selectedUnitTest = unitTest;
    // this.gotoDetail();
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedUnitTest]);
  }
}
