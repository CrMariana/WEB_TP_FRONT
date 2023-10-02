import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregardocenteComponent } from './agregardocente.component';

describe('AgregardocenteComponent', () => {
  let component: AgregardocenteComponent;
  let fixture: ComponentFixture<AgregardocenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregardocenteComponent]
    });
    fixture = TestBed.createComponent(AgregardocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
