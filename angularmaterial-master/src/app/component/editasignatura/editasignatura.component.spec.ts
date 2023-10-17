import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditasignaturaComponent } from './editasignatura.component';

describe('EditasignaturaComponent', () => {
  let component: EditasignaturaComponent;
  let fixture: ComponentFixture<EditasignaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditasignaturaComponent]
    });
    fixture = TestBed.createComponent(EditasignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
