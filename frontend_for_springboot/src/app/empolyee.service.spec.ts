import { TestBed } from '@angular/core/testing';
import { Empolyeeservice } from './empolyee.service';



describe('Empolyee', () => {
  let service: Empolyeeservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Empolyeeservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
