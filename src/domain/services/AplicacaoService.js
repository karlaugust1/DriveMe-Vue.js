export default class AplicacaoService{

    constructor(resource){
        this._resource = resource('aplicacoes{/id}');
    }
    post(aplicacao){
        return this._resource.save(aplicacao)
    }
    list(){
        return this._resource.query();
    }
    get(id){
        return this._resource.query({id});
    }
}