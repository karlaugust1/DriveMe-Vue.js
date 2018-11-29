<template>
    <section class="section">

        <header class="s-header row align-center">
            <div class="column small-12 medium-8 large-5">
                <h2 class="s-headline">A Empresa<span class="s-headline-decor"></span></h2>
            </div>
        </header>
        <main class="mb0">

                        <!-- ===== VALORES ===== -->
    
            <section class="section-boxed bg-gray">
                <div class="row align-center features">
                    <div class="column small-12">
                        <header class="s-header align-center">
                            <h2 class="s-headline"> Valores que nos norteiam<span class="s-headline-decor"></span></h2>
                        </header>
                    </div>
                    <div class="column small-12 medium-4">

                        <!-- valor -->
                        <div class="media-object stack-for-small">
                            <div class="media-object-section">
                                <div class="icon-box circle small secondary"><i class="rh rh-tools-c"></i></div>
                            </div>
                            <div class="media-object-section">
                                <h3 class="h5">Presteza</h3>
                                <p>Celeridade em todas as requisições.</p>
                            </div>
                        </div>

                        <!-- valor -->
                        <div class="media-object stack-for-small">
                            <div class="media-object-section">
                                <div class="icon-box circle small secondary"><i class="zmdi zmdi-thumb-up"></i></div>
                            </div>
                            <div class="media-object-section">
                                <h3 class="h5">Qualidade</h3>
                                <p>Adoção das mais eficazes metodologias para garantir qualidade total.</p>
                            </div>
                        </div>

                        <!-- valor -->
                        <div class="media-object stack-for-small">
                            <div class="media-object-section">
                                <div class="icon-box circle small secondary"><i class="zmdi zmdi-shield-check"></i></div>
                            </div>
                            <div class="media-object-section">
                                <h3 class="h5">Segurança</h3>
                                <p>Realizar todos os procedimentos com garantia de segurança.</p>
                            </div>
                        </div>

                    </div><!-- /end .column -->
                    <div class="column small-12 medium-4">

                        <!-- valor -->
                        <div class="media-object stack-for-small">
                            <div class="media-object-section">
                                <div class="icon-box circle small secondary"><i class="rh rh-user"></i></div>
                            </div>
                            <div class="media-object-section">
                                <h3 class="h5">Profissionalismo</h3>
                                <p>Garantir conduta profissional em todas as transações</p>
                            </div>
                        </div>

                        <!-- valor -->
                        <div class="media-object stack-for-small">
                            <div class="media-object-section">
                                <div class="icon-box circle small secondary"><i class="zmdi zmdi-collection-bookmark"></i></div>
                            </div>
                            <div class="media-object-section">
                                <h3 class="h5">Transparência</h3>
                                <p>Transparência em todas as decisões e relações</p>
                            </div>
                        </div>

                        <!-- valor -->
                        <div class="media-object stack-for-small">
                            <div class="media-object-section">
                                <div class="icon-box circle small secondary"><i class="zmdi zmdi-hourglass-alt"></i></div>
                            </div>
                            <div class="media-object-section">
                                <h3 class="h5">Integridade</h3>
                                <p>Incorruptibilidade, honestidade e confiança.</p>
                            </div>
                        </div>

                    </div><!-- /end .column -->
                    <div class="column small-12 medium-4">

                        <!-- valor -->
                        <div class="media-object stack-for-small">
                            <div class="media-object-section">
                                <div class="icon-box circle small secondary"><i class="zmdi zmdi-globe-alt"></i></div>
                            </div>
                            <div class="media-object-section">
                                <h3 class="h5">Responsabilidade</h3>
                                <p>Para com o meio-ambiente e com nossos clientes</p>
                            </div>
                        </div>

                        <!-- valor -->
                        <div class="media-object stack-for-small">
                            <div class="media-object-section">
                                <div class="icon-box circle small secondary"><i class="zmdi zmdi-mood"></i></div>
                            </div>
                            <div class="media-object-section">
                                <h3 class="h5">Satisfação</h3>
                                <p>Garantir o conforto e a agradabilidade ao cliente.</p>
                            </div>
                        </div>

                        <!-- valor -->
                        <div class="media-object stack-for-small">
                            <div class="media-object-section">
                                <div class="icon-box circle small secondary"><i class="zmdi zmdi-puzzle-piece"></i></div>
                            </div>
                            <div class="media-object-section">
                                <h3 class="h5">Ausência de Barreiras</h3>
                                <p>Realizar todas as transações e serviços de maneira descomplicada e clara.</p>
                            </div>
                        </div>

                    </div><!-- /end .column -->
                </div><!-- /end .row -->
            </section> <!-- /end .section-boxed -->
        </main>

        <!-- ===== MISSÃO E VISÃO ===== -->

        <div class="section">
            <div class="row">


                <div class="column small-12 medium-12">
                    <!-- lista sanfonada -->
                    <ul class="accordion primary-fill" id="accordion-1" data-accordion data-allow-all-closed="true">


                        <!-- visão -->
                        <li class="accordion-item" data-accordion-item="data-accordion-item" @click="toggleVisao()" id="id-vissao">
                            <!-- accordion button -->
                            <a class="accordion-title h5 headline">Visão<span class="accordion-button float-right"></span></a>
                            <!-- accordion content -->
                            <div class="accordion-content" data-tab-content="data-tab-content" id="visao-empresa">
                                <p>Continuar nossa expansão para todo o mundo, levando satisfação em escala global.</p>
                            </div>
                        </li><!-- /end .visão -->

                        <!-- missão -->
                        <li class="accordion-item" data-accordion-item="data-accordion-item" @click="toggleMissao()" id="id-missao">
                            <!-- accordion button -->
                            <a class="accordion-title h5 headline" >Missão<span class="accordion-button float-right"></span></a>
                            <!-- accordion content -->
                            <div class="accordion-content" data-tab-content="data-tab-content" id="missao-empresa">
                                <p>Elevar a qualidade de todo o segmento, suportando a imortalidade de nosso Joaquim Fonseca.</p>
                            </div>
                        </li><!-- /end .missão -->

                    </ul><!-- /end .lista sanfonada -->
                </div><!-- /end .column -->
            </div><!-- /end .row -->
        </div> <!-- /end .section -->
    </section><!-- /end .section -->
</template>

<script>
export default {

    data(){
        return{
            visao: false,
            missao: false
        }
    },
    mounted(){
        window.scrollTo(0,0)
    },
    methods:{
        toggleVisao(){
            if(this.visao){
                $('#visao-empresa').slideUp('fast');
                $('#id-vissao').removeClass("is-active");
                this.visao = false
            }else{
                $('#visao-empresa').slideDown('fast');
                $('#id-vissao').addClass("is-active");
                $('#missao-empresa').slideUp('fast');
                $('#id-missao').removeClass("is-active");
                this.visao = true
                this.missao = false
            }
        },
        toggleMissao(){
            if(this.missao){
                $('#missao-empresa').slideUp('fast');
                $('#id-missao').removeClass("is-active");
                this.missao = false
            }else{
                $('#missao-empresa').slideDown('fast');
                $('#id-missao').addClass("is-active");
                $('#visao-empresa').slideUp('fast');
                $('#id-vissao').removeClass("is-active");
                this.missao = true
                this.visao = false
            }
        }
    }

}
</script>

<style>

</style>
