<template>
    <section class="section s-line">
        <div class="row align-center">
            <div class="column small-12 large-10">

                <header class="s-header align-center">
                    <h2 class="s-headline"> CADASTRO DE MONTADORA<span class="s-headline-decor"></span></h2>
                </header>
                <!-- Principal -->
                <div class="tabs-panel is-active" id="js-descricao">
                    <form data-abide novalidate>
                        <div class="alert callout" data-abide-error v-show="erro">
                            <p><i class="fi-alert"></i> Por favor, preencha a descrição da montadora.</p>
                        </div>
                        <div class="row">
                            <div class="column textarea-column">
                                <label>
                                    <span class="input-group">
                                        <span class="input-group-label zmdi zmdi-edit"></span>
                                        <input class="input-group-field" type="text" placeholder="Nome" v-model="montadora.montDescricao">
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div class="text-center">
                            <button class="button rh-button mb0" type="button" @click="salvarMontadora()"><i class="zmdi zmdi-mail-send"></i>
                                <span>Adicionar MONTADORA</span>
                            </button>
                        </div>
                    </form>
                </div>
                <!-- Fim Principal-->
                </div><!-- /end .column -->
            </div><!-- /end .row -->
    </section><!-- /end .section -->
</template>

<script>
import Montadora from '../../../domain/models/Montadora.js'
import MontadoraService from '../../../domain/services/MontadoraService.js'

export default {

    data(){
        return{
            montadora: new Montadora(),
            erro: false
        }
    },
    methods:{
        salvarMontadora(){
            this.service = new MontadoraService(this.$resource)
            if(this.montadora.montDescricao == ''){
                this.erro = true;
            }else{
                this.erro = false;
                this.service.post(this.montadora)
                    .then(resposta => {
                        if(resposta.body.status != 'SUCCESS'){
                            console.log(resposta)
                            alert("Erro ao cadastrar montadora")
                        }else{
                            this.$router.replace('/administrador')
                        }
                    })
                    .catch( error => {
                        alert("Erro ao cadastrar montadora")
                        console.log(error)
                    })
            }
        }
    }
}
</script>

<style>

</style>
