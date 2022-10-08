import { RequestType } from "../RequestType";
import MemberType from "../types/Member";

interface UserManegerInterface {
  generateNewUser(newUser: MemberType): Promise<RequestType<MemberType>>;
  deleteUser(id: number): Promise<RequestType<MemberType>>;
  getAllUsers(): Promise<RequestType<Array<MemberType>>>
  login(login: string, senha: string): Promise<RequestType<MemberType>>;
  logout(id: number): Promise<RequestType<MemberType>>;
}

export default UserManegerInterface