import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplTabComponent } from './impl-tab.component';

describe('ImplTabComponent', () => {
  let component: ImplTabComponent;
  let fixture: ComponentFixture<ImplTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
