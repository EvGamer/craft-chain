import { v4 as getID } from 'uuid';
export default class Recipe{
    static fromRecord(record){
        return new Recipe(
            record.id || getID(),
            record.name || 'Unnamed recipe',
            record.duration || undefined,
            record.ingreients || undefined,
            record.results || undefined,
        )
    }
    constructor(id, name, duration = 1, ingredients = [], results = []){
        this.id = id;
        this.name = name;
        this.duration = duration;
        this.ingredients = this.ingredients;
        this.results = this.results;
        this.cloneWithoutIngredients = this._cloneWithoutItems.bind(this, 'ingredients');
        this.cloneWithoutResults = this._cloneWithoutItems.bind(this, 'results');
        this.cloneWithNewIngredients = this._cloneWithNewItems.bind(this, 'ingredients');
        this.cloneWithNewResults = this._cloneWithNewItems.bind(this, 'results')
    }
    clone(){
        return new Recipe(
            this.id, this.name, this.ingredients, this.results,
        )
    }
    cloneWithChanges(changes = {}){
        return new Recipe(
            this.id,
            changes.name || this.name,
            changes.duration || this.duration,
            changes.ingredients ? [ ...changes.ingredients] : this.ingredients,
            changes.results ? [ ...changes.results] : this.results,
        )
    }
    _cloneWithNewItems(collection, items){
        const clone = this.clone();
        clone[collection] = [ ...this[collection], ...((items instanceof Array) ? items : [items])];
        return clone;
    }
    _cloneWithoutItems(collection, items){
        const clone = this.clone();
        const filterPredicate = (items instanceof Array)
            ? (ingredient) => !items.contains(ingredient)
            : (ingredient) => ingredient !== items

        clone[collection] = this[collection].filter(filterPredicate);
        return clone;
    }
}