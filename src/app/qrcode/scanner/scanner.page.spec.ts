import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScannerPage } from './scanner.page';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { provideHttpClient } from '@angular/common/http';

describe('ScannerPage', () => {
  let component: ScannerPage;
  let fixture: ComponentFixture<ScannerPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScannerPage],
      imports: [IonicModule.forRoot(), IonicStorageModule.forRoot()],
      providers: [provideHttpClient()]
    }).compileComponents();
    fixture = TestBed.createComponent(ScannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
