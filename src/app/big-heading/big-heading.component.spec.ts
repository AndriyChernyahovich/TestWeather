import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigHeadingComponent } from './big-heading.component';

describe('BigHeadingComponent', () => {
  let component: BigHeadingComponent;
  let fixture: ComponentFixture<BigHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
