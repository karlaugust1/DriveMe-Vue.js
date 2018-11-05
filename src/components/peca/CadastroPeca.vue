<template>
    <section class="section s-line">
        <div class="row align-center">
            <div class="column small-12 large-10">
                <header class="s-header align-center">
                    <h2 class="s-headline"> CADASTRO DE PEÇA<span class="s-headline-decor"></span></h2>
                </header>
                <!-- Início Container-->
                <div class="product-info js-tabs-container">
                    <!-- Botões -->
                    <ul class="secondary expanded" id="js-cadastro" data-responsive-accordion-tabs="accordion medium-tabs" data-allow-all-closed="true">
                        <li class="tabs-title is-active tab-fix" :class="informacoes? 'active-fix' : ''" style="margin-left: -20px;">
                            <a @click="trocarPainel(1)" style="width: 250px">Informações gerais<span class="accordion-button float-right hide-for-medium"></span></a>
                        </li>
                        <li class="tabs-title tab-fix" :class="caracteristicas? 'active-fix' : ''">
                            <a @click="trocarPainel(2)" style="width: 250px">Características<span class="accordion-button float-right hide-for-medium"></span></a>
                        </li>
                        <li class="tabs-title tab-fix" :class="especificacoes? 'active-fix' : ''">
                            <a @click="trocarPainel(3)" style="width: 250px">Especificações<span class="accordion-button float-right hide-for-medium"></span></a>
                        </li>
                        <li class="tabs-title tab-fix" :class="imagens? 'active-fix' : ''">
                            <a @click="trocarPainel(4)" style="width: 219px">Imagens<span class="accordion-button float-right hide-for-medium"></span></a>
                        </li>
                    </ul>
                    <div class="tabs-content" data-tabs-content="js-cadastro">
                        <div class="tabs-panel is-active" id="js-descricao" v-show="informacoes">
                            <form data-abide novalidate >
                                <div class="alert callout" data-abide-error>
                                    <p v-show="false"><i class="fi-alert"></i> Por favor, preencha todos os campos obrigatórios.</p>
                                </div>
                                <div class="row">
                                    <div class="column textarea-column">
                                        <label>
                                            <span class="input-group">
                                                <span class="input-group-label zmdi zmdi-edit"></span>
                                                <input style="padding-left: 40px; margin-bottom: 0px;" type="text" name="nome" placeholder="Nome da peça" required v-model="peca.pecaNome" />
                                            </span>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <span class="input-group">
                                                <span class="input-group-label zmdi zmdi-money-box"></span>
                                                <input style="padding-left: 40px; margin-bottom: 0px; margin-right: 15px;" type="number" name="valor" placeholder="Valor da peça" required v-model="peca.pecaValor" />
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="column small-12 medium-12 large-12">
                                         <label>
                                            <span class="input-group">
                                                <span class="input-group-label zmdi zmdi-key"></span>
                                                <input style="padding-left: 40px; margin-bottom: 0px;" type="text" name="nome" placeholder="Código da fábrica" required v-model="peca.pecaIdOriginal" />
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="column small-12 medium-6 large-6">
                                        <label>
                                            <span class="input-group">
                                                <span :class="'input-group-label rh rh-fw rh-' + tipoVeiculo.tiveIcone"></span>
                                                <select class="input-group-field placeholder" name="linha" required v-model="tipoVeiculo">
                                                    <option disabled selected value="">Linha de Veículo</option>
                                                    <option :value="tipoVeiculo" v-for="tipoVeiculo in tipoVeiculos" :key="tipoVeiculo.tiveId">{{tipoVeiculo.tiveDescricao}}</option>
                                                </select>
                                            </span>
                                        </label>
                                        <label>
                                            <span class="input-group">
                                                <!-- <span class="input-group-label driveme-mitsubishi"></span> -->
                                                <span :class="'input-group-label fa fa-marker driveme-' + montadora.montIcone"></span>
                                                <select class="input-group-field placeholder" id="js-form-start-location" name="vehicle-type" v-model="montadora">
                                                    <option disabled selected value="">Montadora</option>
                                                    <option :value="montadora" v-for="montadora in montadoras" :key="montadora.montId" >{{montadora.montDescricao}}</option>
                                                </select>
                                            </span>
                                        </label>
                                    </div>
                                    <div class="column small-12 medium-6 large-6">
                                        <label>
                                            <span class="input-group">
                                                <span class="input-group-label zmdi zmdi-arrows fa fa-marker"></span>
                                                <select class="input-group-field placeholder" name="aplicacao" v-model="aplicacao">
                                                    <option disabled selected hidden value="">Aplicação</option>
                                                    <option :value="aplicacao" v-for="aplicacao in aplicacoes" :key="aplicacao.apliId">{{aplicacao.apliDescricao}}</option>
                                                </select>
                                            </span>
                                        </label>
                                        <label>
                                            <span class="input-group">
                                                <span class="input-group-label zmdi zmdi-car"></span>
                                                <select class="input-group-field placeholder" name="modelo" required v-model="modelo">
                                                    <option disabled selected value="">Modelo</option>
                                                    <option :value="modelo" v-for="modelo in modelos" :key="modelo.modeId">{{modelo.modeDescricao}}</option>
                                                </select>
                                            </span>
                                        </label>
                                    </div>
                                    <div class="column textarea-column">
                                        <label>
                                            <span class="input-group">
                                                <span class="input-group-label zmdi zmdi-edit"></span>
                                                <textarea name="descricao" placeholder="Descrição" required v-model="peca.pecaDescricao"></textarea>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div><!-- Fim Principal-->
                        <!-- Características -->
                        <div class="tabs-panel" id="js-caracteristicas" v-show="caracteristicas">
                            <form data-abide novalidate>
                                <div class="alert callout" data-abide-error>
                                    <!-- <p><i class="fi-alert"></i> Por favor, insira ao menos uma característica.</p> -->
                                </div>
                                <div class="row">
                                    <div class="column small-12 medium-6 large-6">
                                        <label>
                                            <span class="input-group">
                                                <span class="input-group-label zmdi zmdi-edit"></span>
                                                <textarea name="caractit1" placeholder="Característica 1 - Título" required v-model="PecaCaracteristica1.pecaTitulo"></textarea>
                                            </span>
                                        </label>
                                        <label>
                                            <span class="input-group">
                                                <span class="input-group-label zmdi zmdi-edit"></span>
                                                <textarea name="caractit2" placeholder="Característica 2 - Título" required v-model="PecaCaracteristica2.pecaTitulo"></textarea>
                                            </span>
                                        </label>
                                        <label>
                                            <span class="input-group">
                                                <span class="input-group-label zmdi zmdi-edit"></span>
                                                <textarea name="caractit3" placeholder="Característica 3 - Título" required v-model="PecaCaracteristica3.pecaTitulo"></textarea>
                                            </span>
                                        </label>
                                        <label>
                                            <span class="input-group">
                                                <span class="input-group-label zmdi zmdi-edit"></span>
                                                <textarea name="caractit4" placeholder="Característica 4 - Título" required v-model="PecaCaracteristica4.pecaTitulo"></textarea>
                                            </span>
                                        </label>
                                    </div>
                                    <div class="column small-12 medium-6 large-6">
                                        <label>
                                            <span class="input-group">
                                                <span class="input-group-label zmdi zmdi-edit"></span>
                                                <textarea name="caract1" placeholder="Característica 1" required v-model="PecaCaracteristica1.pecaCaracteristica"></textarea>
                                            </span>
                                        </label>
                                        <label>
                                            <span class="input-group">
                                                <span class="input-group-label zmdi zmdi-edit"></span>
                                                <textarea name="caract2" placeholder="Característica 2" required v-model="PecaCaracteristica2.pecaCaracteristica"></textarea>
                                            </span>
                                        </label>
                                        <label>
                                            <span class="input-group">
                                                <span class="input-group-label zmdi zmdi-edit"></span>
                                                <textarea name="caract3" placeholder="Característica 3" required v-model="PecaCaracteristica3.pecaCaracteristica"></textarea>
                                            </span>
                                        </label>
                                        <label>
                                            <span class="input-group">
                                                <span class="input-group-label zmdi zmdi-edit"></span>
                                                <textarea name="caract4" placeholder="Característica 4" required v-model="PecaCaracteristica4.pecaCaracteristica"></textarea>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div><!-- Fim Características-->
                        <div class="tabs-panel js-especificacoes" id="js-especificacoes" v-show="especificacoes">
                            <form data-abide novalidate>
                                <div class="alert callout" data-abide-error>
                                    <!-- <p><i class="fi-alert"></i> Por favor, preencha ao menos uma especificação.</p> -->
                                </div>
                                <div class="row">
                                    <div class="column small-12 medium-6 large-6">
                                        <label>
                                            <span class="input-group">
                                                <span class="input-group-label zmdi zmdi-edit"></span>
                                                <textarea name="espec1" placeholder="Especificação 1" required v-model="PecaEspecificacao1.pecaEspecificacao"></textarea>
                                            </span>
                                        </label>
                                        <label>
                                            <span class="input-group">
                                                <span class="input-group-label zmdi zmdi-edit"></span>
                                                <textarea name="espec2" placeholder="Especificação 2" required v-model="PecaEspecificacao2.pecaEspecificacao"></textarea>
                                            </span>
                                        </label>
                                        <label>
                                            <span class="input-group">
                                                <span class="input-group-label zmdi zmdi-edit"></span>
                                                <textarea name="espec3" placeholder="Especificação 3" required v-model="PecaEspecificacao3.pecaEspecificacao"></textarea>
                                            </span>
                                        </label>
                                        <label>
                                            <span class="input-group">
                                                <span class="input-group-label zmdi zmdi-edit"></span>
                                                <textarea name="espec4" placeholder="Especificação 4" required v-model="PecaEspecificacao4.pecaEspecificacao"></textarea>
                                            </span>
                                        </label>
                                    </div>
                                    <div class="column small-12 medium-6 large-6">
                                        <label>
                                            <span class="input-group">
                                                <span class="input-group-label zmdi zmdi-edit"></span>
                                                <textarea name="espec5" placeholder="Especificação 5" required v-model="PecaEspecificacao5.pecaEspecificacao"></textarea>
                                            </span>
                                        </label>
                                        <label>
                                            <span class="input-group">
                                                <span class="input-group-label zmdi zmdi-edit"></span>
                                                <textarea name="espec6" placeholder="Especificação 6" required v-model="PecaEspecificacao6.pecaEspecificacao"></textarea>
                                            </span>
                                        </label>
                                        <label>
                                            <span class="input-group">
                                                <span class="input-group-label zmdi zmdi-edit"></span>
                                                <textarea name="espec7" placeholder="Especificação 7" required v-model="PecaEspecificacao7.pecaEspecificacao"></textarea>
                                            </span>
                                        </label>
                                        <label>
                                            <span class="input-group">
                                                <span class="input-group-label zmdi zmdi-edit"></span>
                                                <textarea name="espec8" placeholder="Especificação 8" required v-model="PecaEspecificacao8.pecaEspecificacao"></textarea>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div><!-- Fim Especificações-->
                        <!-- Imagens -->

                        <div class="tabs-panel js-imagens" id="js-imagens" v-show="imagens">
                            <form data-abide novalidate>
                                <div class="alert callout" data-abide-error>
                                    <!-- <p><i class="fi-alert"></i> Por favor, insira ao menos uma imagem.</p> -->
                                </div>
                                <div class="row">
                                    <div class="column small-12 medium-12 large-12">
                                        <label>
                                            <!-- <span class="input-group">
                                                <span class="input-group-label zmdi zmdi-camera-add"></span>
                                                <input class="input-group-field" type="file" placeholder="Imagem 1...">
                                            </span> -->
                                            <vue-dropzone id="vueDropzone" :options="dropOptions" ref="dropzoneElement" @vdropzone-success="sucesso" ></vue-dropzone>
                                        </label>
                                        <!-- <label>
                                            <span class="input-group">
                                                <span class="input-group-label zmdi zmdi-camera-add"></span>
                                                <input class="input-group-field" type="file" placeholder="Imagem 1...">
                                            </span>
                                        </label>
                                        <label>
                                            <span class="input-group">
                                                <span class="input-group-label zmdi zmdi-camera-add"></span>
                                                <input class="input-group-field" type="file" placeholder="Imagem 1...">
                                            </span>
                                        </label>
                                        <label>
                                            <span class="input-group">
                                                <span class="input-group-label zmdi zmdi-camera-add"></span>
                                                <input class="input-group-field" type="file" placeholder="Imagem 1...">
                                            </span>
                                        </label> -->
                                    </div>
                                </div>
                                 <div class="text-center">
                                    <button class="button rh-button mb0" style="margin-top: 15px;" type="button" @click="salvarPeca()"><i class="zmdi zmdi-mail-send"></i>
                                        <span>Adicionar Produto</span>
                                    </button>
                                </div>
                            </form>
                        </div><!-- Fim Imagens-->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import PecaService from "../../domain/services/PecaService.js";
