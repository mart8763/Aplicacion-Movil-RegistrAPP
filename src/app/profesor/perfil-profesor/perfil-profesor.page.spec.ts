import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilProfesorPage } from './perfil-profesor.page';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { provideHttpClient } from '@angular/common/http';

describe('PerfilProfesorPage', () => {
  let component: PerfilProfesorPage;
  let fixture: ComponentFixture<PerfilProfesorPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilProfesorPage],
      imports: [IonicModule.forRoot(), IonicStorageModule.forRoot()],
      providers: [provideHttpClient()]
    }).compileComponents();
    fixture = TestBed.createComponent(PerfilProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
