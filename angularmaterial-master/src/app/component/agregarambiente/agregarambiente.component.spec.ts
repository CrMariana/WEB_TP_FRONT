import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarambienteComponent } from './agregarambiente.component';

describe('AgregarambienteComponent', () => {
  let component: AgregarambienteComponent;
  let fixture: ComponentFixture<AgregarambienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarambienteComponent]
    });
    fixture = TestBed.createComponent(AgregarambienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