import MontadoraService from '../../domain/services/MontadoraService.js';
import AplicacaoService from '../../domain/services/AplicacaoService.js';
import ModeloService from '../../domain/services/ModeloService.js';
import TipoVeiculoService from '../../domain/services/TipoVeiculoService.js';
import vueDropzone from "vue2-dropzone";
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import Peca from "../../domain/models/Peca.js";
import PecaCaracteristica from "../../domain/models/PecaCaracteristica.js";
import PecaEspecificacao from "../../domain/models/PecaEspecificacao.js";
import PecaImagem from "../../domain/models/PecaImagem.js";

export default {
    data(){
        return{
            peca: new Peca,
            montadora: '',
            montadoras: [],
            modelos: [],
            modelo: '',
            aplicacoes: [],
            aplicacao: '',
            tipoVeiculos: [],
            tipoVeiculo: '',
            informacoes: true,
            caracteristicas: false,
            especificacoes: false,
            imagens: false,
            PecaCaracteristica1: new PecaCaracteristica,
            PecaCaracteristica2: new PecaCaracteristica,
            PecaCaracteristica3: new PecaCaracteristica,
            PecaCaracteristica4: new PecaCaracteristica,
            PecaEspecificacao1: new PecaEspecificacao,
            PecaEspecificacao2: new PecaEspecificacao,
            PecaEspecificacao3: new PecaEspecificacao,
            PecaEspecificacao4: new PecaEspecificacao,
            PecaEspecificacao5: new PecaEspecificacao,
            PecaEspecificacao6: new PecaEspecificacao,
            PecaEspecificacao7: new PecaEspecificacao,
            PecaEspecificacao8: new PecaEspecificacao,
            dropOptions: {
                url: 'http://localhost:8081/DriveMe/api/v1/configuracoes/upload',
                maxFilesize: 20, // MB
                maxFiles: 6,
                thumbnailWidth: 120, // px
                thumbnailHeight: 120,
                addRemoveLinks: true,
                acceptedFiles: "image/*",
                dictDefaultMessage:"<div style='padding:15px 0 10px 0;'><img src='/static/upload.svg' style='height: 50px;'><br><div style='padding: 20px 8px 0 15px; '>Arraste a imagem aqui ou clique para selecioná-la</div></div>",
                dictRemoveFile: 'Remover',
                dictInvalidFileType: 'Você só pode fazer upload de imagens aqui',
                dictMaxFilesExceeded: 'Você não pode mais enviar mais arquivos'
            }
        }
    },
    components: {
        vueDropzone,
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
        /** */
    },
    methods:{
        sucesso(file, response){

            try {
                if(response.status == 'SUCCESS'){
                    var pecaImagem = new PecaImagem();
                    pecaImagem.peimUrl = response.imagem.peimUrl;
                    this.peca.pecaImagems.push(pecaImagem);
                }
                console.log(response)
            } catch (error) {
                alert("Falha ao realizar upload da imagem")
                console.log(error)
            }
        },
        trocarPainel(painel){
            this.informacoes= false
            this.caracteristicas= false
            this.especificacoes= false
            this.imagens= false
            if(painel == 1){
                this.informacoes = true
            }else if(painel == 2){
                this.caracteristicas = true
            }else if(painel == 3){
                this.especificacoes = true
            }else if(painel == 4){
                this.imagens = true
            }
        },
        salvarPeca(){
            this.peca.tipoVeiculos.push(this.tipoVeiculo);
            this.peca.aplicacaos.push(this.aplicacao);
            this.peca.montadoras.push(this.montadora);
            this.peca.modelos.push(this.modelo);
            this.peca.pecaCaracteristicas.push(this.PecaCaracteristica1);
            this.peca.pecaCaracteristicas.push(this.PecaCaracteristica2);
            this.peca.pecaCaracteristicas.push(this.PecaCaracteristica3);
            this.peca.pecaCaracteristicas.push(this.PecaCaracteristica4);
            this.peca.pecaEspecificacaos.push(this.PecaEspecificacao1);
            this.peca.pecaEspecificacaos.push(this.PecaEspecificacao2);
            this.peca.pecaEspecificacaos.push(this.PecaEspecificacao3);
            this.peca.pecaEspecificacaos.push(this.PecaEspecificacao4);
            this.peca.pecaEspecificacaos.push(this.PecaEspecificacao5);
            this.peca.pecaEspecificacaos.push(this.PecaEspecificacao6);
            this.peca.pecaEspecificacaos.push(this.PecaEspecificacao7);
            this.peca.pecaEspecificacaos.push(this.PecaEspecificacao8);

            console.log(this.peca)

            this.service = new PecaService(this.$resource);
            this.service
                .post(this.peca)
                .then(resposta => {
                    if(resposta.body.status === 'SUCCESS'){
                        this.peca = new Peca();
                        this.tipoVeiculo = new tipoVeiculo();
                        this.aplicacao = new Aplicacao();
                        this.montadora = new Montadora();
                        this.modelo = new Modelo();
                    }
                })
                .catch(e => {
                    console.log(e)
                })
        },

        teste(){
            this.service = new PecaService(this.$resource);
            this.service
                .post(this.peca)
                .then(resposta => {
                    if(resposta.body.status === 'SUCCESS'){
                        console.log(resposta)
                    }
                })
                .catch(e => {
                    console.log(e)
                })
        }
    }
}
</script>

