import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listcharacters } from './listcharacters';

describe('Listcharacters', () => {
  let component: Listcharacters;
  let fixture: ComponentFixture<Listcharacters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listcharacters],
    }).compileComponents();

    fixture = TestBed.createComponent(Listcharacters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
