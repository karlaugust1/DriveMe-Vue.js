<template>
    <div>
        <!-- <div class="section-boxed bg-secondary s-equal-paddings covered" data-interchange="[img/sections/banner-01.jpg, small]">
            <div class="row align-center">
                <div class="column small-12 large-10">
                    <div>
                        <h2 class="h1 headline light text-center">Catálogo</h2>
                    </div>
                </div>
            </div>
        </div> -->
        <main>
            <!-- ===== FILTER FORM ===== -->
            <div class="section-trapeze primary mt0  ">
                <div class="trapeze">

                    <form class="form-primary row align-center" id="homepage-booking" data-abide novalidate>
                        <div class="column small-10 block-header text-center">
                            <h2 class="h3 headline">Busca</h2>
                        </div>

                        <div class="column small-12 medium-6 large-4">
                            <label>
                                <span class="input-group">
                                    <span class="input-group-label zmdi zmdi-truck fa fa-truck"></span>
                                    <select class="input-group-field placeholder" id="js-form-product-type" name="vehicle-type" v-model="tipoVeiculo">
                                        <option selected value="">Linha de Veículo</option>
                                        <option :value="tipoVeiculo" v-for="tipoVeiculo in tipoVeiculos" :key="tipoVeiculo.tiveId">{{tipoVeiculo.tiveDescricao}}</option>
                                    </select>
                                </span>
                            </label>
                            <label>
                                <span class="input-group">
                                    <span :class="'input-group-label fa fa-marker driveme-' + montadora.montIcone"></span>
                                    <select class="input-group-field placeholder" id="js-form-start-location" name="vehicle-type" v-model="montadora">
                                        <option selected value="">Montadora</option>
                                        <option :value="montadora" v-for="montadora in montadoras" :key="montadora.montId" >{{montadora.montDescricao}}</option>
                                    </select>
                                </span>
                            </label>
                        </div>
                        <div class="column small-12 medium-6 large-4">
                            <label>
                                <span class="input-group">
                                    <span class="input-group-label fa fa-truck"></span>
                                    <select class="input-group-field placeholder" id="js-form-product-type" name="vehicle-type" v-model="modelo">
                                        <option selected value="">Modelo</option>
                                        <option :value="modelo" v-for="modelo in modelos" :key="modelo.modeId">{{modelo.modeDescricao}}</option>
                                    </select>
                                </span>
                            </label>
                            <label>
                                <span class="input-group">
                                    <span class="input-group-label zmdi zmdi-arrows fa fa-marker"></span>
                                    <select class="input-group-field placeholder" id="js-form-start-location" name="vehicle-type" v-model="aplicacao">
                                        <option selected hidden value="">Aplicação</option>
                                        <option :value="aplicacao" v-for="aplicacao in aplicacoes" :key="aplicacao.apliId">{{aplicacao.apliDescricao}}</option> 
                                    </select>
                                </span>
                            </label>
                        </div>	
                        <div class="column small-12 medium-5 large-8 text-center">
                            <label>
                                <input class="input-group-field" type="text" placeholder="Busque pelo nome da peça..." v-model="procura">
                            </label>
                        </div>
                        <!-- <div class="column small-12 medium-5 text-center">
                            <button class="button rh-button secondary expanded" type="submit"><i class="zmdi zmdi-search fa fa-search"></i>
                                <span>Filtrar</span>
                            </button>
                        </div> -->
                    </form>

                </div><!-- /end .trapeze -->
            </div><!-- /end .section-trapeze -->

            <div class="section">
                <div class="row small-up-1 medium-up-2 large-up-3" v-if="pecas">
                    <div class="card card-product bg-secondary block-shadow" v-for="peca in pecasFiltradas" :key="peca.pecaId">
                        <div class="card-divider">
                            <h3 class="h4 headline">{{peca.pecaNome}}</h3>
                        </div>

                        <div class="card-section card-product-data flex-container align-justify">

                            <div class="price-wrap">
                                <div class="price">
                                    <!-- <sup>R$<i class="zmdi"></i></sup> -->
                                    <span class="price-val">{{peca.valorPrincipal}}</span><sup>,{{peca.valorCentavos}}</sup>
                                </div>
                                    <ul class="rating text-center" style="padding-left: 0px; width: 63px;">
                                        <li v-for="(estrela,index) in peca.estrelas" :key="index"><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                        <li v-for="(index) in (5-peca.estrelas)" :key="index"><i class="zmdi zmdi-star fa fa-star gray-shade-color"></i></li>
                                    </ul>
                            </div>

                            <ul class="card-product-features">
                                <li><i :class="'driveme-' + peca.montadoras[0].montIcone"></i></li>
                                <li><i :class="'rh rh-fw ' + peca.tipoVeiculos[0].tiveIcone"></i>{{peca.tipoVeiculos[0].tiveDescricao}}</li>
                                <li><i class="rh rh-fw rh-money-gear"></i>{{peca.aplicacaos[0].apliDescricao}}</li>
                            </ul>
                        </div>
                        <img :src="peca.pecaImagems[0].peimUrl" alt="" width="295">
                        <div class="card-section text-center">
                            <a @click="pecaDetalhes(peca)" class="button rh-button flip-y" data-open="js-modal-account"><i class="zmdi zmdi-info"></i>
                                <span>Detalhes</span>
                            </a>
                        </div>
                    </div><!-- /end .column -->                    
                </div>
                <div class="row small-up-1 medium-up-2 large-up-3" v-else>
                    Ops! Parece que alguma coisa aconteceu de errado :/<br>
                    Tente recarregar a página ou altere os valores preenchidos nos campos de pesquisa.
                </div><!-- /end .row -->

                <!-- ===== PAGINAÇÃO ===== -->

                <!-- <div class="row">
                    <div class="column small-12">
                        <ul class="pagination text-center" aria-label="Pagination">
                            <li class="pagination-previous disabled">Anterior<span class="show-for-sr">Página</span></li>
                            <li class="current"><span class="show-for-sr">Você está na página</span>1</li>
                            <li><a href="#" aria-label="Page 2">2</a></li>
                            <li><a href="#" aria-label="Page 3">3</a></li>
                            <li><a href="#" aria-label="Page 4">4</a></li>
                            <li class="ellipsis" aria-hidden="true"></li>
                            <li><a href="#" aria-label="Page 12">12</a></li>
                            <li><a href="#" aria-label="Page 13">13</a></li>
                            <li class="pagination-next"><a href="#" aria-label="Next page">Próxima<span class="show-for-sr">página</span></a></li>
                        </ul>
                    </div>
                </div> -->
            </div><!-- /end .section -->
        </main>
    </div>
