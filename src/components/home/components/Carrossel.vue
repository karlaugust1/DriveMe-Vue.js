<template>
    <div class="section-hero full-height hero-carousel">
        <div class="owl-carousel" data-owl-carousel data-button-type="arrows" data-content-animation="true" data-owl-options='{"autoHeight": "true","dotsContainer": "#hero-carousel-dots .owl-dots", "autoplay": false, "animateOut": "fadeOut", "dotsClass": "hero-owl-dots", "responsive": {"760": {"nav": "true"}}}'>
            <div class="h-carousel-item has-overlay" data-interchange="[/static/hero/car-1.jpg, small], [/static/hero/car-1.jpg, medium], [/static/hero/car-1.jpg, large]">
                <div class="row align-right align-middle">
                    <div class="column small-12 medium-8 large-6 hinge-in-from-middle-x js-animate-container hero-content">

                        <h1 class="js-animate-1 hinge-in-from-middle-y"><span class="mark ">Loja ABC</span></h1>
                        <h3 class="js-animate-1 hinge-in-from-middle-y">As peças certas para seu veículo</h3>

                        <div class="button-group stacked-for-small">
                            <a class="button rh-button slide-in-down js-animate-3" href="#"><i class="zmdi zmdi-assignment-check"></i>
                                <span>Ver catálogo</span>
                            </a>
                            <a class="button rh-button secondary-white flip-y icon-left slide-in-up js-animate-3" href="#"><i class="zmdi zmdi-info fa fa-info-circle"></i>
                                <span>Sobre a empresa</span>
                            </a>
                        </div>

                    </div><!-- /end .column -->
                </div><!-- /end .row -->
            </div><!-- /end .h-carousel-item -->
        </div>
        <div id="hero-carousel-dots">
            <div class="owl-dots"></div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.zindex{
    z-index: 100 !important;
}
</style>
