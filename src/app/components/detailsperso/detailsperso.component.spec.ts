import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailspersoComponent } from './detailsperso.component';

describe('DetailspersoComponent', () => {
  let component: DetailspersoComponent;
  let fixture: ComponentFixture<DetailspersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailspersoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailspersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
