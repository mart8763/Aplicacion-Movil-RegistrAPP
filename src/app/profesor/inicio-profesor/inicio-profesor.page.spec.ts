import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioProfesorPage } from './inicio-profesor.page';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { provideHttpClient } from '@angular/common/http';

describe('InicioProfesorPage', () => {
  let component: InicioProfesorPage;
  let fixture: ComponentFixture<InicioProfesorPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioProfesorPage],
      imports: [IonicModule.forRoot(), IonicStorageModule.forRoot()],
      providers: [provideHttpClient()]
    }).compileComponents();
    fixture = TestBed.createComponent(InicioProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
