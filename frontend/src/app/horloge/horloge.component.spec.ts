import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorlogeComponent } from './horloge.component';

describe('HorlogeComponent', () => {
  let component: HorlogeComponent;
  let fixture: ComponentFixture<HorlogeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorlogeComponent]
    });
    fixture = TestBed.createComponent(HorlogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
