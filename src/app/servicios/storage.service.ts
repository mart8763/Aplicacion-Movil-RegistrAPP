import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private bdd: Storage | null = null;
  private bddStatus: Promise<void>;

  constructor(private storage: Storage) {
    this.bddStatus = this.onInit();
  }

  // Inicializar el almacenamiento
  private async onInit(): Promise<void> {
    const storage = await this.storage.create();
    this.bdd = storage;
    console.log("Storage inicializado"); // Log para confirmar la inicialización
  }

  private async BDDConectada(): Promise<void> {
    await this.bddStatus;
  }

  async get(key: string): Promise<any> {
    await this.BDDConectada();
    const value = await this.bdd?.get(key);
    console.log(`Obteniendo ${key}:`, value); // Log para verificar el valor obtenido
    return value;
  }

  async set(key: string, valor: any): Promise<any> {
    await this.BDDConectada();
    const result = await this.bdd?.set(key, valor);
    console.log(`Guardado ${key} con éxito:`, result); // Log para confirmar que el valor se guardó
    return result;
  }

  async remove(key: string): Promise<void> {
    await this.BDDConectada();
    await this.bdd?.remove(key);
    console.log(`Eliminado ${key} con éxito`); // Log para verificar la eliminación
  }

  async limpiar(): Promise<void> {
    await this.BDDConectada();
    await this.bdd?.clear();
    console.log("Almacenamiento limpiado"); // Log para confirmar el limpiado
  }
}

