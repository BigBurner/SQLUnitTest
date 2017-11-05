import { UnitTestService } from './../unit-test.service';
import { Component, OnInit, Input } from '@angular/core';
import 'codemirror/mode/sql/sql.js'

@Component({
  selector: 'app-impl-tab',
  templateUrl: './impl-tab.component.html',
  styleUrls: ['./impl-tab.component.css']
})
export class ImplTabComponent implements OnInit {
  @Input() implUrl: string;
  uTestImpls: any[];
  config
  showall: boolean = false;

  constructor(private unitTestService: UnitTestService) { 
    this.config = { lineNumbers: true, mode: 'text/x-plsql', lineWrapping: true, autoRefresh: true };
  }

  ngOnInit() {

  }

  ngOnChanges(){
    console.log(this.implUrl)
    this.getUTestDetails();
  }

  getUTestDetails(){
    this.unitTestService.getUnitTest(this.implUrl)
    .then(data => {
      this.uTestImpls = data._embedded.utTestImpls
      this.uTestImpls.forEach(item => {
        item.code = this.getStringFromXml2(item.dynamicValueQuery, "code")
      })
      // console.log()
    })
  }

  getStringFromXml2(text: string, node: string): string{
    return this.unitTestService.getXmlFromString(text).getElementsByTagName(node)[0].childNodes[0].nodeValue
  }

}
