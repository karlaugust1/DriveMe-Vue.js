export default class Pedido{
    
    constructor(pediId = '', pediData = '', pediSubtotal = '', pediTotal = '', pediAberto = '', pecaPedidos = []){
        this.pediId = pediId;
        this.pediData = pediData;
        this.pediSubtotal = pediSubtotal;
        this.pediTotal = pediTotal;
        this.pediAberto = pediAberto;
        this.pecaPedidos = pecaPedidos;
    }

}