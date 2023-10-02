import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarasignaturaComponent } from './agregarasignatura.component';

describe('AgregarasignaturaComponent', () => {
  let component: AgregarasignaturaComponent;
  let fixture: ComponentFixture<AgregarasignaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarasignaturaComponent]
    });
    fixture = TestBed.createComponent(AgregarasignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
