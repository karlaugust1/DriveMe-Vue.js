<template>
    <main class="mb0" v-if="montar">
        <div class="row fleet-details">
            <div class="column small-12 large-12">

                <div class="card-product-large">
                    <div class="card-divider" style=" ;">
                        <div class="block-header border align-center text-center" style="padding-top:10px;">
                            <hr class="dotted">
                            <h3 class="headline">{{peca.pecaNome}}</h3>
                            <hr class="dotted">
                        </div>
                    </div>
                    <!-- Imagem Grande -->
                    <center>

                    <div class="content-slider rh-thumbnail" id="js-slick-main" style=" ;margin-bottom: -44px;">

                        <!-- <div class="item">
                            <a class="image-hover" :href="peca.pecaImagems[0].peimUrl" data-rel="lightcase-zoom:vehiclePreview">
                                <img :src="peca.pecaImagems[0].peimUrl" alt="">
                                <div class="image-hover-buttons"><span class="button-zoom"></span></div>
                            </a>
                        </div> -->

                        <!-- <div class="item" :id="peca.pecaId + 'lightgallery'">
                            <a class="image-hover" :href="peca.pecaImagems[0].peimUrl">
                                <img :src="peca.pecaImagems[0].peimUrl" alt="">
                                <div class="image-hover-buttons"><span class="button-zoom"></span></div>
                            </a>
                        </div> -->
                        <div class="item" :id="peca.pecaId + 'lightgallery'" style="width: 900px">
                            <div v-for="(foto, index) in peca.pecaImagems" :key="foto.peimId" :href="peca.pecaImagems[index].peimUrl" v-show="index == 0" >
                                <a class="image-hover" :href="foto.peimId" >
                                    <img :src="foto.peimUrl" alt="">
                                    <div class="image-hover-buttons"><span class="button-zoom"></span></div>
                                </a>
                            </div>
                        </div>

                    </div> <!-- /end .content-slider -->
                    </center>

                   
                </div><!-- /end .card-product-large -->
            </div><!-- /end .column -->
            <div class="column small-12 large-12">
                <div class="card-divider" style=" ; margim-bottom: 15px;">  
                    <!-- Product preview metadata -->
                    <div class="product-meta flex-container">
                        <div class="product-meta-item">
                            <a class="media-object download-widget" @click="imprimirPagina()">
                                <span class="media-object-section"><i class="rh rh-pdf"></i></span>
                                <span class="media-object-section download-widget-text">
                                    <span>Baixar</span><br><span>informações</span>
                                </span>
                            </a>
                        </div>
                        <div class="product-meta-item">
                            <a class="media-object download-widget" @click="adicionarWishlist()">
                                <span class="media-object-section"><i class="rh rh-wish"></i></span>
                                <span class="media-object-section download-widget-text">
                                    <span>Adicionar</span><br><span>lista de desejos</span>
                                </span>
                            </a>
                        </div>
                        <div class="product-meta-item">
                            <a class="media-object download-widget">
                                <span class="media-object-section"><i class="rh rh-alert"></i></span>
                                <span class="media-object-section download-widget-text">
                                    <span>Código original</span><br><span>{{peca.pecaIdOriginal}}</span>
                                </span>
                            </a>
                        </div>
                        <!-- Diagramador -->
                        <div class="product-meta-item">
                        </div>
                    </div><!-- /end product preview metadata -->
                </div><!-- /end .card-divider -->
            </div>
            <div class="column small-12 large-12">

                <div class="sidebar bg-secondary block-shadow card-booking-form">
                    <div class="card-divider" style="width: 1164px;">
                        <div class="price large">
                            <sup>R$</sup>
                            <span class="price-val">{{peca.valorPrincipal}}</span><sup>,{{peca.valorCentavos}}</sup>
                        </div>
                        <ul class="rating">
                            <li v-for="(estrela,index) in peca.estrelas" :key="index"><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                            <li v-for="(index) in (5-peca.estrelas)" :key="index" ><i class="zmdi zmdi-star fa fa-star"></i></li>
                        </ul>
                        <small>[ {{peca.pecaAvaliacaos.length}} avaliações ]</small>
                    </div>
                    <div class="card-divider" style="width: 1164px;">
                        <button class="button rh-button flip-y right-vb" type="button" @click="adiconarPeca()" style="border-bottom-color: rgb(105, 212, 132);" id="carrinho"><i class="zmdi zmdi-shopping-cart fa fa-reply"></i>
                            <span>Adicionar ao carrinho</span>
                        </button>
                    </div>
                </div><!-- /end .sidebar -->
            </div><!-- /end .column -->

            <div class="column small-12 large-12">

                <!-- ===== PRODUCT INFORMATION ===== -->

                <div class="product-info js-tabs-container">

                    <!-- Tabs buttons -->
                    <!-- <ul class="secondary expanded" id="js-product-info" data-responsive-accordion-tabs="accordion medium-tabs" data-allow-all-closed="true">
                        <li class="tabs-title is-active">
                            <a href="#js-product-overview">Descrição<span class="accordion-button float-right hide-for-medium"></span></a>
                        </li>
                        <li class="tabs-title">
                            <a href="#js-product-specs">Especificações<span class="accordion-button float-right hide-for-medium"></span></a>
                        </li>
                        <li class="tabs-title">
                            <a href="#js-product-reviews">Comentários<span class="accordion-button float-right hide-for-medium"></span></a>
                        </li>
                    </ul> -->

                    <!-- Tabs content -->
                    <div class="tabs-content" data-tabs-content="js-product-info">

                        <div class="tabs-panel is-active" id="js-product-overview">
                            <p>{{peca.pecaDescricao}}</p>
                            <section class="section-in-post">
                                <div class="block-header border align-center text-center">
                                    <hr class="dotted">
                                    <h3 class="headline">Informações Gerais</h3>
                                    <hr class="dotted">
                                </div>
                                <div class="row align-center">
                                    <div class="column small-12 medium-6 features">

                                        <div class="media-object">
                                            <div class="media-object-section">
                                                <div class="icon-box"><i :class="'driveme-' + peca.montadoras[0].montIcone"></i></div>
                                            </div>
                                            <div class="media-object-section">
                                                <h3 class="h5">Montadora</h3>
                                                <p>{{peca.montadoras[0].montDescricao}}</p>
                                            </div>
                                        </div>

                                        <div class="media-object">
                                            <div class="media-object-section">
                                                <div class="icon-box"><i :class="'rh rh-fw rh-' + peca.tipoVeiculos[0].tiveIcone"></i></div>
                                            </div>
                                            <div class="media-object-section">
                                                <h3 class="h5">Tipo de veículo</h3>
                                                <p>{{peca.tipoVeiculos[0].tiveDescricao}}</p>
                                            </div>
                                        </div>

                                    </div><!-- /end .features -->

                                    <div class="column small-12 medium-6 features">

                                        <div class="media-object">
                                            <div class="media-object-section">
                                                <div class="icon-box"><i class="rh rh-fw rh-money-gear"></i></div>
                                            </div>
                                            <div class="media-object-section">
                                                <h3 class="h5">Aplicação</h3>
                                                <p>{{peca.aplicacaos[0].apliDescricao}}</p>
                                            </div>
                                        </div>

                                        <div class="media-object">
                                            <div class="media-object-section">
                                                <div class="icon-box"><i class="zmdi zmdi-car"></i></div>
                                            </div>
                                            <div class="media-object-section">
                                                <h3 class="h5">Modelo</h3>
                                                <p>{{peca.modelos[0].modeDescricao}} | {{peca.modelos[0].modeAno}}</p>
                                            </div>
                                        </div>

                                    </div><!-- /end .features -->

                                </div><!-- /end .row -->
                            </section><!-- /end .section-in-post -->
                        </div><!-- /end .tabs-panel -->

                        <!-- Product description -->
                        <div class="tabs-panel is-active" id="js-product-overview">
                            <section class="section-in-post">
                                <div class="block-header border align-center text-center">
                                    <hr class="dotted">
                                    <h3 class="headline">Características</h3>
                                    <hr class="dotted">
                                </div>
                                <div class="row align-center">
                                    <div class="column small-12 medium-6 features">

                                        <div class="media-object">
                                            <div class="media-object-section">
                                                <div class="icon-box"><i class="rh rh-money-gear"></i></div>
                                            </div>
                                            <div class="media-object-section">
                                                <h3 class="h5">{{peca.pecaCaracteristicas[0].pecaTitulo}}</h3>
                                                <p>{{peca.pecaCaracteristicas[0].pecaCaracteristica}}</p>
                                            </div>
                                        </div>

                                        <div class="media-object">
                                            <div class="media-object-section">
                                                <div class="icon-box"><i class="rh rh-highway"></i></div>
                                            </div>
                                            <div class="media-object-section">
                                                <h3 class="h5">{{peca.pecaCaracteristicas[1].pecaTitulo}}</h3>
                                                <p>{{peca.pecaCaracteristicas[1].pecaCaracteristica}}</p>
                                            </div>
                                        </div>

                                    </div><!-- /end .features -->

                                    <div class="column small-12 medium-6 features">

                                        <div class="media-object">
                                            <div class="media-object-section">
                                                <div class="icon-box"><i class="rh rh-child-seat"></i></div>
                                            </div>
                                            <div class="media-object-section">
                                                <h3 class="h5">{{peca.pecaCaracteristicas[2].pecaTitulo}}</h3>
                                                <p>{{peca.pecaCaracteristicas[2].pecaCaracteristica}}</p>
                                            </div>
                                        </div>

                                        <div class="media-object">
                                            <div class="media-object-section">
                                                <div class="icon-box"><i class="rh rh-gps"></i></div>
                                            </div>
                                            <div class="media-object-section">
                                                <h3 class="h5">{{peca.pecaCaracteristicas[3].pecaTitulo}}</h3>
                                                <p>{{peca.pecaCaracteristicas[3].pecaCaracteristica}}</p>
                                            </div>
                                        </div>

                                    </div><!-- /end .features -->

                                </div><!-- /end .row -->
                            </section><!-- /end .section-in-post -->
                        </div><!-- /end .tabs-panel -->

                        <!-- ===== PRODUCT SPECIFICATION ===== -->

                        <div class="product-specs" id="js-product-specs">
                            <div class="block-header border align-center text-center">
                                <hr class="dotted">
                                <h3 class="headline">Especificações</h3>
                                <hr class="dotted">
                            </div>
                            
                            <div class="row small-up-1 medium-up-2">
                                <div class="column">
                                    <table class="small mb0">
                                        <tr>
                                            <div class="media-object" style="margin-bottom: 0px !important;">
                                                <div class="media-object-section">
                                                    <div class="icon-box"><i class="zmdi-hc-fw zmdi zmdi-check-all"></i></div>
                                                </div>
                                                <div class="media-object-section" style="padding-top: 35px;">
                                                    <h3 class="h5">{{peca.pecaEspecificacaos[0].pecaEspecificacao}}</h3>
                                                </div>
                                            </div>
                                        </tr>
                                        <tr>
                                            <div class="media-object" style="margin-bottom: 0px !important;">
                                                <div class="media-object-section">
                                                    <div class="icon-box"><i class="zmdi-hc-fw zmdi zmdi-check-all"></i></div>
                                                </div>
                                                <div class="media-object-section" style="padding-top: 35px;">
                                                    <h3 class="h5">{{peca.pecaEspecificacaos[1].pecaEspecificacao}}</h3>
                                                </div>
                                            </div>
                                        </tr>
                                        <tr>
                                            <div class="media-object" style="margin-bottom: 0px !important;">
                                                <div class="media-object-section">
                                                    <div class="icon-box"><i class="zmdi-hc-fw zmdi zmdi-check-all"></i></div>
                                                </div>
                                                <div class="media-object-section" style="padding-top: 35px;">
                                                    <h3 class="h5">{{peca.pecaEspecificacaos[2].pecaEspecificacao}}</h3>
                                                </div>
                                            </div>
                                        </tr>
                                        <tr>
                                            <div class="media-object" style="margin-bottom: 0px !important;">
                                                <div class="media-object-section">
                                                    <div class="icon-box"><i class="zmdi-hc-fw zmdi zmdi-check-all"></i></div>
                                                </div>
                                                <div class="media-object-section" style="padding-top: 35px;">
                                                    <h3 class="h5">{{peca.pecaEspecificacaos[3].pecaEspecificacao}}</h3>
                                                </div>
                                            </div>
                                        </tr>
                                    </table>
                                </div>
                                <div class="column">
                                    <table class="small mb0">
                                        <tr>
                                            <div class="media-object" style="margin-bottom: 0px !important;">
                                                <div class="media-object-section">
                                                    <div class="icon-box"><i class="zmdi-hc-fw zmdi zmdi-check-all"></i></div>
                                                </div>
                                                <div class="media-object-section" style="padding-top: 35px;">
                                                    <h3 class="h5">{{peca.pecaEspecificacaos[4].pecaEspecificacao}}</h3>
                                                </div>
                                            </div>
                                        </tr>
                                        <tr>
                                            <div class="media-object" style="margin-bottom: 0px !important;">
                                                <div class="media-object-section">
                                                    <div class="icon-box"><i class="zmdi-hc-fw zmdi zmdi-check-all"></i></div>
                                                </div>
                                                <div class="media-object-section" style="padding-top: 35px;">
                                                    <h3 class="h5">{{peca.pecaEspecificacaos[5].pecaEspecificacao}}</h3>
                                                </div>
                                            </div>
                                        </tr>
                                        <tr>
                                            <div class="media-object" style="margin-bottom: 0px !important;">
                                                <div class="media-object-section">
                                                    <div class="icon-box"><i class="zmdi-hc-fw zmdi zmdi-check-all"></i></div>
                                                </div>
                                                <div class="media-object-section" style="padding-top: 35px;">
                                                    <h3 class="h5">{{peca.pecaEspecificacaos[6].pecaEspecificacao}}</h3>
                                                </div>
                                            </div>
                                        </tr>
                                        <tr>
                                            <div class="media-object" style="margin-bottom: 0px !important;">
                                                <div class="media-object-section">
                                                    <div class="icon-box"><i class="zmdi-hc-fw zmdi zmdi-check-all"></i></div>
                                                </div>
                                                <div class="media-object-section" style="padding-top: 35px;">
                                                    <h3 class="h5">{{peca.pecaEspecificacaos[7].pecaEspecificacao}}</h3>
                                                </div>
                                            </div>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div><!-- /end .tabs-panel.product-specs -->

                        <!-- ===== PRODUCT REVIEWS ===== -->

                        <div>
                            <div class="block-header border align-center text-center">
                                <hr class="dotted">
                                <h3 class="headline">Comentários</h3>
                                <hr class="dotted">
                            </div>
                            <div class="comments">
                                <ul class="comments-post-list" v-if="peca.pecaAvaliacaos.length > 0">
                                    <!-- comments item-->
                                    <li v-for="avaliacao in peca.pecaAvaliacaos" :key="avaliacao.peavId">
                                        <div class="media-object">
                                            <div class="media-object-section">
                                                <div class="avatar rh-thumbnail">
                                                    <img class="grayscale" src="" alt="">
                                                </div>
                                            </div>

                                            <div class="media-object-section comments-post-body">

                                                <div class="comments-post-header">
                                                    <span class="h6 publisher"><i class="zmdi zmdi-account zmdi-hc-fw fa fa-user fa-fw"></i>{{avaliacao.usuario.usuaNome}}</span>
                                                    <div class="subheader">
                                                        <i class="zmdi zmdi-calendar zmdi-hc-fw fa fa-calendar fa-fw"></i>
                                                        <time datetime="2017-05-01">{{moment.unix(avaliacao.peavData/1000).format("DD/MM/YYYY HH:mm")}}</time>
                                                    </div>
                                                </div><!-- /end .comments-post-header -->

                                                <p>{{avaliacao.peavDescricao}}</p>

                                                <div class="comments-post-footer callout small bg-gray row small-up-1 medium-up-2">
                                                    <div class="column">
                                                        <div>
                                                            <span class="rating-title">Avaliação</span>
                                                            <ul class="rating">
                                                                <li v-for="(estrela, index) in avaliacao.peavEstrelas" :key="index"><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                                                <!-- <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                                                <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                                                <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                                                <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li> -->
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div><!-- /end .comments-post-footer -->
                                            </div><!-- /end .comments-post-body -->
                                        </div>
                                    </li><!-- /end comments item-->
                                </ul><!-- /end .comments-post-list-->
                                <ul class="comments-post-list">
                                    Não há avaliações para esta peça! Aproveite e seja o primeiro a avaliar :)
                                </ul>

                            </div><!-- /end .comments -->

                            <!-- Replay form -->
                            <section class="section-in-post replay-form">
                                <header class="block-header border align-center">
                                    <hr class="dotted">
                                    <h3 class="h3 headline">Adicionar Comentário</h3>
                                    <hr class="dotted">
                                </header>

                                <form @submit.prevent="salvarComentario()" type="POST">
                                    <label>
                                        <span class="input-group">
                                            <span class="input-group-label zmdi zmdi-edit"></span>
                                            <textarea placeholder="Comentário" required v-model="pecaAvaliacao.peavDescricao"></textarea>
                                        </span>
                                    </label>
                                    <div class="row">
                                        <!-- <div class="column small-12 medium-6">
                                            <label>
                                                <span class="input-group">
                                                    <span class="input-group-label zmdi zmdi-account fa fa-user"></span>
                                                    <input class="input-group-field" type="text" placeholder="Nome" required>
                                                </span>
                                            </label>
                                        </div>
                                        <div class="column small-12 medium-6">
                                            <label>
                                                <span class="input-group">
                                                    <span class="input-group-label zmdi zmdi-email fa fa-envelope"></span>
                                                    <input class="input-group-field" type="email" placeholder="E-mail" required>
                                                </span>
                                            </label>
                                        </div> -->
                                        <div class="column small-6">
                                            <label class="media-object stack-for-small rating-group">
                                                <span class="media-object-section rating-title">Avaliação</span>
                                                <span class="media-object-section">
                                                   <div class="">
                                                        <img :src="estrela1" alt="" width="20" @mouseover="mouseover1estrela()" @mouseout="mouseoutestrelas()" @click="avaliarestrelas(1)">
                                                        <img :src="estrela2" alt="" width="20" @mouseover="mouseover2estrela()" @mouseout="mouseoutestrelas()" @click="avaliarestrelas(2)">
                                                        <img :src="estrela3" alt="" width="20" @mouseover="mouseover3estrela()" @mouseout="mouseoutestrelas()" @click="avaliarestrelas(3)">
                                                        <img :src="estrela4" alt="" width="20" @mouseover="mouseover4estrela()" @mouseout="mouseoutestrelas()" @click="avaliarestrelas(4)">
                                                        <img :src="estrela5" alt="" width="20" @mouseover="mouseover5estrela()" @mouseout="mouseoutestrelas()" @click="avaliarestrelas(5)">
                                                    </div>
                                                </span>
                                            </label>
                                        </div>
                                        <input type="hidden" name="peca" :value="peca.pecaId">
                                        <div class="column small-12 button-group stacked-for-small">
                                            <button class="button transparent" type="reset"><i class="zmdi zmdi-refresh fa fa-refresh zmdi-hc-fw fa-fw"></i>Limpar Formulário
                                            </button>
                                            <button class="button rh-button flip-y right-vb" type="submit"><i class="zmdi zmdi-mail-reply fa fa-reply"></i>
                                                <span>Comentar</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </section>
                        </div> <!-- /end .tabs-panel -->
                    </div><!-- /end .tabs-content -->
                </div><!-- /end .product-info -->

            </div><!-- /end .column -->

        </div><!-- /end .row.fleet-details -->
    </main>
