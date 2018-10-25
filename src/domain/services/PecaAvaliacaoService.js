export default class PecaAvaliacaoService{

    constructor(resource){
        this._resource = resource('avaliacao');
    }
    post(pecaAvaliacao){
        return this._resource.save(pecaAvaliacao)
    }
}