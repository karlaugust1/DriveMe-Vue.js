<template>
    <section class="section section s-line s-cards-carousel">
        <div class="row align-center">
            <div class="column small-12 medium-8 large-5">
                <header class="s-header align-center">
                    <h2 class="s-headline">Melhores Produtos<span class="s-headline-decor"></span></h2>
                    <p class="subheader">Confira os produtos com melhor avaliação!</p>
                </header>
            </div>
            <div class="column small-12">
                <div class="owl-carousel">

                    <!-- Produto -->
                    <div class="card card-product bg-secondary block-shadow" v-for="peca in pecas" :key="peca.pecaId">

                        <div class="card-divider">
                            <h3 class="h3 headline elipsis">{{peca.pecaNome}}</h3>
                        </div>

                        <div class="card-section card-product-data flex-container align-justify">

                            <div class="price-wrap">
                                <div class="price"><sup>R$<i class="zmdi zmdi-money fa fa-dollar"></i></sup>
                                    <span class="price-val">{{peca.valorPrincipal}}</span><sup>,{{peca.valorCentavos}}</sup>
                                    <ul class="rating text-center">
                                        <li v-for="(estrela,index) in peca.estrelas" :key="index"><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                        <li v-for="(index) in (5-peca.estrelas)" :key="index"><i class="zmdi zmdi-star fa fa-star gray-shade-color"></i></li>
                                    </ul>
                                </div>
                            </div><!-- /end .price-wrap -->

                            <ul class="card-product-features">
                                <li><i :class="'driveme-' + peca.montadoras[0].montIcone"></i></li>
                                <li><i :class="'rh rh-fw ' + peca.tipoVeiculos[0].tiveIcone"></i>{{peca.tipoVeiculos[0].tiveDescricao}}</li>
                                <li><i class="rh rh-fw rh-money-gear"></i>{{peca.aplicacaos[0].apliDescricao}}</li>
                            </ul>
                        </div><!-- /end .card-product-data -->

                        <img :src="peca.pecaImagems[0].peimUrl" alt="" class="full-card">

                        <div class="card-section text-center">
                            <a @click="pecaDetalhes(peca)" class="button rh-button flip-y" data-open="js-modal-account"><i class="zmdi zmdi-info"></i>
                                <span>Detalhes</span>
                            </a>
                        </div>
                    </div><!-- /end .card-product -->
                </div><!-- /end .owl-carousel -->
            </div><!-- /end .column -->
        </div><!-- /end .row -->
    </section>

</template>
<script>
import PecaService from '../../../domain/services/PecaService'

export default {
    data(){
        return{
            pecas: [],
        }
    },
    created(){
         this.service = new PecaService(this.$resource);
            this.service
                .listBestProducts(this.$resource)
                .then(resposta => {
                    if(resposta.status == 200){
                        console.log(resposta)
                        this.pecas = resposta.body.pecas;
                    }
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
        max-width: 380px;
        min-width: 380px;
        margin-right: 5px;
        max-height: 545px;
        min-height: 545px;
    }
</style>
