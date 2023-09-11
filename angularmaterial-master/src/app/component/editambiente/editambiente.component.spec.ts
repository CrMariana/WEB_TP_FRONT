import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditambienteComponent } from './editambiente.component';

describe('EditambienteComponent', () => {
  let component: EditambienteComponent;
  let fixture: ComponentFixture<EditambienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditambienteComponent]
    });
    fixture = TestBed.createComponent(EditambienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
