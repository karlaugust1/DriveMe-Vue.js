<template>
    <div class="s-trapeze-edges bg-secondary s-welcome">
        <div class="s-trapeze-edges-inner">

            <div class="trapeze bg-primary overlap-small">
                <form class="form-primary" id="homepage-booking" data-abide novalidate>
                    <div class="block-header">
                        <h2 class="h3 headline">Encontre as peças certas!</h2>
                    </div>
                    <div class="row align-center">
                        <div class="column small-12 medium-6 large-4">
                            <label>
                                <span class="input-group">
                                    <span class="input-group-label zmdi zmdi-truck fa fa-truck"></span>
                                    <select class="input-group-field placeholder" id="js-form-select" name="vehicle-type" required>
                                        <option disabled selected hidden value="">Tipo de Veículo</option>
                                        <option value="1">Leve</option>
                                        <option value="2">Médio</option>
                                        <option value="3">Pesado</option>
                                        <option value="4">Agrícola</option>
                                        <option value="5">Motocicleta</option>
                                    </select>
                                </span>
                            </label>
                            <button class="button rh-button secondary shadow" type="submit">
                                <i class="zmdi zmdi-mail-send"></i>
                                <span>Ver peças</span>
                            </button>
                        </div>
                    </div>
                </form><!-- /end .homepage-booking -->
            </div><!-- /end .trapeze -->


            <!-- Section "WELCOME" -->
            <div class="row">

                <div class="column small-12 medium-5 large-7 s-welcome-image">
                    <figure>
                        <img src="/static/welcome-image%40large.png" data-interchange="[/static/welcome-image@large.png, small], [/static/welcome-image@large.png, medium], [/static/welcome-image@large.png, large]" alt="">
                    </figure>
                </div><!-- /end .column-->

                <div class="column small-12 medium-7 large-5">
                    <article class="s-welcome-content s-line-secondary">

                        <header class="s-header">
                            <h2 class="s-headline"> Bem-vindo!<span class="s-headline-decor"></span></h2>
                        </header>

                        <p class="gray-color">Consolidada como uma das maiores lojas de autopeças da América-Latina, a ABC Autopeças agora traz seu atendimento de forma conveniente à você, consumidor. Potencializada pelo incrível sistema V-Set DriveMe, agora permite que você faça suas compras de dentro do seu lar, sem enfrentar filas e, o melhor de tudo, com a mesma qualidade de atendimento que já é tradição em nossa loja.</p>
                        <p class="gray-color">Inicie sua experiência de compra online agora mesmo, utilizando de nossos convenientes filtros e categorias focados em lhe trazer o melhor com praticidade!</p>
                    </article>
                </div><!-- /end .column-->
            </div><!-- /end .row -->

        </div><!-- /end .s-trapeze-edges-inner -->
    </div><!-- /end .s-trapeze-edges -->
</template>

<script>
export default {
    
}
</script>

<style>

</style>
