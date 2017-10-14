import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupsTabComponent } from './startups-tab.component';

describe('StartupsTabComponent', () => {
  let component: StartupsTabComponent;
  let fixture: ComponentFixture<StartupsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
