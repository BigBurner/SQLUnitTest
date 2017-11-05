import { CodemirrorModule } from 'ng2-codemirror';
import { UnitTestService } from './../unit-test.service';
import { Component, OnInit, Input, ContentChildren } from '@angular/core';
import 'codemirror/mode/sql/sql.js'

@Component({
  selector: 'app-startups-tab',
  templateUrl: './startups-tab.component.html',
  styleUrls: ['./startups-tab.component.css']
})
export class StartupsTabComponent implements OnInit {
  @Input() startupURL: string;
  uTestStartups: any[];
  config

  constructor(private unitTestService: UnitTestService) {
    this.config = { lineNumbers: true, mode: 'text/x-plsql', lineWrapping: true, autoRefresh: true };
   }

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

  getStringFromXml2(text: string, node: string): string{
    return this.unitTestService.getXmlFromString(text).getElementsByTagName(node)[0].childNodes[0].nodeValue
  }

  onStartupCodeChange(indx: number){
    console.log('change called')
    this.uTestStartups[indx].changed = true;
  }
  correctData() {
    this.uTestStartups.forEach(item => {
      console.log(item);
    })
    
    // let data: any[];  
    // this.unitTestService.getUnitTest("http://localhost:8080/utStartups/")
    // .then(ret => {
    //   data = ret._embedded.utStartups
    //   data.forEach(item => {
    //     if (item.startup){
    //       item.startupClass = this.getStringFromXml2(item.startup,"class")
    //       item.startup = this.getStringFromXml2(item.startup,"code")
    //       console.log(item)
    //       this.unitTestService.putData(item._links.self.href,item)
    //       .then(res => console.log(res))
    //       .catch(err => console.log(err))
    //     }
    //     // console.log(item._links.self.href)
    //     // console.log(item.startup)
    //     //this.unitTestService
    //   })
    // })
  }

  onSaveClick(){
    this.uTestStartups.forEach(item => {
      if (item._links.self.href) {
        this.unitTestService.putData(item._links.self.href,item)
        .then(res => console.log(res))
        .catch(err => console.log(err))        
      }
    })
  }
  
}
