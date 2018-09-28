import { TestBed, inject } from '@angular/core/testing';

import { ServiceListaService } from './service-lista.service';

describe('ServiceListaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceListaService]
    });
  });

  it('should be created', inject([ServiceListaService], (service: ServiceListaService) => {
    expect(service).toBeTruthy();
  }));
});
