<template>
    <div>
        <carrossel/>
        <bem-vindo/>
        <melhores-produtos/>
        <divisoria/>
        <mais-visualizados/>
        <vantagens/>
        <counter/>
    </div>
</template>
<script>
import Carrossel from "./components/Carrossel.vue";
import BemVindo from "./components/BemVindo.vue";
import MelhoresProdutos from "./components/MelhoresProdutos.vue";
import MaisVisualizados from './components/MaisVisualizados.vue';
import Vantagens from './components/Vantagens.vue';
import Counter from './components/Counter.vue';
import Divisoria from './components/Divisoria.vue';

export default {
     data: function () {
        return {
        }
    },
    components:{
        'carrossel' : Carrossel,
        'bem-vindo' : BemVindo,
        'melhores-produtos' : MelhoresProdutos,
        'divisoria':Divisoria,
        'mais-visualizados' : MaisVisualizados,
        'vantagens' : Vantagens,
        'counter':Counter,
    },
    mounted(){
        window.scrollTo(0,0)
    }
}
</script>
<style>


</style>
