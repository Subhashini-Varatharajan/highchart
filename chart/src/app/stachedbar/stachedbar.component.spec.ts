import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StachedbarComponent } from './stachedbar.component';

describe('StachedbarComponent', () => {
  let component: StachedbarComponent;
  let fixture: ComponentFixture<StachedbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StachedbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StachedbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
