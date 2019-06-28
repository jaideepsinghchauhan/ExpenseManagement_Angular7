import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyProfileComponent } from './lazy-profile.component';

describe('LazyProfileComponent', () => {
  let component: LazyProfileComponent;
  let fixture: ComponentFixture<LazyProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
