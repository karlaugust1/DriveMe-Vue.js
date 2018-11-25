<template>
    <section class="section s-line">
        <div class="row align-center">
            <div class="column small-12 large-10">

                <header class="s-header align-center">
                    <h2 class="s-headline"> CADASTRO DE MODELO<span class="s-headline-decor"></span></h2>
                </header>
                        <!-- Principal -->
                        <div class="tabs-panel is-active" id="js-descricao">
                            <form data-abide novalidate>
                                <div class="alert callout" data-abide-error v-show="erro">
                                    <p><i class="fi-alert"></i>{{msgErro}}</p>
                                </div>
                                <div class="row">
                                    <div class="column small-12 medium-6 large-6">
                                        <label>
                                            <span class="input-group">
                                                <span class="input-group-label zmdi zmdi-calendar"></span>
                                                <input class="input-group-field" type="number" placeholder="Ano de fabricação" v-model="modelo.modeAno">
                                            </span>
                                        </label>
                                    </div>
                                    <div class="column small-12 medium-6 large-6">
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
                                    <div class="column textarea-column">
                                        <label>
                                            <span class="input-group">
                                                <span class="input-group-label zmdi zmdi-edit"></span>
                                                <input class="input-group-field" type="text" placeholder="Descrição" v-model="modelo.modeDescricao">
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <button class="button rh-button mb0" type="button" @click="salvarModelo()"><i class="zmdi zmdi-mail-send"></i>
                                        <span>Adicionar MODELO</span>
                                    </button>
                                </div>
                            </form>
                        </div><!-- Fim Principal-->
                        
                </div><!-- /end .column -->
            </div><!-- /end .row -->
    </section><!-- /end .section -->
</template>

<script>
import Modelo from '../../../domain/models/Modelo.js'

import ModeloService from '../../../domain/services/ModeloService.js'
import MontadoraService from '../../../domain/services/MontadoraService.js'

export default {
    data(){
        return {
            montadora: '',
            montadoras: [],
            modelo: new Modelo(),
            erro: false,
            msgErro: 'Por favor, preencha todos os campos obrigatórios.'
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

    },
    methods:{
        salvarModelo(){
            if(this.modelo.modeDescricao == ''){
                this.msgErro = 'Por favor, preencha o campo "Descrição".'
                this.erro = true;
            }else if(this.modelo.modeAno == ''){
                this.msgErro = 'Por favor, preencha o campo "Ano".'
                this.erro = true;
            }else if(this.montadora == ''){
                this.msgErro = 'Por favor, selecione uma montadora'
                this.erro = true;
            }else{
                this.modelo.modeId = this.montadora.montId;
                this.service = new ModeloService(this.$resource)
                this.service.post(this.modelo)
                    .then(resposta =>{
                        if(resposta.body.status != 'SUCCESS'){
                            console.log(resposta)
                            this.msgErro = 'Ocorreu um erro ao cadastrar modelo'
                            this.erro = true;
                        }else{
                            this.erro = false;
                            this.$router.replace('/administrador')
                        }
                    })
                    .catch(e => {
                        console.log(e)
                    })    
            }
        }
    }
}
</script>

<style>

</style>
