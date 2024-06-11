import * as dynamoose from 'dynamoose';
import { Record } from './entities/record.entity';
import { Model } from 'dynamoose/dist/Model';
import { RecordSchema } from './entities/record.schema';

class RecordRepository {
  public model: Model<Record>;

  constructor() {
    const TABLE_NAME = process.env.RECORDS_TABLE_NAME;
    this.model = dynamoose.model<Record>(TABLE_NAME, RecordSchema);
  }

  // Define methods for interacting with your DynamoDB here
}

export default RecordRepository;
