import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduadoComponent } from './graduado.component';

describe('GraduadoComponent', () => {
  let component: GraduadoComponent;
  let fixture: ComponentFixture<GraduadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraduadoComponent]
    });
    fixture = TestBed.createComponent(GraduadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
