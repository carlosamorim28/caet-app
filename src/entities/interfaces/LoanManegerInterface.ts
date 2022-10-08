import { RequestType } from "../RequestType";
import { LoanType } from "../types/Loan";

interface LoanManegerInterface {
  generetateNewLoan(newLoan: LoanType): Promise<RequestType<LoanType>>;
  finishLoan(id: number): Promise <RequestType<LoanType>>;
  generateHistoryLoan(): Promise<RequestType<Array<LoanType>>>
  generateActivesLoans(): Promise<RequestType<Array<LoanType>>>
}

export default LoanManegerInterface;