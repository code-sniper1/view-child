import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCounterComponent } from './parent-counter.component';

describe('ParentCounterComponent', () => {
  let component: ParentCounterComponent;
  let fixture: ComponentFixture<ParentCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentCounterComponent]
    });
    fixture = TestBed.createComponent(ParentCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
