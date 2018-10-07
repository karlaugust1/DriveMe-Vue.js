import Peca from "./Peca";

export default class PecaCaracteristica{
    
    constructor(peca = new Peca, pecaTitulo = '', pecaCaracteristica = ''){
		this.peca = peca;
		this.pecaTitulo = pecaTitulo;
		this.pecaCaracteristica = pecaCaracteristica;
    }

}