import DatabaseAdapter from "../../../adapters/databaseAdapter";
import { FirebaseAdapter } from "../../../adapters/FirebaseAdapter";
import LoanManegerInterface from "../../interfaces/LoanManegerInterface";
import { RequestType } from "../../RequestType";
import { LoanType } from "../../types/Loan";

export default class LoanManeger implements LoanManegerInterface{
  private dbAdapter: DatabaseAdapter;
  constructor(){
    this.dbAdapter = new FirebaseAdapter()
  }
  async generetateNewLoan(newLoan: LoanType): Promise<RequestType<LoanType>> {
    const response = await this.dbAdapter.createLoan(newLoan);
    return response
  }
  async finishLoan(id: number): Promise<RequestType<LoanType>> {
    const response = await this.dbAdapter.concludeLoan(id);
    return response
  }
  async generateHistoryLoan(): Promise<RequestType<LoanType[]>> {
    const response = await this.dbAdapter.listCloseLoans();
    return response
  }
  async generateActivesLoans(): Promise<RequestType<LoanType[]>> {
    const response = await this.dbAdapter.listOpenLoans();
    return response
  }
  
}