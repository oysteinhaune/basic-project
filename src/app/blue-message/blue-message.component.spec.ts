import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueMessageComponent } from './blue-message.component';

describe('BlueMessageComponent', () => {
  let component: BlueMessageComponent;
  let fixture: ComponentFixture<BlueMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
