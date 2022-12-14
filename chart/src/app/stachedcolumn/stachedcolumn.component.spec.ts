import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StachedcolumnComponent } from './stachedcolumn.component';

describe('StachedcolumnComponent', () => {
  let component: StachedcolumnComponent;
  let fixture: ComponentFixture<StachedcolumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StachedcolumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StachedcolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
