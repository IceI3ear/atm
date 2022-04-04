import QueueItem from "components/queue";
import { IQueueItem } from "types/queue.item";
import "./styles.scss";

interface QueueProps {
  queueData: IQueueItem[];
}

export default function Queue({ queueData }: QueueProps) {
  return (
    <div className="queue-container">
      <div className="title">
        <h3>Queue</h3>
      </div>
      {queueData?.map((item: IQueueItem) => (
        <div className="item" key={item.namePeople}>
          <QueueItem
            namePeople={item.namePeople}
            transaction={item.transaction}
          />
        </div>
      ))}
    </div>
  );
}
