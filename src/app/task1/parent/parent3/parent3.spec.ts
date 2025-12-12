import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent3 } from './parent3';

describe('Parent3', () => {
  let component: Parent3;
  let fixture: ComponentFixture<Parent3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parent3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parent3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
