export default class Peca{
    
    constructor(pecaId='', pecaIdOriginal='', pecaNome = '', pecaDescricao='',pecaVisualizacao='',pecaValor='',pecaImagems=[],aplicacaos = [], pecaAvaliacaos=[],pecaCaracteristicas = [], pecaEspecificacaos = [], montadoras=[], modelos=[], tipoVeiculos=[], pecaPedidos=[]){
        this.pecaId = pecaId;
        this.pecaIdOriginal = pecaIdOriginal;
        this.pecaNome = pecaNome;
        this.pecaDescricao = pecaDescricao;
        this.pecaVisualizacao = pecaVisualizacao;
        this.pecaValor = pecaValor;
        this.pecaImagems = pecaImagems;
        this.aplicacaos = aplicacaos;
        this.pecaAvaliacaos = pecaAvaliacaos;
        this.pecaCaracteristicas = pecaCaracteristicas;
        this.pecaEspecificacaos = pecaEspecificacaos;
        this.montadoras = montadoras;
        this.modelos = modelos;
        this.tipoVeiculos = tipoVeiculos;
        this.pecaPedidos = pecaPedidos;
    }

}