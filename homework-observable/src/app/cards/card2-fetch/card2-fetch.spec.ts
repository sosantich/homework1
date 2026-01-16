import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card2Fetch } from './card2-fetch';

describe('Card2Fetch', () => {
  let component: Card2Fetch;
  let fixture: ComponentFixture<Card2Fetch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card2Fetch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card2Fetch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
