import { RequestType } from "../entities/RequestType";
import { LoanType } from "../entities/types/Loan";
import MaterialType from "../entities/types/Material";
import MemberType from "../entities/types/Member";

export default interface DatabaseAdapter {
  initializeDB(): void;
  createUser(newMember: MemberType): Promise<RequestType<MemberType>>;
  deleteUser(id: number): Promise<RequestType<MemberType>>;
  login(login: string, senha: string): Promise<RequestType<MemberType>>;
  logout(id: number): Promise<RequestType<MemberType>>;
  listUsers(): Promise<RequestType<Array<MemberType>>>;

  createMaterial(newMaterial: MaterialType): Promise<RequestType<MaterialType>>;
  deleteMaterial(id: number): Promise<RequestType<MaterialType>>;
  listMaterial(): Promise<RequestType<Array<MaterialType>>>;

  createLoan(loan: LoanType): Promise<RequestType<LoanType>>;
  concludeLoan(id: number): Promise<RequestType<LoanType>>;
  listOpenLoans(): Promise<RequestType<Array<LoanType>>>;
  listCloseLoans(): Promise<RequestType<Array<LoanType>>>;
}