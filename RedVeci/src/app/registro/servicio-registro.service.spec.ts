import { TestBed } from '@angular/core/testing';

import { ServicioRegistroService } from './servicio-registro.service';

describe('ServicioRegistroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioRegistroService = TestBed.get(ServicioRegistroService);
    expect(service).toBeTruthy();
  });
});
