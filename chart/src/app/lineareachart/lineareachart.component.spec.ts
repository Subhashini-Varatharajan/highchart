import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineareachartComponent } from './lineareachart.component';

describe('LineareachartComponent', () => {
  let component: LineareachartComponent;
  let fixture: ComponentFixture<LineareachartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineareachartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineareachartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
