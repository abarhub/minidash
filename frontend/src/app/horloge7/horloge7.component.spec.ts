import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Horloge7Component } from './horloge7.component';

describe('Horloge7Component', () => {
  let component: Horloge7Component;
  let fixture: ComponentFixture<Horloge7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Horloge7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Horloge7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