<style>

.callout{
    background-color: transparent !important;
    border-bottom: transparent;
}

.tab-fix{
    list-style-type: none;
    transition: all .3s;
    color: #333;
    background: #f8f8f8;
    text-transform: uppercase;
    text-align: center;
}
.tab-fix a:hover{
    box-shadow: inset 0 -3px 0 0 #d6d6d6,inset 0 0 0 1px #e6e6e6;
}
.active-fix a{
    color: #f8f8f8 !important;
    background: #333 !important;
    box-shadow: inset 0 -3px 0 0 #ad9574,inset 0 0 0 1px #e6e6e6,0 1px 0 0 #ad9574;
}

/* .tabs {
    z-index: 1;
    border: none;
    background: 0 0;
}

.tabs-panel {
    height: inherit;
}

.tabs-title>a {
    padding-right: 1rem;
    padding-left: 1rem;
    transition: all .3s;
    color: #333;
    background: #f8f8f8;
}

.tabs-title>a:focus,.tabs-title>a:hover {
    color: currentColor;
    background: #fff;
}

.tabs-title.is-active>a {
    color: currentColor;
    background-color: #fff;
}

.tabs:not(.vertical) .tabs-title>a:focus,.tabs:not(.vertical) .tabs-title>a:hover {
    box-shadow: inset 0 -3px 0 0 #d6d6d6,inset 0 0 0 1px #e6e6e6;
}

.tabs:not(.vertical) .tabs-title.is-active>a {
    box-shadow: inset 0 -3px 0 0 #ad9574,inset 0 0 0 1px #e6e6e6,0 1px 0 0 #ad9574;
}

.tabs.vertical .tabs-title>a:focus,.tabs.vertical .tabs-title>a:hover {
    box-shadow: inset -3px 0 0 0 #d6d6d6,inset 0 0 0 1px #e6e6e6;
}

.tabs.vertical .tabs-title.is-active>a {
    box-shadow: inset -3px 0 0 0 #ad9574,inset 0 0 0 1px #e6e6e6,1px 0 0 0 #ad9574;
}

.tabs[class*=secondary] .tabs-title.is-active>a {
    color: #fff;
    background-color: #333;
}

.is-active .accordion-button:before {
    transform: rotate(-90deg);
}

.is-active .accordion-button:after {
    transform: rotate(-180deg);
}

.is-active>.accordion-title {
    border-bottom-width: 2px;
    border-bottom-color: #ad9574;
    background-color: inherit;
}

[class*=secondary]>.is-active>.accordion-title {
    color: #fff;
    border-color: #333 #333 #ad9574;
    background-color: #333;
}

[class*=primary]>.is-active>.accordion-title {
    border-color: #ad9574 #ad9574 #fff;
    background-color: #ad9574;
}

.primary>.is-active>.accordion-title {
    border-bottom-width: 0;
}

[class*=primary]>.is-active .accordion-button:after,[class*=primary]>.is-active .accordion-button:before {
    background-color: #333;
} */

</style>



