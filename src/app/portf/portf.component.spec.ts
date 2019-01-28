import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfComponent } from './portf.component';

describe('PortfComponent', () => {
  let component: PortfComponent;
  let fixture: ComponentFixture<PortfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
