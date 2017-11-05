import { UnitTestService } from './unit-test.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';
import { CodemirrorModule } from 'ng2-codemirror';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TestDetailComponent } from './test-detail/test-detail.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';
import { StartupsTabComponent } from './startups-tab/startups-tab.component';
import { ImplTabComponent } from './impl-tab/impl-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TestDetailComponent,
    MainSectionComponent,
    TabsComponent,
    TabComponent,
    StartupsTabComponent,
    ImplTabComponent
  ],
  imports: [
    BrowserModule,
    CodemirrorModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'detail/:id',
        component: MainSectionComponent
      }
    ])
  ],
  providers: [UnitTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
