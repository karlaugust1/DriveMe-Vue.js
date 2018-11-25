export default class WishlistService{

    constructor(resource){
        this._resource = resource('wishlist/{idUsuario}');
    }

    addPeca(wishist, resource){
        this._resource = resource('wishlist/adicionar');
        return this._resource.save({}, wishist)
    }
    
    removePeca(wishist, resource){
        this._resource = resource('wishlist/remover');
        return this._resource.save({}, wishist)
    }

    listByUsuarioId(idUsuario){
        return this._resource.query({idUsuario})
    }

}