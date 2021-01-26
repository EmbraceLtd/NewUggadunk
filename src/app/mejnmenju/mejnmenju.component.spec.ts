import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MejnmenjuComponent } from './mejnmenju.component';

describe('MejnmenjuComponent', () => {
  let component: MejnmenjuComponent;
  let fixture: ComponentFixture<MejnmenjuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MejnmenjuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MejnmenjuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
