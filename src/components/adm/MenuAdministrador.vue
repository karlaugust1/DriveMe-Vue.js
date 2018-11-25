<template>
    <div>
        <section class="section">

            <header class="s-header row align-center">
                <div class="column small-12 medium-8 large-5">
                    <h2 class="s-headline">ÁREA DO ADMINISTRADOR<span class="s-headline-decor"></span></h2>
                    <p class="subheader">Gerencie seu negócio!
                    </p>
                </div>
            </header>

            <div class="s-trapeze-2x">
                <!-- s-trapeze-2x-images (left & right trapezes)-->
                <div class="s-trapeze-2x-image" data-interchange="[img/sections/s-trapeze-2x-bg.jpg, large]"></div>
                <div class="s-trapeze-2x-image" data-interchange="[img/sections/s-trapeze-2x-bg.jpg, large]"></div>

                <div class="row small-up-1 medium-up-2 large-up-3 owl-carousel" data-carousel="medium-down" data-owl-options='{"smartSpeed": "500","dotsClass": "rh-owl-dots dots-dark"}'>

                    <div class="column" style="margin-bottom: 20px;">
                        <!-- Tipo -->
                        <router-link to="/tipoveiculo/cadastro">
                            <article class="card card-post-icon block-shadow cardAdm">
                                <div class="card-media"><img class="grayscale" src="/static/cards/card-07.jpg" alt=""></div>

                                <div class="card-divider bg-primary">
                                    <div class="icon-box circle secondary border large"><i class="rh rh-fleet"></i></div>
                                    <h3 class="h4" data-equalizer-watch="data-equalizer-watch">Cadastrar Tipo de Veículo</h3>
                                </div>

                                <div class="card-section">
                                    <p>Realize o cadastro de novos tipos (linhas) de veículo.
                                    </p>
                                </div>
                            </article><!-- /end .card-post-icon-->
                        </router-link>
                    </div>

                    <div class="column">
                        <!-- Montadora -->
                        <router-link to="/montadora/cadastro">
                            <article class="card card-post-icon block-shadow cardAdm">
                                <div class="card-media"><img class="grayscale" src="/static/cards/card-08.jpg" alt=""></div>

                                <div class="card-divider bg-primary">
                                    <div class="icon-box circle secondary border large"><i class="rh rh-gearbox-m"></i></div>
                                    <h3 class="h4" data-equalizer-watch="data-equalizer-watch">Cadastrar Montadora</h3>
                                </div>

                                <div class="card-section">
                                    <p>Realize o cadastro de novas montadoras de veículo.
                                    </p>
                                </div>
                            </article><!-- /end .card-post-icon-->
                        </router-link>
                    </div>

                    <div class="column">
                        <!-- Modelo -->
                        <router-link to="/modelo/cadastro">
                            <article class="card card-post-icon block-shadow cardAdm">
                                <div class="card-media"><img class="grayscale" src="/static/cards/card-09.jpg" alt=""></div>

                                <div class="card-divider bg-primary">
                                    <div class="icon-box circle secondary border large"><i class="rh rh-car"></i></div>
                                    <h3 class="h4" data-equalizer-watch="data-equalizer-watch">Cadastrar Modelo</h3>
                                </div>

                                <div class="card-section">
                                    <p>Insira novos modelos de veículo.
                                    </p>
                                </div>
                            </article><!-- /end .card-post-icon-->
                        </router-link>
                    </div>
                    
                    <div class="column">
                        <!-- Aplicação -->
                        <router-link to="/aplicacao/cadastro">
                            <article class="card card-post-icon block-shadow cardAdm">
                                <div class="card-media"><img class="grayscale" src="/static/cards/card-10.jpg" alt=""></div>

                                <div class="card-divider bg-primary">
                                    <div class="icon-box circle secondary border large"><i class="rh rh-tools"></i></div>
                                    <h3 class="h4" data-equalizer-watch="data-equalizer-watch">Cadastrar Aplicação</h3>
                                </div>

                                <div class="card-section">
                                    <p>Cadastre uma nova aplicação de peça.
                                    </p>
                                </div>
                            </article><!-- /end .card-post-icon-->
                        </router-link>
                    </div>

                    <div class="column">
                        <!-- Produto -->
                        <router-link to="/peca/cadastro">
                            <article class="card card-post-icon block-shadow cardAdm">
                                <div class="card-media"><img class="grayscale" src="/static/cards/card-11.jpg" alt=""></div>

                                <div class="card-divider bg-primary">
                                    <div class="icon-box circle secondary border large"><i class="rh rh-gears"></i></div>
                                    <h3 class="h4" data-equalizer-watch="data-equalizer-watch">Cadastrar Produto</h3>
                                </div>

                                <div class="card-section">
                                    <p>Cadastre um novo produto (peça).
                                    </p>
                                </div>
                            </article><!-- /end .card-post-icon-->
                        </router-link>
                    </div>
                    
                    <div class="column">
                            <!-- <a href="#" data-open="js-estatisticas"> -->
                        <!-- Estatísticas Gerais -->
                        <article class="card card-post-icon block-shadow  cardAdm" @click="show()">
                            <div class="card-media"><img class="grayscale" src="/static/cards/card-12.jpg" alt=""></div>

                            <div class="card-divider bg-primary">
                                <div class="icon-box circle secondary border large"><i class="rh rh-money-back"></i></div>
                                <h3 class="h4" data-equalizer-watch="data-equalizer-watch">Visão Executiva</h3>
                            </div>

                            <div class="card-section">
                                <p>Obtenha informações importantes sobre seu negócio.
                                </p>
                            </div>
                        </article><!-- /end .card-post-icon-->
                    <!-- </a> -->
                    </div>

                </div><!-- /end .row -->
            </div><!-- /end .s-trapeze-2x -->
            <modal name="modal-adm" id="modalAdm" :height="'auto'" :width="'1000px'">
                <div class="js-tabs-container">
                    <button class="close-button" data-close aria-label="Close modal" @click="hide()"><span></span></button>
                    <div class="block-header border align-center">
                        <hr class="dotted">
                        <h4 class="h2">Estatísticas</h4>
                        <hr class="dotted">
                    </div>
                    <div class="column small-12 medium-12 large-12 el-wrap">
                        <!-- SE DER PARA COLOCAR UM GRÁFICO, PASSAMOS O TAMANHO DOS ELEMENTOS COMO 4 E UM GRÁFICO COM 8-->
                        <div class="callout bg-gray features">
                            <div class="media-object stack-for-small">
                                <div class="media-object-section">
                                    <div class="icon-box circle secondary"><i class="rh rh-price"></i>
                                    </div>
                                </div>
                                <div class="media-object-section">
                                    <h3 class="h5">Faturamento Total</h3>
                                    <p>R${{faturamento}}</p>
                                </div>
                            </div>
                            <div class="media-object stack-for-small">
                                <div class="media-object-section">
                                    <div class="icon-box circle secondary"><i class="rh rh-money-gear"></i>
                                    </div>
                                </div>
                                <div class="media-object-section">
                                    <h3 class="h5">Produtos Cadastrados</h3>
                                    <p>{{produtos}}</p>
                                </div>
                            </div>
                            <div class="media-object stack-for-small">
                                <div class="media-object-section">
                                    <div class="icon-box circle secondary"><i class="rh rh-user"></i>
                                    </div>
                                </div>
                                <div class="media-object-section">
                                    <h3 class="h5">Clientes Registrados</h3>
                                    <p>{{clientes}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </modal>
        </section>
    </div>
</template>

<script>
import UtilService from '../../domain/services/UtilService'

export default {
     data(){
        return{
            produtos: '',
            faturamento: '',
            clientes: '',
        }
    },
    created(){
        this.service = new UtilService(this.$resource)
        this.service.list()
            .then(resposta => {
                console.log(resposta)
                this.produtos = resposta.body.produtos,
                this.faturamento = resposta.body.faturamento
                this.clientes = resposta.body.usuarios
            })
    },
    methods:{
        show () {
            this.$modal.show('modal-adm');
        },
        hide () {
            this.$modal.hide('modal-adm');
        },
    }
}
</script>

<style>

.cardAdm{
    min-height: 0px !important;
}

</style>
