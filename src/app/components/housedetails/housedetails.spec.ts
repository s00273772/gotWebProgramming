import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Housedetails } from './housedetails';

describe('Housedetails', () => {
  let component: Housedetails;
  let fixture: ComponentFixture<Housedetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Housedetails],
    }).compileComponents();

    fixture = TestBed.createComponent(Housedetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
