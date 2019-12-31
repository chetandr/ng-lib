import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeangLabel2Component } from './seang-label2.component';

describe('SeangLabel2Component', () => {
  let component: SeangLabel2Component;
  let fixture: ComponentFixture<SeangLabel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeangLabel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeangLabel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
