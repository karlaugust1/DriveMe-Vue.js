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
                                    <select class="input-group-field placeholder" id="js-form-product-type" name="vehicle-type">
                                        <option disabled selected hidden value="">Tipo de Veículo</option>
                                        <option value="1">Leve</option>
                                        <option value="2">Médio</option>
                                        <option value="3">Pesado</option>
                                        <option value="4">Agrícola</option>
                                        <option value="5">Motocicleta</option>
                                    </select>
                                </span>
                            </label>
                            <label>
                                <span class="input-group">
                                    <span :class="'input-group-label fa fa-marker driveme-' + montadora.montIcone"></span>
                                    <select class="input-group-field placeholder" id="js-form-start-location" name="vehicle-type" v-model="montadora">
                                        <option disabled selected hidden value="">Seleciona a montadora</option>
                                        <option :value="montadora" v-for="montadora in montadoras" :key="montadora.montId" >{{montadora.montDescricao}}</option>
                                    </select>
                                </span>
                            </label>
                        </div>
                        <div class="column small-12 medium-6 large-4">
                            <label>
                                <span class="input-group">
                                    <span class="input-group-label zmdi zmdi-car fa fa-truck"></span>
                                    <select class="input-group-field placeholder" id="js-form-product-type" name="vehicle-type">
                                        <option disabled selected hidden value="">Modelo</option>
                                        <option value="1">Leve</option>
                                        <option value="2">Médio</option>
                                        <option value="3">Pesado</option>
                                        <option value="4">Agrícola</option>
                                        <option value="5">Motocicleta</option>
                                    </select>
                                </span>
                            </label>
                            <label>
                                <span class="input-group">
                                    <span class="input-group-label zmdi zmdi-arrows fa fa-marker"></span>
                                    <select class="input-group-field placeholder" id="js-form-start-location" name="vehicle-type">
                                        <option disabled selected hidden value="">Aplicação</option>
                                        <option value="1">Cabine</option>
                                        <option value="2">Carroceria</option>
                                        <option value="3">Câmbio & Transmissão</option>
                                        <option value="4">Direção</option>
                                        <option value="5">Eixos & Longarinas</option>
                                        <option value="6">Elétrica e Eletrônica</option>
                                        <option value="7">Embreagem</option>
                                        <option value="8">Freios</option>
                                        <option value="9">Motor</option>
                                        <option value="10">Quadros & Carenagens</option>
                                        <option value="11">Suspensão</option>
                                    </select>
                                </span>
                            </label>
                        </div>	
                        <div class="column small-12 medium-5 large-8 text-center">
                            <label>
                                    <input class="input-group-field" type="text" placeholder="Busca personalizada...">
                            </label>
                        </div>
                        <div class="column small-12 medium-5 text-center">
                            <button class="button rh-button secondary expanded" type="submit"><i class="zmdi zmdi-search fa fa-search"></i>
                                <span>Filtrar</span>
                            </button>
                        </div>
                    </form>

                </div><!-- /end .trapeze -->
            </div><!-- /end .section-trapeze -->

            <div class="section">
                <div class="row small-up-1 medium-up-2 large-up-3" v-if="pecas">
                    <div class="card card-product bg-secondary block-shadow" v-for="peca in pecas" :key="peca.pecaId">

                        <div class="card-divider">
                            <h3 class="h4 headline">{{peca.pecaDescricao}}</h3>
                        </div>

                        <div class="card-section card-product-data flex-container align-justify">

                            <div class="price-wrap">
                                <div class="price"><sup>R$<i class="zmdi"></i></sup>
                                    <span class="price-val">{{peca.valorPrincipal}}</span><sup>,{{peca.valorCentavos}}</sup>
                                    <ul class="rating text-center">
                                        <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                        <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                        <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                        <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                        <li><i class="zmdi zmdi-star fa fa-star gray-shade-color"></i></li>
                                    </ul>
                                </div>
                            </div>

                            <ul class="card-product-features">
                                <li><i :class="'driveme-' + peca.modelos[0].montadora.montIcone"></i></li>
                                <li><i :class="'rh rh-fw ' + peca.tipoVeiculos[0].tiveIcone"></i>{{peca.tipoVeiculos[0].tiveDescricao}}</li>
                                <li><i class="rh rh-fw rh-money-gear"></i>{{peca.aplicacaos[0].apliDescricao}}</li>
                            </ul>
                        </div>

                        <img :src="peca.pecaImagems[0].peimUrl" alt="">

                        <div class="card-section text-center">
                            <a class="button rh-button flip-y" data-open="js-modal-account"><i class="zmdi zmdi-info"></i>
                                <span>Detalhes</span>
                            </a>
                        </div>
                    </div><!-- /end .column -->                    
                </div>
                <div class="row small-up-1 medium-up-2 large-up-3">
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

export default {

    data(){
        return {
            pecas: '',
            montadoras: '',
            montadora: '',
        }
    },
    created(){
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
    },
    methods:{

    }
}
</script>
<style>
.card{
    display: inline-block !important;
    max-width: 295px;
    margin-right:5px; 
}
</style>

