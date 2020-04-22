import { TestBed } from '@angular/core/testing';

import { ServicioHomeService } from './servicio-home.service';

describe('ServicioHomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioHomeService = TestBed.get(ServicioHomeService);
    expect(service).toBeTruthy();
  });
});
