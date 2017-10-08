import { UnitTestService } from './../unit-test.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {
  par: String;
  unitTest: any;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private unitTestService: UnitTestService) { }

  ngOnInit() {

    this.route.paramMap
    .switchMap((params: ParamMap) => this.unitTestService.getUnitTest(params.get('id')))
    .subscribe((unitTest: any) => {this.unitTest = unitTest
      console.log(unitTest.name);
    }); 
  }

}
