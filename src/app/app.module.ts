import { UnitTestService } from './unit-test.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TestDetailComponent } from './test-detail/test-detail.component';
import { MainSectionComponent } from './main-section/main-section.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TestDetailComponent,
    MainSectionComponent
  ],
  imports: [
    BrowserModule,
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
