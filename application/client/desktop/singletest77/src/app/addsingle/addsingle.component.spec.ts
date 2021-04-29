import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsingleComponent } from './addsingle.component';

describe('AddsingleComponent', () => {
  let component: AddsingleComponent;
  let fixture: ComponentFixture<AddsingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});