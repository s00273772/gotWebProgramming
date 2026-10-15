import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Searchhouse } from './searchhouse';

describe('Searchhouse', () => {
  let component: Searchhouse;
  let fixture: ComponentFixture<Searchhouse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Searchhouse],
    }).compileComponents();

    fixture = TestBed.createComponent(Searchhouse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
