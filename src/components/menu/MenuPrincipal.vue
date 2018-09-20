<template>
    <div id="js-sticky-container" data-sticky-container>
        <header class="site-header sticky" data-sticky data-margin-top="0" data-top-anchor="js-sticky-container" data-sticky-on="large">
            <div class="row">
                <div class="column shrink">
                    <!-- .site-header-logo -->
                    <div class="site-header-logo logo-container">
                        <router-link to="/">
                            <span class="text-hide">"DriveMe" - Loja ABC</span>
                            <img src='/static/logo.svg' class="secondary" alt='"DriveMe'>
                        </router-link>
                        <!-- <a href="index.html">
                        </a> -->
                    </div><!-- /end .site-header-logo -->
                </div><!-- /end .column -->
                <div class="column flex-child-grow">
                    <!-- .site-navigation -->
                    <nav class="site-navigation show-for-large">
                        <ul class="main-menu menu dropdown" data-dropdown-menu data-hover-delay="300">
                            <li>
                                <router-link to="/">Home</router-link>
                                <!-- <a href="#">Home</a> -->
                            </li><!-- /end main-menu item -->

                            <li>
                                <a href="#">A Empresa</a>
                                <ul class="menu vertical">
                                    <li><a href="about-us.html">Sobre Nós</a></li>
                                    <li><a href="faq.html">Como Comprar</a></li>
                                </ul>
                            </li><!-- /end main-menu item -->

                            <li>
                                <router-link to="/catalogo">Catálogo Virtual</router-link>
                                <!-- <a href="catalogo.html">Catálogo Virtual</a> -->
                                <ul class="menu vertical">
                                    <li><a href="services-cards.html">Peças</a></li>
                                    <li><a href="services-list.html">Modelos</a></li>
                                    <li><a href="services-single-page.html">Linhas de Veículo</a></li>
                                    <li><a href="services-single-page.html">Montadoras</a></li>
                                    <li><a href="services-single-page.html">Aplicação</a></li>
                                </ul>
                            </li><!-- /end main-menu item -->

                            <li>
                                <a @click.prevent="show">Cadastro/Log-in</a>
                                <!-- <a href="#" data-open="js-modal-account">Cadastro/Log-in</a> -->
                            </li><!-- /end main-menu item -->


                            <li>
                                <a href="#">Carrinho</a>
                            </li><!-- /end main-menu item -->

                            <li>
                                <a href="#">Área do Administrador</a>
                            </li><!-- /end main-menu item -->
                        </ul><!-- /end .main-menu -->
                    </nav><!-- /end .site-navigation -->

                    <!-- mobile menu button -->
                    <a class="button menu-trigger hide-for-large" id="js-header-nav-btn" href="#" data-toggle="js-main-off-canvas-right">
                        <span class="burger-icon"></span>Menu</a>
                </div><!-- /end .column -->
            </div><!-- /end .row -->
        </header><!-- /end .site-header -->
        <modal name="hello-world">
            <div class="js-tabs-container" >
                <ul class="tabs secondary expanded" id="js-modal-tabs" data-tabs data-auto-focus="false">
					<li class="tabs-title is-active">
						<a href="#js-modal-login-panel"> <i class="zmdi zmdi-sign-in zmdi-hc-fw fa fa-sign-in fa-fw"></i>Log-In</a>
					</li>
					<li class="tabs-title">
						<a href="#js-modal-register-panel"> <i class="zmdi zmdi-account-add zmdi-hc-fw fa fa-user-plus fa-fw"></i>Cadastro</a>
					</li>
				</ul>
                <div class="tabs-content" data-tabs-content="js-modal-tabs" data-auto-focus="false">
					<div class="tabs-panel is-active" id="js-modal-login-panel">
                        teste
					</div>
                </div>
				
            </div>
        </modal>
      </div><!-- /end #js-sticky-container -->
</template>

<script>
export default {
    methods: {
        show () {
            this.$modal.show('hello-world');
        },
        hide () {
            this.$modal.hide('hello-world');
        }
    }
}
</script>

<style>


</style>

