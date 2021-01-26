import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MooseComponent } from './moose.component';

describe('MooseComponent', () => {
  let component: MooseComponent;
  let fixture: ComponentFixture<MooseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MooseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
