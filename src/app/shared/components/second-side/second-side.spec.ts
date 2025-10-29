import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSide } from './second-side';

describe('SecondSide', () => {
  let component: SecondSide;
  let fixture: ComponentFixture<SecondSide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondSide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondSide);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
