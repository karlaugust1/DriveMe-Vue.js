export default class ModeloService{

    constructor(resource){
        this._resource = resource('modelos{/id}');
    }
    post(modelo){
        return this._resource.save(modelo)
    }
    list(){
        return this._resource.query();
    }
    get(id){
        return this._resource.query({id});
    }
}