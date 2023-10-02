import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditplacaComponent } from './editplaca.component';

describe('EditplacaComponent', () => {
  let component: EditplacaComponent;
  let fixture: ComponentFixture<EditplacaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditplacaComponent]
    });
    fixture = TestBed.createComponent(EditplacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
