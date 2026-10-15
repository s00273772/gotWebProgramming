import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listhouses } from './listhouses';

describe('Listhouses', () => {
  let component: Listhouses;
  let fixture: ComponentFixture<Listhouses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listhouses],
    }).compileComponents();

    fixture = TestBed.createComponent(Listhouses);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
