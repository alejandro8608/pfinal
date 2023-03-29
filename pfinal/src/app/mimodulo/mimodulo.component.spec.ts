import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MIMODULOComponent } from './mimodulo.component';

describe('MIMODULOComponent', () => {
  let component: MIMODULOComponent;
  let fixture: ComponentFixture<MIMODULOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MIMODULOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MIMODULOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
