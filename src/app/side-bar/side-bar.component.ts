import { Component, OnInit } from '@angular/core';
import { UnitTestService } from './../unit-test.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  unitTests: any[];
  
  constructor(private unitTestService: UnitTestService) { }
  
  ngOnInit() {
    this.getData()
    // console.log(this.udata.length)
  }

  getData(): void {
    this.unitTestService.getUnitTests()
    .then(data => {console.log(data); this.unitTests = data})
  }

}
