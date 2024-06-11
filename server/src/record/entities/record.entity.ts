import { Item } from 'dynamoose/dist/Item';

export class Record extends Item {
  id = '';
  title = '';
  amount = 0;
  category = '';
}
