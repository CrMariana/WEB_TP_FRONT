import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeventoComponent } from './editevento.component';

describe('EditeventoComponent', () => {
  let component: EditeventoComponent;
  let fixture: ComponentFixture<EditeventoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditeventoComponent]
    });
    fixture = TestBed.createComponent(EditeventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
