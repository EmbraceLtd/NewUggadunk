import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UggabuggComponent } from './uggabugg.component';

describe('UggabuggComponent', () => {
  let component: UggabuggComponent;
  let fixture: ComponentFixture<UggabuggComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UggabuggComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UggabuggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
