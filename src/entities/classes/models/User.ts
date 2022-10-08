import DatabaseAdapter from "../../../adapters/databaseAdapter";
import { Constants, FirebaseAdapter } from "../../../adapters/FirebaseAdapter";
import MemberType from "../../types/Member";

export default class User implements MemberType{
  name: string = '';
  id: number = 0;
  login: string = '';
  senha: string = '';

  async generator(name: string, login: string, senha: string){
    const db:DatabaseAdapter =  new FirebaseAdapter()
    this.name = name;
    this.login = login;
    this.senha = senha;
    this.id = await db.getLastId(Constants.USER_TABLE) + 1;
    return {...this};
  }
}