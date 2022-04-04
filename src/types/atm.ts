import { IAtmItem } from "./atm.item";
import { IQueueItem } from "./queue.item";

export interface IAtm {
  atm: IAtmItem[];
  queue: IQueueItem[];
  processedClient: string;
}
