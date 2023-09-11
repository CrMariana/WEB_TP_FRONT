import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarplacaComponent } from './agregarplaca.component';

describe('AgregarplacaComponent', () => {
  let component: AgregarplacaComponent;
  let fixture: ComponentFixture<AgregarplacaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarplacaComponent]
    });
    fixture = TestBed.createComponent(AgregarplacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
