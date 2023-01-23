import { TestBed } from '@angular/core/testing';

import { SetCsrfInterceptor } from './setCsrf.interceptor';

describe('HeadersInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SetCsrfInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SetCsrfInterceptor = TestBed.inject(SetCsrfInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
