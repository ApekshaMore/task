import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDispComponent } from './data-disp.component';

describe('DataDispComponent', () => {
  let component: DataDispComponent;
  let fixture: ComponentFixture<DataDispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
