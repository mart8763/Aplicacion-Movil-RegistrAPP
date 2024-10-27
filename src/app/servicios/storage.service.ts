import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private bdd: Storage = new Storage();
  private bddStatus: Promise<void>;

  constructor(private storage: Storage) {
    this.bddStatus = this.onInit();
  }

  // Inicializar el almacenamiento
  async onInit(): Promise<void> {
    const storage = await this.storage.create();
    this.bdd = storage;
  }
  async BDDConectada(): Promise<void> {
    await this.bddStatus;
  }
  async get(key: string): Promise<any> {
    await this.BDDConectada()
    return this.bdd?.get(key);
  }
  async set(key: string, valor: any) {
    await this.BDDConectada()
    this.bdd.set(key, valor);
    console.log("actualizado con exito")
  }
  async remove(key: string) {
    await this.BDDConectada()
    this.bdd.remove(key);
  }
  async limpiar() {
    await this.BDDConectada()
    this.bdd.clear();
  }
}
