import DatabaseAdapter from "../../adapters/databaseAdapter";
import { FirebaseAdapter } from "../../adapters/FirebaseAdapter";
import UserManegerInterface from "../interfaces/UserManegerInterface";
import { RequestType } from "../RequestType";
import MemberType from "../types/Member";

class UserManager implements UserManegerInterface{
  private dbAdapter:DatabaseAdapter;
  constructor(){
      this.dbAdapter = new FirebaseAdapter()
      this.dbAdapter.initializeDB()
  }
  async generateNewUser(newUser: MemberType): Promise<RequestType<MemberType>> {
    const response = await this.dbAdapter.createUser(newUser)
    return response;
  }
  async deleteUser(id: number): Promise<RequestType<MemberType>> {
    const response = await this.dbAdapter.deleteUser(id)
    return response;
  }
  async getAllUsers(): Promise<RequestType<MemberType[]>> {
    const response = this.dbAdapter.listUsers();
    return response;
  }
  async login(login: string, senha: string): Promise<RequestType<MemberType>> {
    const response = this.dbAdapter.login(login,senha);
    return response
  }
  
  async logout(id: number): Promise<RequestType<MemberType>> {
    const response = this.dbAdapter.logout(id);
    return response;
  }
}

export default UserManager;