import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card3Asyncpipe } from './card3-asyncpipe';

describe('Card3Asyncpipe', () => {
  let component: Card3Asyncpipe;
  let fixture: ComponentFixture<Card3Asyncpipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card3Asyncpipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card3Asyncpipe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
