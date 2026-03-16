import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployee } from './list-employee';

describe('ListEmployee', () => {
  let component: ListEmployee;
  let fixture: ComponentFixture<ListEmployee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListEmployee],
    }).compileComponents();

    fixture = TestBed.createComponent(ListEmployee);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
