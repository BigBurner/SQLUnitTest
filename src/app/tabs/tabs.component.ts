import {Component,ContentChildren,QueryList,AfterContentInit,OnInit} from '@angular/core';
import {TabComponent} from './tab.component';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterContentInit {

@ContentChildren(TabComponent)
tabs:QueryList<TabComponent>;

selectedTab:TabComponent;

ngAfterContentInit() {
    this.select(this.tabs.first);
}

onSelect(tab) {
    this.select(tab);
    return false;
}

select(tab) {
  this.tabs.forEach((item)=>{
     item.show = false;
   });

   this.selectedTab = tab;
   this.selectedTab.show = true;
}

  constructor() { }

  ngOnInit() {
  	console.log("tabs init")
  }

}
