import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RHsidebarComponent } from './rhsidebar.component';

describe('RHsidebarComponent', () => {
  let component: RHsidebarComponent;
  let fixture: ComponentFixture<RHsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RHsidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RHsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
