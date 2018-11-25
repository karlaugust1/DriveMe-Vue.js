export default class PedidoService{

    constructor(resource){
        this._resource = resource('pedidos/{id}');
    }

    addPeca(peca, idUsuario, resource){
        this._resource = resource('pedidos/adicionar/{idUsuario}');
        return this._resource.save({idUsuario}, peca)
    }
    
    removePeca(pedido, idPecaPedido, resource){
        this._resource = resource('pedidos/remover/{idPecaPedido}');
        return this._resource.save({idPecaPedido}, pedido)
    }

    finalizarPedido(pedido, resource){
        this._resource = resource('pedidos/finalizar');
        return this._resource.save({}, pedido)
    }

    findByUsuarioId(idUsuario, resource){
        this._resource = resource('pedidos/usuarios/{idUsuario}');
        return this._resource.query({idUsuario})
    }

    findFinalizadosByUsuarioId(idUsuario, resource){
        this._resource = resource('pedidos/finalizados/usuarios/{idUsuario}');
        return this._resource.query({idUsuario})
    }
}