import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxServicosComponent } from './box-servicos.component';

describe('BoxServicosComponent', () => {
  let component: BoxServicosComponent;
  let fixture: ComponentFixture<BoxServicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxServicosComponent]
    });
    fixture = TestBed.createComponent(BoxServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
