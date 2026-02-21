import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StasgameComponent } from './stasgame.component';

describe('StasgameComponent', () => {
  let component: StasgameComponent;
  let fixture: ComponentFixture<StasgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StasgameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StasgameComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
