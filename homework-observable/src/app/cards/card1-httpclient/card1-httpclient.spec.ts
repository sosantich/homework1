import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card1Httpclient } from './card1-httpclient';

describe('Card1Httpclient', () => {
  let component: Card1Httpclient;
  let fixture: ComponentFixture<Card1Httpclient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card1Httpclient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card1Httpclient);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
