import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery5Component } from './gallery5.component';

describe('Gallery5Component', () => {
  let component: Gallery5Component;
  let fixture: ComponentFixture<Gallery5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gallery5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gallery5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
