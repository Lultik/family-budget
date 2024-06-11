import * as dynamoose from 'dynamoose';

export const RecordSchema = new dynamoose.Schema(
  {
    id: {
      type: String,
      hashKey: true,
      required: true,
    },
    title: String,
    amount: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      default: 'other'
    }
  },
  {
    timestamps: true,
  },
);
