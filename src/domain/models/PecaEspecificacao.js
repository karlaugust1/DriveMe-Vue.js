import Peca from "./Peca";

export default class PecaEspecificacao{
    
    constructor(peca = new Peca, pecaEspecificacao = ''){
		this.peca = peca;
		this.pecaEspecificacao = pecaEspecificacao;
    }

}