import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUtlComponent } from './show-utl.component';

describe('ShowUtlComponent', () => {
  let component: ShowUtlComponent;
  let fixture: ComponentFixture<ShowUtlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUtlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
