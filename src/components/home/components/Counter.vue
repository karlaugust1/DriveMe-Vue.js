<template>
    <div class="is-fixed s-counters bg-secondary s-border" data-counter data-interchange="[/static/sections/f-gallery-04@large1.jpg, small]">
        <div class="row small-up-1 medium-up-2 large-up-4 expanded collapse counter secondary">

            <div class="column">
                <div class="media-object align-center-middle">
                    <div class="media-object-section align-self-top"><i class="counter-icon rh rh-van-f"></i></div>
                    <div class="media-object-section">
                        <div class="counter-digits js-counter" data-value="9999">{{produtos}}</div>
                        <div class="counter-title">Produtos Cadastrados</div>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="media-object align-center-middle">
                    <div class="media-object-section align-self-top"><i class="counter-icon rh rh-calendar"></i></div>
                    <div class="media-object-section">
                        <div class="counter-digits js-counter" data-value="9125">{{this.funcionamento}}</div>
                        <div class="counter-title">Dias de Funcionamento</div>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="media-object align-center-middle">
                    <div class="media-object-section align-self-top"><i class="counter-icon rh rh-case"></i></div>
                    <div class="media-object-section">
                        <div class="counter-digits js-counter" data-value="1234">{{this.compras}}</div>
                        <div class="counter-title">Compras Realizadas</div>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="media-object align-center-middle">
                    <div class="media-object-section align-self-top"><i class="counter-icon rh rh-user"></i></div>
                    <div class="media-object-section">
                        <div class="counter-digits js-counter" data-value="7859">{{this.usuarios}}</div>
                        <div class="counter-title">Usuários Registrados</div>
                    </div>
                </div>
            </div>

        </div><!-- /end .row -->
    </div><!-- /end .s-counters -->
</template>
<script>
import UtilService from '../../../domain/services/UtilService'
export default {
    data(){
        return{
            produtos: '',
            funcionamento: '',
            compras: '',
            usuarios: ''
        }
    },
    created(){
        this.service = new UtilService(this.$resource)
        this.service.list()
            .then(resposta => {
                this.produtos = resposta.body.produtos,
                this.funcionamento = resposta.body.funcionamento,
                this.compras = resposta.body.compras,
                this.usuarios = resposta.body.usuarios
            })
    }
    
}
</script>
<style>

</style>
