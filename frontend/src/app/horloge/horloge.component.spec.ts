import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorlogeComponent } from './horloge.component';

describe('Horloge7Component', () => {
  let component: HorlogeComponent;
  let fixture: ComponentFixture<HorlogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorlogeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorlogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
