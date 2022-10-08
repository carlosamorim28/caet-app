export enum StatusLoan {
  active = 'ativo',
  finalized = 'finalizado'
}
export type LoanType = {
  id: number;
  member_id: number;
  status: StatusLoan;
  mterial_id: number;
  dateExit: string;
  dateReturn: string;
}