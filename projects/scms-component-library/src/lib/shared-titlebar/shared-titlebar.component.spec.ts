import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedTitlebarComponent } from './shared-titlebar.component';

describe('SharedTitlebarComponent', () => {
  let component: SharedTitlebarComponent;
  let fixture: ComponentFixture<SharedTitlebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedTitlebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedTitlebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
