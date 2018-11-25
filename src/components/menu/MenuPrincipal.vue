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
                                    <!-- <li><router-link to="/peca/cadastro">Cadastrar peça</router-link></li> -->
                                </ul>
                            </li><!-- /end main-menu item -->

                            <li>
                                <router-link to="/catalogo">Catálogo Virtual</router-link>
                                <!-- <a href="catalogo.html">Catálogo Virtual</a> -->
                            </li><!-- /end main-menu item -->



                            <!-- <li>
                                <a href="#">Carrinho</a>
                            </li> -->
                            
                            <li>
                                <a @click.prevent="logoff" v-if="logado">Sair</a>
                                <a @click.prevent="show" v-else>Cadastro/Log-in</a>
                            </li><!-- /end main-menu item -->

                            <li v-if="logado">
                                <router-link to="/administrador" v-if="this.$usuario.tipoUsuario.tiusId == 1 && logado"><a>Área do Administrador</a></router-link>
                                <router-link to="/cliente" v-else>bem vindo, {{this.$usuario.usuaNome}}</router-link>
                            </li><!-- /end main-menu item -->                        

                        </ul><!-- /end .main-menu -->
                    </nav><!-- /end .site-navigation -->

                    <!-- mobile menu button -->
                    <a class="button menu-trigger hide-for-large" id="js-header-nav-btn" href="#" data-toggle="js-main-off-canvas-right">
                        <span class="burger-icon"></span>Menu</a>
                </div><!-- /end .column -->
            </div><!-- /end .row -->
        </header><!-- /end .site-header -->
        <modal name="hello-world" id="modalLogin" :height="'auto'">
            <div class="js-tabs-container" >
                <ul class="tabs secondary expanded" id="js-modal-tabs" data-tabs data-auto-focus="false">
					<li class="tabs-title" @click="login = true" :class="login? 'is-active' : ''">
						<a href="#js-modal-login-panel"> <i class="zmdi zmdi-sign-in zmdi-hc-fw fa fa-sign-in fa-fw"></i>Log-In</a>
					</li>
					<li class="tabs-title" @click="login = false" :class="!login? 'is-active' : ''">
						<a href="#js-modal-register-panel"> <i class="zmdi zmdi-account-add zmdi-hc-fw fa fa-user-plus fa-fw"></i>Cadastro</a>
					</li>
				</ul>
                <div class="tabs-content" data-tabs-content="js-modal-tabs" data-auto-focus="false">
					<div class="tabs-panel is-active" id="js-modal-login-panel" v-if="login">
                        <form data-abide novalidate>
							<label>
								<span class="input-group">
									<span class="input-group-label  zmdi zmdi-email fa fa-envelope"></span>
									<input class="input-group-field" type="text" placeholder="E-mail" required v-model="usuario.usuaEmail">
								</span>
							</label>
                            <label>
                                <span class="input-group">
                                    <span class="input-group-label zmdi zmdi-lock fa fa-lock"></span>
                                    <input class="input-group-field" type="password" placeholder="Senha" required v-model="usuario.usuaSenha">
                                </span>
                            </label>
                            <div class="text-center">
								<button class="button rh-button " @click="logarUsuario()" type="button"><i class="zmdi zmdi-lock fa fa-unlock"></i>
									<span>Log-In</span>
								</button>
							</div>
                        </form>
					</div>
                    <div class="tabs-panel" id="js-modal-login-panel" v-else>
                        <form data-abide novalidate>
							<fieldset>
								<label>
									<span class="input-group">
										<span class="input-group-label zmdi zmdi-account fa fa-user"></span>
										<input class="input-group-field" type="text" placeholder="Nome" required v-model="usuario.usuaNome">
									</span>
								</label>
								<label>
									<span class="input-group">
										<span class="input-group-label zmdi zmdi-email fa fa-envelope"></span>
										<input class="input-group-field" type="email" placeholder="E-mail" required v-model="usuario.usuaEmail">
									</span>
								</label>
								<label>
									<span class="input-group">
										<span class="input-group-label zmdi zmdi-lock fa fa-lock"></span>
										<input class="input-group-field" type="password" placeholder="Senha" required v-model="usuario.usuaSenha">
									</span>
								</label>
								<label>
									<span class="input-group">
										<span class="input-group-label zmdi zmdi-lock fa fa-lock"></span>
										<input class="input-group-field" type="password" placeholder="Repita sua senha" required v-model="confirmacaoSenha">
									</span>
								</label>
							</fieldset>
							<div class="text-center">
								<button class="button rh-button " @click="cadastrarUsuario()" type="button"><i class="zmdi zmdi-check-square fa fa-check-square"></i>
									<span>Cadastrar</span>
								</button>
							</div>
						</form>
					</div>
                </div>
            </div>
        </modal>
      </div><!-- /end #js-sticky-container -->
</template>

<script>
import Vue from 'vue'
import Usuario from '../../domain/models/Usuario.js'
import UsuarioService from '../../domain/services/UsuarioService.js'

export default {
    data(){
        return{
            usuario: new Usuario(),
            confirmacaoSenha: '',
            login: true,
            logado: false,
        }
    },
    methods: {
        show () {
            this.$modal.show('hello-world');
        },
        hide () {
            this.$modal.hide('hello-world');
        },
        logoff(){
            this.logado = false,
            Vue.prototype.$usuario = new Usuario();
            if(this.$router.currentRoute.name == 'menu-adm' || this.$router.currentRoute.name == 'menu-cliente'){
                this.$router.push({ path: '/' })
            }
        },
        cadastrarUsuario(){
            if(this.confirmacaoSenha == this.usuario.usuaSenha){
                this.service = new UsuarioService(this.$resource);
                this.service
                    .post(this.usuario)
                    .then(resposta => {
                        if(resposta.status == 200){
                            if(resposta.body.status == "SUCCESS"){
                                Vue.prototype.$usuario = resposta.body.usuario
                                this.usuario = new Usuario()
                                this.logado = true
                                this.hide();
                            }else{
                                alert("Usuario já cadastrado")
                            }
                        }
                    })
                    .catch(e => {
                        console.log(e)
                    })  
            }

        },
        logarUsuario(){
            this.service = new UsuarioService(this.$resource);
            this.service
                .login(this.usuario.usuaEmail, this.usuario.usuaSenha)
                .then(resposta => {
                    if(resposta.status == 200){
                        Vue.prototype.$usuario = resposta.body.usuario
                        this.usuario = new Usuario()
                        this.logado = true
                        this.hide();
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


</style>

