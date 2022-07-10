import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTypeComponent } from './profile-type.component';

describe('ProfileTypeComponent', () => {
  let component: ProfileTypeComponent;
  let fixture: ComponentFixture<ProfileTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
