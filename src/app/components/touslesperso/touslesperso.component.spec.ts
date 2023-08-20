import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouslespersoComponent } from './touslesperso.component';

describe('TouslespersoComponent', () => {
  let component: TouslespersoComponent;
  let fixture: ComponentFixture<TouslespersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouslespersoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TouslespersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
