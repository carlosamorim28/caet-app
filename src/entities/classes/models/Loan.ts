import DatabaseAdapter from "../../../adapters/databaseAdapter";
import { Constants, FirebaseAdapter } from "../../../adapters/FirebaseAdapter";
import { LoanType, StatusLoan } from "../../types/Loan";

export default class Loan implements LoanType{
  id: number = 0;
  member_id: number = 0;
  status: StatusLoan = StatusLoan.active;
  mterial_id: number = 0;
  dateExit: string = '';
  dateReturn: string = '';

  async generator(member_id: number, mterial_id: number,): Promise<LoanType>{
    const db: DatabaseAdapter = new FirebaseAdapter()
    this.id = await db.getLastId(Constants.LOAN_TABLE) + 1;
    this.member_id = member_id;
    this.mterial_id = mterial_id;
    this.dateExit = new Date(Date.now()).toDateString();
    this.dateReturn = '';
    this.status = StatusLoan.active;
    return {...this}
  }

}