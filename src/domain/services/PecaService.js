export default class PecaService{

    constructor(resource){
        this._resource = resource('pecas{/id}');
    }
    post(peca){
        return this._resource.save(peca)
    }
    list(){
        return this._resource.query();
    }
    get(id){
        return this._resource.query({id});
    }
    listBestProducts(resource){
        this._resource = resource('pecas/melhores');
        return this._resource.query();
    }
    listPopularParts(resource){
        this._resource = resource('pecas/populares');
        return this._resource.query();
    }
}