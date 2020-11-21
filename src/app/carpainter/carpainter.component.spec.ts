import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpainterComponent } from './carpainter.component';

describe('CarpainterComponent', () => {
  let component: CarpainterComponent;
  let fixture: ComponentFixture<CarpainterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarpainterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpainterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
