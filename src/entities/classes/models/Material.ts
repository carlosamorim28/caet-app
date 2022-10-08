import DatabaseAdapter from "../../../adapters/databaseAdapter";
import { Constants, FirebaseAdapter } from "../../../adapters/FirebaseAdapter";
import MaterialType, { StatusMaterial } from "../../types/Material";

export default class Material implements MaterialType {
  id: number = 0;
  nome: string = '';
  status: StatusMaterial = StatusMaterial.inCAET;
  description: string = '';

  async generator(nome: string, description:string = ''):Promise<MaterialType>{
    const db:DatabaseAdapter =  new FirebaseAdapter()
    this.id = await db.getLastId(Constants.MATERIAL_TABLE) + 1;
    this.nome = nome;
    this.description = description;
    this.status = StatusMaterial.inCAET;
    return {...this}
  }
}