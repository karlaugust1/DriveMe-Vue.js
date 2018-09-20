export default class MontadoraService{

    constructor(resource){
        this._resource = resource('montadoras{/id}');
    }
    post(montadora){
        return this._resource.save(montadora)
    }
    list(){
        return this._resource.query();
    }
    get(id){
        return this._resource.query({id});
    }
}