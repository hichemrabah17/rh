import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauRHComponent } from './tableau-rh.component';

describe('TableauRHComponent', () => {
  let component: TableauRHComponent;
  let fixture: ComponentFixture<TableauRHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauRHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauRHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
