import { inject, TestBed } from '@angular/core/testing';
import { ProductResolver } from './product-resolver.resolver';


describe('ProductResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductResolver]
    });
  });

  it('should ...', inject([ProductResolver], (guard: ProductResolver) => {
    expect(guard).toBeTruthy();
  }));
});