</template>
<script>
import PecaService from '../../domain/services/PecaService.js'
import MontadoraService from '../../domain/services/MontadoraService.js'
import AplicacaoService from '../../domain/services/AplicacaoService.js'
import TipoVeiculoService from '../../domain/services/TipoVeiculoService.js'
import ModeloService from '../../domain/services/ModeloService.js'

export default {

    data(){
        return {
            pecas: '',
            procura: '',
            montadora: '',
            montadoras: [],
            aplicacao: '',
            aplicacoes: [],
            tipoVeiculo: '',
            tipoVeiculos: [],
            modelo: '',
            modelos: [],
        }
    },
    computed:{
        pecasFiltradas(){
            var listaFiltrada = this.pecas;
            if(this.montadora){
                let exp = new RegExp(this.montadora.montId);
                listaFiltrada = listaFiltrada.filter(peca => exp.test(peca.montadoras[0].montId));
            }
            if(this.aplicacao){
                let exp = new RegExp(this.aplicacao.apliId);
                listaFiltrada = listaFiltrada.filter(peca => exp.test(peca.aplicacaos[0].apliId));
            }
            if(this.tipoVeiculo){
                let exp = new RegExp(this.tipoVeiculo.tiveId);
                listaFiltrada = listaFiltrada.filter(peca => exp.test(peca.tipoVeiculos[0].tiveId));
            }
            if(this.modelo){
                let exp = new RegExp(this.modelo.modeId);
                listaFiltrada = listaFiltrada.filter(peca => exp.test(peca.modelos[0].modeId));
            }
            if(this.procura){
                let exp = new RegExp(this.procura.trim(), 'i');
               listaFiltrada = listaFiltrada.filter(peca => exp.test(peca.pecaNome));
            }
            return listaFiltrada;
        }
    },
    created(){
       /* Lista de montadoras */
        this.service = new MontadoraService(this.$resource);
        this.service
            .list()
            .then(resposta => {
                if(resposta.body.status === 'SUCCESS'){
                    this.montadoras = resposta.body.montadoras;
                }
                console.log(resposta)
            })
            .catch(e => {
                console.log(e)
            })    

        /* Lista de aplicações */
        this.service = new AplicacaoService(this.$resource);
        this.service
            .list()
            .then(resposta => {
                if(resposta.body.status === 'SUCCESS'){
                    console.log(resposta)
                    this.aplicacoes = resposta.body.aplicacoes;
                }
            })
            .catch(e => {
                console.log(e)
            })  
            
        /* Lista de tipos de veículos */
        this.service = new TipoVeiculoService(this.$resource);
        this.service
            .list()
            .then(resposta => {
                if(resposta.body.status === 'SUCCESS'){
                    console.log(resposta)
                    this.tipoVeiculos = resposta.body.tipoveiculos;
                }
            })
            .catch(e => {
                console.log(e)
            }) 
        
        /* Lista de modelos */
        this.service = new ModeloService(this.$resource);
        this.service
            .list()
            .then(resposta => {
                if(resposta.body.status === 'SUCCESS'){
                    console.log(resposta)
                    this.modelos = resposta.body.modelos;
                }
            })
            .catch(e => {
                console.log(e)
            })
            
        /* Lista de peças */
        this.service = new PecaService(this.$resource);
        this.service
            .list()
            .then(resposta => {
                if(resposta.body.status === 'SUCCESS'){
                    this.pecas = resposta.body.pecas;
                }
                console.log(resposta)
            })
            .catch(e => {
                console.log(e)
            })
    },
    methods:{
        pecaDetalhes(peca){
            this.$router.push({
                name: '',
                path: '/peca/' + peca.pecaId,
                params: {
                    id: peca.pecaId
                }
            })
        }
    }
}
</script>
<style>
.card{
    display: inline-block !important;
    max-width: 295px;
    margin-right:5px; 
    width: 295px;
}
</style>

