import { TestBed } from '@angular/core/testing';

import { GspTranslationServiceService } from './gsp-translation-service.service';

describe('GspTranslationServiceService', () => {
  let service: GspTranslationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GspTranslationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
