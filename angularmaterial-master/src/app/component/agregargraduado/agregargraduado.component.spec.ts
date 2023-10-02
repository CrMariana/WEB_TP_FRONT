import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregargraduadoComponent } from './agregargraduado.component';

describe('AgregargraduadoComponent', () => {
  let component: AgregargraduadoComponent;
  let fixture: ComponentFixture<AgregargraduadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregargraduadoComponent]
    });
    fixture = TestBed.createComponent(AgregargraduadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
