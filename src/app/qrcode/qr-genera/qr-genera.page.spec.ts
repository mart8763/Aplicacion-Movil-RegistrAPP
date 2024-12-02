import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrGeneraPage } from './qr-genera.page';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { provideHttpClient } from '@angular/common/http';

describe('QrGeneraPage', () => {
  let component: QrGeneraPage;
  let fixture: ComponentFixture<QrGeneraPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QrGeneraPage],
      imports: [IonicModule.forRoot(), IonicStorageModule.forRoot()],
      providers: [provideHttpClient()]
    }).compileComponents();
    fixture = TestBed.createComponent(QrGeneraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
