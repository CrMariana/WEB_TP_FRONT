import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditgraduadoComponent } from './editgraduado.component';

describe('EditgraduadoComponent', () => {
  let component: EditgraduadoComponent;
  let fixture: ComponentFixture<EditgraduadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditgraduadoComponent]
    });
    fixture = TestBed.createComponent(EditgraduadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
