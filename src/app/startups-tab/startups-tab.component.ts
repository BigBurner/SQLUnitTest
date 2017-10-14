import { UnitTestService } from './../unit-test.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-startups-tab',
  templateUrl: './startups-tab.component.html',
  styleUrls: ['./startups-tab.component.css']
})
export class StartupsTabComponent implements OnInit {
  @Input() startupURL: string;
  uTestStartups: any[];

  constructor(private unitTestService: UnitTestService) { }

  ngOnInit() {
  }

  ngOnChanges(){
    // console.log(this.selectedUT)
    this.getUTestDetails()
  }

  getUTestDetails(){
    this.unitTestService.getUnitTest(this.startupURL)
    .then(data => {
      this.uTestStartups = data._embedded.utStartups
      // console.log()
    })
  }

  getStringFromXml(text: string): string{
    return this.unitTestService.getXmlFromString(text).getElementsByTagName("code")[0].childNodes[0].nodeValue
  }
  
}
