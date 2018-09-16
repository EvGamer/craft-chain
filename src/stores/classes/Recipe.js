export default class Recipe{
    constructor(id, name, duration, ingredients = [], results = []){
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
        return new(
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