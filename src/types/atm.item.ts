export interface IAtmItem {
  id: string;
  status: string;
  remove: boolean;
  name: string;
  client: string;
  transaction: number;
  processedClientsAtm: string[];
}
