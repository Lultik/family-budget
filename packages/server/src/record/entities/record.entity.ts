import { Item } from 'dynamoose/dist/Item';
import { Record as IRecord } from '@family-budget/shared'

export class Record extends Item implements IRecord {
  id = '';
  title = '';
  amount = 0;
  category = '';
}
