export interface Transaction {
  id: string;
  description: string;
  amount: number;
  type: "revenue" | "expense";
  date: string;
}
