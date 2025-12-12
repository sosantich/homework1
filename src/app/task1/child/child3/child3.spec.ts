import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child3 } from './child3';

describe('Child3', () => {
  let component: Child3;
  let fixture: ComponentFixture<Child3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
