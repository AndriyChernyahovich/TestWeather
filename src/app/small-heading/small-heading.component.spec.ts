import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallHeadingComponent } from './small-heading.component';

describe('SmallHeadingComponent', () => {
  let component: SmallHeadingComponent;
  let fixture: ComponentFixture<SmallHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
