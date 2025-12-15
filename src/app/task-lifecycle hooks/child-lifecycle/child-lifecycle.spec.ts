import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLifecycle } from './child-lifecycle';

describe('ChildLifecycle', () => {
  let component: ChildLifecycle;
  let fixture: ComponentFixture<ChildLifecycle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildLifecycle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildLifecycle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
