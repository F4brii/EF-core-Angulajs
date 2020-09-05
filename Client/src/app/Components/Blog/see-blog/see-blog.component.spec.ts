import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeBlogComponent } from './see-blog.component';

describe('SeeBlogComponent', () => {
  let component: SeeBlogComponent;
  let fixture: ComponentFixture<SeeBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
