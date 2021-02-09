import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScmsComponentLibraryComponent } from './scms-component-library.component';

describe('ScmsComponentLibraryComponent', () => {
  let component: ScmsComponentLibraryComponent;
  let fixture: ComponentFixture<ScmsComponentLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScmsComponentLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScmsComponentLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
