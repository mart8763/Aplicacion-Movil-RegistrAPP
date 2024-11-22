import { TestBed } from '@angular/core/testing';

import { ApicontrollerService } from './apicontroller.service';
import { RegisterPage } from '../access/register/register.page';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { provideHttpClient } from '@angular/common/http';

describe('ApicontrollerService', () => {
  let service: ApicontrollerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), IonicStorageModule.forRoot()],
      providers: [provideHttpClient()]
    }).compileComponents();
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicontrollerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
