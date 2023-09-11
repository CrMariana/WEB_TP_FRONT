import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregareventoComponent } from './agregarevento.component';

describe('AgregareventoComponent', () => {
  let component: AgregareventoComponent;
  let fixture: ComponentFixture<AgregareventoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregareventoComponent]
    });
    fixture = TestBed.createComponent(AgregareventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
