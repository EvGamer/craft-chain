import { v4 as getID } from 'uuid';
export default class Item{
  static fromRecord(record){
    return new Item(
      record.id || getID(),
      record.name || 'Unknown Item',
    )
  }
  constructor(id, name){
    this.id = id;
    this.name = name;
  }
  cloneWithChanges(changes){
    return new Item(
        this.id,
        changes.name || this.name,
    )
  }
}