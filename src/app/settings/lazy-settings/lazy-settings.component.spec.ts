import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazySettingsComponent } from './lazy-settings.component';

describe('LazySettingsComponent', () => {
  let component: LazySettingsComponent;
  let fixture: ComponentFixture<LazySettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazySettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
