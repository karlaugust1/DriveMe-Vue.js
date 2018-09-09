<template>
    <div class="off-canvas position-right" id="js-main-off-canvas-right" data-off-canvas data-content-scroll="false" data-auto-focus="false">
         <!-- Menu Mobile -->
        <nav class="mobile-navigation rh-menu" id="js_mobile-menu">
            <div class="mobile-navigation-header">
                <button class="close-button" data-close aria-label="Close menu">
                    <span></span>
                </button>
            </div>
            <!-- Menu Principal Mobile -->
            <ul class="vertical menu" data-drilldown>
                <li>
                    <router-link to="/">Home</router-link>
                    <!-- <a href="index.html">Home</a> -->
                </li><!-- /end mobile menu item -->
                <li>
                    <a href="#">A Empresa</a>
                    <ul class="menu vertical">
                        <li>
                            <a href="about-us.html">Sobre Nós</a>
                        </li>
                        <li>
                            <a href="#">Como Comprar</a>
                        </li>
                    </ul>
                </li><!-- /end mobile menu item -->
                <li>
                    <router-link to="/catalogo">Catálogo Virtual</router-link>
                    <!-- <a href="catalogo.html"></a> -->
                    <ul class="menu vertical">
                        <li><a href="services-cards.html">Peças</a></li>
                        <li><a href="services-list.html">Modelos</a></li>
                        <li><a href="services-single-page.html">Linhas de Veículo</a></li>
                        <li><a href="services-single-page.html">Montadoras</a></li>
                        <li><a href="services-single-page.html">Aplicação</a></li>
                    </ul>
                </li><!-- /end mobile menu item -->
                <li>
                    <a href="#" data-open="js-modal-account">Cadastro/Log-in</a>
                </li><!-- /end mobile menu item -->
                <li>
                    <a href="#">Carrinho</a>
                </li><!-- /end mobile menu item -->
                <li>
                    <a href="#">Área do Administrador</a>
                </li><!-- /end mobile menu item -->
            </ul><!-- /end .menu (main mobile menu) -->
        </nav><!-- /end .mobile-navigation -->
    </div><!-- /end .off-canvas -->
</template>

<script>
export default {
    
}
</script>

<style>

</style>
