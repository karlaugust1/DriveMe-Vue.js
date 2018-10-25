export default class UsuarioService{

    constructor(resource){
        this._resource = resource('usuarios{/id}{/email}{/senha}');
    }
    post(usuario){
        return this._resource.save(usuario)
    }
    list(){
        return this._resource.query();
    }
    get(id){
        return this._resource.query({id});
    }

    login(email, senha){
        return this._resource.query({email, senha});
    }
}