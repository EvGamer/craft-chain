export default class Item{
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