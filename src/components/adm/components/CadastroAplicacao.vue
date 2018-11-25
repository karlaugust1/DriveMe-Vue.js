<template>
    <section class="section s-line">
        <div class="row align-center">
            <div class="column small-12 large-10">

                <header class="s-header align-center">
                    <h2 class="s-headline"> CADASTRO DE APLICAÇÃO<span class="s-headline-decor"></span></h2>
                </header>
                <!-- Principal -->
                <div class="tabs-panel is-active" id="js-descricao">
                    <form data-abide novalidate>
                        <div class="alert callout" data-abide-error v-show="erro">
                            <p><i class="fi-alert"></i> Por favor, preencha a descrição da aplicação.</p>
                        </div>
                        <div class="row">
                            <div class="column textarea-column">
                                <label>
                                    <span class="input-group">
                                        <span class="input-group-label zmdi zmdi-edit"></span>
                                        <input class="input-group-field" type="text" placeholder="Nome" v-model="aplicacao.apliDescricao">
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div class="text-center">
                            <button class="button rh-button mb0" type="button" @click="salvarAplicacao()"><i class="zmdi zmdi-mail-send"></i>
                                <span>Adicionar APLICAÇÃO</span>
                            </button>
                        </div>
                    </form>
                    </div>
                </div><!-- /end .column -->
            </div><!-- /end .row -->
    </section><!-- /end .section -->
</template>

<script>
import Aplicacao from '../../../domain/models/Aplicacao.js'
import AplicacaoService from '../../../domain/services/AplicacaoService.js'

export default {

    data(){
        return{
            aplicacao: new Aplicacao(),
            erro: false
        }
    },
    methods:{
        salvarAplicacao(){
            this.service = new AplicacaoService(this.$resource)
            if(this.aplicacao.apliDescricao == ''){
                this.erro = true;
            }else{
                this.erro = false;
                this.service.post(this.aplicacao)
                    .then(resposta => {
                        if(resposta.body.status != 'SUCCESS'){
                            console.log(resposta)
                            alert("Erro ao cadastrar aplicacao")
                        }else{
                            this.$router.replace('/administrador')
                        }
                    })
                    .catch( error => {
                        alert("Erro ao cadastrar aplicacao")
                        console.log(error)
                    })
            }
        }
    }
}
</script>

<style>

</style>
