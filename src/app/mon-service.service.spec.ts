import { TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { MonServiceService } from './mon-service.service';
import { of } from 'rxjs';

describe('MonServiceService', () => {
  let httpClientMock: jasmine.SpyObj<HttpClient>;

  let service: MonServiceService;

  beforeEach(() => {
    httpClientMock = jasmine.createSpyObj('HttpClient', [ 'get' ]);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpClientMock }
      ]
    });
    service = TestBed.inject(MonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a promise of "Résultat API" when get is called', (done) => {
    httpClientMock.get.withArgs('/api').and.returnValue(of('Résultat API'));

    service.get().then(result => {
      expect(result).toEqual('Résultat API');
      done();
    });
  });
});
