import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixchartComponent } from './matrixchart.component';

describe('MatrixchartComponent', () => {
  let component: MatrixchartComponent;
  let fixture: ComponentFixture<MatrixchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrixchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrixchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
