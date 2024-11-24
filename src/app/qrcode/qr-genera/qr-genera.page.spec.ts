import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrGeneraPage } from './qr-genera.page';

describe('QrGeneraPage', () => {
  let component: QrGeneraPage;
  let fixture: ComponentFixture<QrGeneraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QrGeneraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
