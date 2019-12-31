import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeangLabelComponent } from './seang-label.component';

describe('SeangLabelComponent', () => {
  let component: SeangLabelComponent;
  let fixture: ComponentFixture<SeangLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeangLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeangLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
