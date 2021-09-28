import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HadderComponent } from './hadder.component';

describe('HadderComponent', () => {
  let component: HadderComponent;
  let fixture: ComponentFixture<HadderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HadderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
