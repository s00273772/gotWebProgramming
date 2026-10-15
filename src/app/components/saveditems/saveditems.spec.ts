import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Saveditems } from './saveditems';

describe('Saveditems', () => {
  let component: Saveditems;
  let fixture: ComponentFixture<Saveditems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Saveditems],
    }).compileComponents();

    fixture = TestBed.createComponent(Saveditems);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
