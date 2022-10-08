import DatabaseAdapter from "../../../adapters/databaseAdapter";
import { FirebaseAdapter } from "../../../adapters/FirebaseAdapter";
import ManterialManegerInterface from "../../interfaces/MaterialManegerInterface";
import { RequestType } from "../../RequestType";
import MaterialType from "../../types/Material";

export default class MaterialManeger implements ManterialManegerInterface{
  private dbAdapter: DatabaseAdapter;
  constructor(){
    this.dbAdapter = new FirebaseAdapter();
  }
  async generateNewMaterial(newMaterial: MaterialType): Promise<RequestType<MaterialType>> {
    const response = await this.dbAdapter.createMaterial(newMaterial)
    return response;
  }
  async deleteMaterial(id: number): Promise<RequestType<MaterialType>> {
    const response = await this.dbAdapter.deleteMaterial(id)
    return response;
  }
   
}