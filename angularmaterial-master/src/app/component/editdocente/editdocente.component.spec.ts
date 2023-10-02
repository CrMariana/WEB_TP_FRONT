import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdocenteComponent } from './editdocente.component';

describe('EditdocenteComponent', () => {
  let component: EditdocenteComponent;
  let fixture: ComponentFixture<EditdocenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditdocenteComponent]
    });
    fixture = TestBed.createComponent(EditdocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
