import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterdonneepersoComponent } from './ajouterdonneeperso.component';

describe('AjouterdonneepersoComponent', () => {
  let component: AjouterdonneepersoComponent;
  let fixture: ComponentFixture<AjouterdonneepersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterdonneepersoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterdonneepersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
