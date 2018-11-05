export default class UtilService{

    constructor(resource){
        this._resource = resource('informacoes');
    }
    list(){
        return this._resource.query();
    }
}