</template>

<script>

import PecaService from '../../domain/services/PecaService.js'
import PedidoService from '../../domain/services/PedidoService.js'
import WishlistService from '../../domain/services/WishlistService.js'
import Wishlist from '../../domain/models/Wishlist.js'
import PecaAvaliacaoService from '../../domain/services/PecaAvaliacaoService.js'

import Usuario from '../../domain/models/Usuario.js'

var moment = require('moment');

export default {
    props: ['id'],
    data(){
        return{
            moment: moment,
            peca: '',
            montar: false,
            wishlist: new Wishlist(),
            estrela1: '/static/star.svg',
            estrela2: '/static/star.svg',
            estrela3: '/static/star.svg',
            estrela4: '/static/star.svg',
            estrela5: '/static/star.svg',
            avaliado: false,
            pecaAvaliacao: {
                usuario: '',
                peavEstrelas: 0,
                peavDescricao: '',
                idPeca: ''
            }
        }
    },
    mounted(){
        window.scrollTo(0,0)
    },
    created() {

        this.service = new PecaService(this.$resource);
            this.service
                .get(this.id)
                .then(resposta => {
                    if(resposta.status == 200){
                        console.log(resposta)
                        this.peca = resposta.body.peca;
                        this.montar = !this.montar;
                        this.abrirFoto(this.peca.pecaId)
                    }
                })
                .catch(e => {
                    console.log(e)
                })
    },
    methods:{
        imprimirPagina(){
            window.print();
        }, 
        salvarComentario(){
            if(this.$usuario && this.$usuario.usuaNome != ''){
                this.service = new PecaAvaliacaoService(this.$resource);
                this.pecaAvaliacao.usuario = new Usuario(this.$usuario.usuaId);
                this.pecaAvaliacao.idPeca = this.peca.pecaId;
                this.service
                    .post(this.pecaAvaliacao)
                    .then(resposta => {
                        if(resposta.body.status === 'SUCCESS'){
                            this.peca.pecaAvaliacaos.unshift(resposta.body.avaliacao)
                            this.pecaAvaliacao.peavDescricao = '',
                            this.estrela1 = '/static/star.svg',
                            this.estrela2 = '/static/star.svg',
                            this.estrela3 = '/static/star.svg',
                            this.estrela4 = '/static/star.svg',
                            this.estrela5 = '/static/star.svg'
                        }
                    })
                    .catch(e => {
                        console.log(e)
                    })
            }else{
                console.log('else')
                this.$modal.show('hello-world');
            }
        },
        abrirFoto(id){
            $(document).ready(function (){
                var $lg = $('#'+id+'lightgallery');
                $('#'+id+'lightgallery').lightGallery();
            })
        },
        adiconarPeca(){
            if(this.$usuario && this.$usuario.usuaNome != ''){
                this.service = new PedidoService(this.$resource);
                this.service
                    .addPeca(this.peca, this.$usuario.usuaId, this.$resource)
                    .then(resposta => {
                        alert("Adicionado com sucesso ao carrinho")
                        console.log(resposta)
                    }).catch( erro => {
                        console.log(erro)
                    })
            }else{
                console.log('else')
                this.$modal.show('hello-world');
            }
        },
        adicionarWishlist(){
            if(this.$usuario && this.$usuario.usuaNome != ''){
                this.wishlist.usuario = this.$usuario;
                this.wishlist.peca = this.peca;
                this.service = new WishlistService(this.$resource);
                this.service
                    .addPeca(this.wishlist, this.$resource)
                    .then(resposta => {
                        alert("Adicionado com sucesso à lista de desejos")
                        console.log(resposta)
                    }).catch( erro => {
                        console.log(erro)
                    })
            }else{
                console.log('else')
                this.$modal.show('hello-world');
            }

        },
        mouseover1estrela(){
           if(this.estrela1 == '/static/star.svg'){
               this.estrela1 = '/static/star1.svg'
           }else{
               this.estrela1 = '/static/star.svg'
           }
        },
        mouseover2estrela(){
           if(this.estrela2 == '/static/star.svg'){
                this.estrela1 = '/static/star1.svg'
                this.estrela2 = '/static/star1.svg'
           }else{
               this.estrela2 = '/static/star.svg'
           }
        },
        mouseover3estrela(){
           if(this.estrela3 == '/static/star.svg'){
                this.estrela1 = '/static/star1.svg'
                this.estrela2 = '/static/star1.svg'
                this.estrela3 = '/static/star1.svg'
           }else{
               this.estrela3 = '/static/star.svg'
           }
        },
        mouseover4estrela(){
           if(this.estrela4 == '/static/star.svg'){
                this.estrela1 = '/static/star1.svg'
                this.estrela2 = '/static/star1.svg'
                this.estrela3 = '/static/star1.svg'
                this.estrela4 = '/static/star1.svg'
           }else{
               this.estrela4 = '/static/star.svg'
           }
        },
        mouseover5estrela(){
           if(this.estrela5 == '/static/star.svg'){
                this.estrela1 = '/static/star1.svg'
                this.estrela2 = '/static/star1.svg'
                this.estrela3 = '/static/star1.svg'
                this.estrela4 = '/static/star1.svg'
                this.estrela5 = '/static/star1.svg'
           }else{
               this.estrela5 = '/static/star.svg'
           }
        },
        mouseoutestrelas(){
            if(!this.avaliado){
                this.estrela1 = '/static/star.svg'
                this.estrela2 = '/static/star.svg'
                this.estrela3 = '/static/star.svg'
                this.estrela4 = '/static/star.svg'
                this.estrela5 = '/static/star.svg'
            }
        },
        avaliarestrelas(i){
            this.avaliado = true
            this.estrela1 = '/static/star.svg'
            this.estrela2 = '/static/star.svg'
            this.estrela3 = '/static/star.svg'
            this.estrela4 = '/static/star.svg'
            this.estrela5 = '/static/star.svg'
            if(i == 1){
                this.estrela1 = '/static/star1.svg'
                this.pecaAvaliacao.peavEstrelas = 1;
            }else if(i == 2){
                this.estrela1 = '/static/star1.svg'
                this.estrela2 = '/static/star1.svg'
                this.pecaAvaliacao.peavEstrelas = 2;
            }else if(i == 3){
                this.estrela1 = '/static/star1.svg'
                this.estrela2 = '/static/star1.svg'
                this.estrela3 = '/static/star1.svg'
                this.pecaAvaliacao.peavEstrelas = 3;
            }else if(i == 4){
                this.estrela1 = '/static/star1.svg'
                this.estrela2 = '/static/star1.svg'
                this.estrela3 = '/static/star1.svg'
                this.estrela4 = '/static/star1.svg'
                this.pecaAvaliacao.peavEstrelas = 4;
            }else if(i == 5){
                this.estrela1 = '/static/star1.svg'
                this.estrela2 = '/static/star1.svg'
                this.estrela3 = '/static/star1.svg'
                this.estrela4 = '/static/star1.svg'
                this.estrela5 = '/static/star1.svg'
                this.pecaAvaliacao.peavEstrelas = 5;
            }
        },
    }
}
</script>

<style>

#carrinho , #carrinho:after, #carrinho:before{
    border-bottom-color: rgb(99, 186, 117) !important;
}

#carrinho, #carrinho:focus:after, #carrinho:hover:after, #carrinho, #carrinho:focus:after,#carrinho:hover:after{
    border-bottom-color: rgb(105, 212, 132) !important;
}

</style>
