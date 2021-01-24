import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditUtlComponent } from './add-edit-utl.component';

describe('AddEditUtlComponent', () => {
  let component: AddEditUtlComponent;
  let fixture: ComponentFixture<AddEditUtlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditUtlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditUtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
