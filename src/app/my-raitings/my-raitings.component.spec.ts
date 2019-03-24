import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRaitingsComponent } from './my-raitings.component';

describe('MyRaitingsComponent', () => {
  let component: MyRaitingsComponent;
  let fixture: ComponentFixture<MyRaitingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRaitingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRaitingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
