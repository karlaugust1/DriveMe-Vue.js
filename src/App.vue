<template>
  <div id="app">
    <div class="off-canvas-wrapper ">
			<menu-mobile/>
      <div class="off-canvas-content" data-off-canvas-content>
        <menu-principal/>
        <transition name="pagina">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition> 
        <rodape/>
      </div>
    </div>
  </div>
</template>

<script>
import MenuMobile from "./components/menu/MenuMobile.vue";
import MenuPrincipal from "./components/menu/MenuPrincipal.vue";
import Footer from './components/footer/Footer.vue';
import Home from './components/home/Home.vue';

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components:{
    'menu-mobile' : MenuMobile,
    'menu-principal' : MenuPrincipal,
    'home': Home,
    'rodape':Footer,
  }
}
</script>

<style>
.pagina-enter, .pagina-leave-active {
    opacity: 0;
}

.pagina-enter-active, .pagina-leave-active {
    transition: opacity .4s;
}
</style>
