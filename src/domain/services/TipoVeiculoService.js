export default class TipoVeiculoService{

    constructor(resource){
        this._resource = resource('tipoveiculos{/id}');
    }
    post(tipoveiculo){
        return this._resource.save(tipoveiculo)
    }
    list(){
        return this._resource.query();
    }
    get(id){
        return this._resource.query({id});
    }
}