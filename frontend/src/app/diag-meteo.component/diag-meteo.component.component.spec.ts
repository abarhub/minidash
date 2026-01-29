import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagMeteoComponentComponent } from './diag-meteo.component.component';

describe('DiagMeteoComponentComponent', () => {
  let component: DiagMeteoComponentComponent;
  let fixture: ComponentFixture<DiagMeteoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagMeteoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagMeteoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
