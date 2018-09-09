<template>
    <div>
        <!-- <div class="section-boxed bg-secondary s-equal-paddings covered" data-interchange="[img/sections/banner-01.jpg, small]">
            <div class="row align-center">
                <div class="column small-12 large-10">
                    <div>
                        <h2 class="h1 headline light text-center">Catálogo</h2>
                    </div>
                </div>
            </div>
        </div> -->
        <main>
            <!-- ===== FILTER FORM ===== -->
            <div class="section-trapeze primary mt0  ">
                <div class="trapeze">

                    <form class="form-primary row align-center" id="homepage-booking" data-abide novalidate>
                        <div class="column small-10 block-header text-center">
                            <h2 class="h3 headline">Busca</h2>
                        </div>

                        <div class="column small-12 medium-6 large-4">
                            <label>
                                <span class="input-group">
                                    <span class="input-group-label zmdi zmdi-truck fa fa-truck"></span>
                                    <select class="input-group-field placeholder" id="js-form-product-type" name="vehicle-type">
                                        <option disabled selected hidden value="">Tipo de Veículo</option>
                                        <option value="1">Leve</option>
                                        <option value="2">Médio</option>
                                        <option value="3">Pesado</option>
                                        <option value="4">Agrícola</option>
                                        <option value="5">Motocicleta</option>
                                    </select>
                                </span>
                            </label>
                            <label>
                                <span class="input-group">
                                    <span class="input-group-label driveme-mitsubishi fa fa-marker"></span>
                                    <select class="input-group-field placeholder" id="js-form-start-location" name="vehicle-type">
                                        <option disabled selected hidden value="">Montadora</option>
                                        <option value="1">Volkswagen</option>
                                        <option value="2">Chevrolet</option>
                                        <option value="3">Fiat</option>
                                        <option value="4">Ford</option>
                                        <option value="5">Citroen</option>
                                        <option value="6">KIA</option>
                                        <option value="7">Honda</option>
                                        <option value="8">Subaru</option>
                                        <option value="9">Hyundai</option>
                                        <option value="10">Suzuki</option>
                                        <option value="11">Gurgel</option>
                                    </select>
                                </span>
                            </label>
                        </div>
                        <div class="column small-12 medium-6 large-4">
                            <label>
                                <span class="input-group">
                                    <span class="input-group-label zmdi zmdi-car fa fa-truck"></span>
                                    <select class="input-group-field placeholder" id="js-form-product-type" name="vehicle-type">
                                        <option disabled selected hidden value="">Modelo</option>
                                        <option value="1">Leve</option>
                                        <option value="2">Médio</option>
                                        <option value="3">Pesado</option>
                                        <option value="4">Agrícola</option>
                                        <option value="5">Motocicleta</option>
                                    </select>
                                </span>
                            </label>
                            <label>
                                <span class="input-group">
                                    <span class="input-group-label zmdi zmdi-arrows fa fa-marker"></span>
                                    <select class="input-group-field placeholder" id="js-form-start-location" name="vehicle-type">
                                        <option disabled selected hidden value="">Aplicação</option>
                                        <option value="1">Cabine</option>
                                        <option value="2">Carroceria</option>
                                        <option value="3">Câmbio & Transmissão</option>
                                        <option value="4">Direção</option>
                                        <option value="5">Eixos & Longarinas</option>
                                        <option value="6">Elétrica e Eletrônica</option>
                                        <option value="7">Embreagem</option>
                                        <option value="8">Freios</option>
                                        <option value="9">Motor</option>
                                        <option value="10">Quadros & Carenagens</option>
                                        <option value="11">Suspensão</option>
                                    </select>
                                </span>
                            </label>
                        </div>	
                        <div class="column small-12 medium-5 large-8 text-center">
                            <label>
                                    <input class="input-group-field" type="text" placeholder="Busca personalizada...">
                            </label>
                        </div>
                        <div class="column small-12 medium-5 text-center">
                            <button class="button rh-button secondary expanded" type="submit"><i class="zmdi zmdi-search fa fa-search"></i>
                                <span>Filtrar</span>
                            </button>
                        </div>
                    </form>

                </div><!-- /end .trapeze -->
            </div><!-- /end .section-trapeze -->

            <div class="section">
                <div class="row small-up-1 medium-up-2 large-up-3">
                    <div class="column column-block">

                        <section class="card card-product simple bg-secondary block-shadow">
                            <header class="card-divider">
                                <h3 class="h4 headline">Caixa de Direção</h3>
                                <ul class="rating">
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star gray-shade-color"></i></li>
                                </ul>
                            </header>
                            <img src="/static/fleet/card-product-14.jpg" alt="">
                            <div class="card-section flex-container align-middle align-justify">
                                <div class="price mb0">
                                    <sup>R$</sup>
                                    <span class="price-val">99</span><sup>,90</sup>
                                </div>
                                <a class="button rh-button flip-y right-vb small mb0" href="fleet-detalhes-right-sidebar.html">
                                    <i class="zmdi zmdi-link fa fa-link"></i>
                                    <span>detalhes</span>
                                </a>
                            </div>
                            <footer class="card-section features flex-container align-middle align-spaced">
                                <div><i class="rh rh-money-gear rh-fw"></i></div>
                                <div><i class="rh rh-highway rh-fw"></i></div>
                                <div><i class="rh rh-gps rh-fw"></i></div>
                                <div><i class="rh rh-steering rh-fw"></i></div>
                                <div><i class="rh rh-gearbox rh-fw"></i></div>
                            </footer>
                        </section>

                    </div><!-- /end .column -->
                    <div class="column column-block">

                        <section class="card card-product simple bg-secondary block-shadow">
                            <header class="card-divider">
                                <h3 class="h4 headline">Caixa de Direção</h3>
                                <ul class="rating">
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star gray-shade-color"></i></li>
                                </ul>
                            </header>
                            <img src="/static/fleet/card-product-14.jpg" alt="">
                            <div class="card-section flex-container align-middle align-justify">
                                <div class="price mb0">
                                    <sup>R$</sup>
                                    <span class="price-val">99</span><sup>,90</sup>
                                </div>
                                <a class="button rh-button flip-y right-vb small mb0" href="fleet-detalhes-right-sidebar.html">
                                    <i class="zmdi zmdi-link fa fa-link"></i>
                                    <span>detalhes</span>
                                </a>
                            </div>
                            <footer class="card-section features flex-container align-middle align-spaced">
                                <div><i class="rh rh-money-gear rh-fw"></i></div>
                                <div><i class="rh rh-highway rh-fw"></i></div>
                                <div><i class="rh rh-gps rh-fw"></i></div>
                                <div><i class="rh rh-steering rh-fw"></i></div>
                                <div><i class="rh rh-gearbox rh-fw"></i></div>
                            </footer>
                        </section>

                    </div><!-- /end .column -->
                    <div class="column column-block">

                        <section class="card card-product simple bg-secondary block-shadow">
                            <header class="card-divider">
                                <h3 class="h4 headline">Caixa de Direção</h3>
                                <ul class="rating">
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star gray-shade-color"></i></li>
                                </ul>
                            </header>
                            <img src="/static/fleet/card-product-14.jpg" alt="">
                            <div class="card-section flex-container align-middle align-justify">
                                <div class="price mb0">
                                    <sup>R$</sup>
                                    <span class="price-val">99</span><sup>,90</sup>
                                </div>
                                <a class="button rh-button flip-y right-vb small mb0" href="fleet-detalhes-right-sidebar.html">
                                    <i class="zmdi zmdi-link fa fa-link"></i>
                                    <span>detalhes</span>
                                </a>
                            </div>
                            <footer class="card-section features flex-container align-middle align-spaced">
                                <div><i class="rh rh-money-gear rh-fw"></i></div>
                                <div><i class="rh rh-highway rh-fw"></i></div>
                                <div><i class="rh rh-gps rh-fw"></i></div>
                                <div><i class="rh rh-steering rh-fw"></i></div>
                                <div><i class="rh rh-gearbox rh-fw"></i></div>
                            </footer>
                        </section>

                    </div><!-- /end .column -->
                    <div class="column column-block">

                        <section class="card card-product simple bg-secondary block-shadow">
                            <header class="card-divider">
                                <h3 class="h4 headline">Caixa de Direção</h3>
                                <ul class="rating">
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star gray-shade-color"></i></li>
                                </ul>
                            </header>
                            <img src="/static/fleet/card-product-14.jpg" alt="">
                            <div class="card-section flex-container align-middle align-justify">
                                <div class="price mb0">
                                    <sup>R$</sup>
                                    <span class="price-val">99</span><sup>,90</sup>
                                </div>
                                <a class="button rh-button flip-y right-vb small mb0" href="fleet-detalhes-right-sidebar.html">
                                    <i class="zmdi zmdi-link fa fa-link"></i>
                                    <span>detalhes</span>
                                </a>
                            </div>
                            <footer class="card-section features flex-container align-middle align-spaced">
                                <div><i class="rh rh-money-gear rh-fw"></i></div>
                                <div><i class="rh rh-highway rh-fw"></i></div>
                                <div><i class="rh rh-gps rh-fw"></i></div>
                                <div><i class="rh rh-steering rh-fw"></i></div>
                                <div><i class="rh rh-gearbox rh-fw"></i></div>
                            </footer>
                        </section>

                    </div><!-- /end .column -->
                    <div class="column column-block">

                        <section class="card card-product simple bg-secondary block-shadow">
                            <header class="card-divider">
                                <h3 class="h4 headline">Caixa de Direção</h3>
                                <ul class="rating">
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star gray-shade-color"></i></li>
                                </ul>
                            </header>
                            <img src="/static/fleet/card-product-14.jpg" alt="">
                            <div class="card-section flex-container align-middle align-justify">
                                <div class="price mb0">
                                    <sup>R$</sup>
                                    <span class="price-val">99</span><sup>,90</sup>
                                </div>
                                <a class="button rh-button flip-y right-vb small mb0" href="fleet-detalhes-right-sidebar.html">
                                    <i class="zmdi zmdi-link fa fa-link"></i>
                                    <span>detalhes</span>
                                </a>
                            </div>
                            <footer class="card-section features flex-container align-middle align-spaced">
                                <div><i class="rh rh-money-gear rh-fw"></i></div>
                                <div><i class="rh rh-highway rh-fw"></i></div>
                                <div><i class="rh rh-gps rh-fw"></i></div>
                                <div><i class="rh rh-steering rh-fw"></i></div>
                                <div><i class="rh rh-gearbox rh-fw"></i></div>
                            </footer>
                        </section>

                    </div><!-- /end .column -->
                    <div class="column column-block">

                        <section class="card card-product simple bg-secondary block-shadow">
                            <header class="card-divider">
                                <h3 class="h4 headline">Caixa de Direção</h3>
                                <ul class="rating">
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star gray-shade-color"></i></li>
                                </ul>
                            </header>
                            <img src="/static/fleet/card-product-14.jpg" alt="">
                            <div class="card-section flex-container align-middle align-justify">
                                <div class="price mb0">
                                    <sup>R$</sup>
                                    <span class="price-val">99</span><sup>,90</sup>
                                </div>
                                <a class="button rh-button flip-y right-vb small mb0" href="fleet-detalhes-right-sidebar.html">
                                    <i class="zmdi zmdi-link fa fa-link"></i>
                                    <span>detalhes</span>
                                </a>
                            </div>
                            <footer class="card-section features flex-container align-middle align-spaced">
                                <div><i class="rh rh-money-gear rh-fw"></i></div>
                                <div><i class="rh rh-highway rh-fw"></i></div>
                                <div><i class="rh rh-gps rh-fw"></i></div>
                                <div><i class="rh rh-steering rh-fw"></i></div>
                                <div><i class="rh rh-gearbox rh-fw"></i></div>
                            </footer>
                        </section>

                    </div><!-- /end .column -->
                    <div class="column column-block">

                        <section class="card card-product simple bg-secondary block-shadow">
                            <header class="card-divider">
                                <h3 class="h4 headline">Caixa de Direção</h3>
                                <ul class="rating">
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star gray-shade-color"></i></li>
                                </ul>
                            </header>
                            <img src="/static/fleet/card-product-14.jpg" alt="">
                            <div class="card-section flex-container align-middle align-justify">
                                <div class="price mb0">
                                    <sup>R$</sup>
                                    <span class="price-val">99</span><sup>,90</sup>
                                </div>
                                <a class="button rh-button flip-y right-vb small mb0" href="fleet-detalhes-right-sidebar.html">
                                    <i class="zmdi zmdi-link fa fa-link"></i>
                                    <span>detalhes</span>
                                </a>
                            </div>
                            <footer class="card-section features flex-container align-middle align-spaced">
                                <div><i class="rh rh-money-gear rh-fw"></i></div>
                                <div><i class="rh rh-highway rh-fw"></i></div>
                                <div><i class="rh rh-gps rh-fw"></i></div>
                                <div><i class="rh rh-steering rh-fw"></i></div>
                                <div><i class="rh rh-gearbox rh-fw"></i></div>
                            </footer>
                        </section>

                    </div><!-- /end .column -->
                    <div class="column column-block">

                        <section class="card card-product simple bg-secondary block-shadow">
                            <header class="card-divider">
                                <h3 class="h4 headline">Caixa de Direção</h3>
                                <ul class="rating">
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star gray-shade-color"></i></li>
                                </ul>
                            </header>
                            <img src="/static/fleet/card-product-14.jpg" alt="">
                            <div class="card-section flex-container align-middle align-justify">
                                <div class="price mb0">
                                    <sup>R$</sup>
                                    <span class="price-val">99</span><sup>,90</sup>
                                </div>
                                <a class="button rh-button flip-y right-vb small mb0" href="fleet-detalhes-right-sidebar.html">
                                    <i class="zmdi zmdi-link fa fa-link"></i>
                                    <span>detalhes</span>
                                </a>
                            </div>
                            <footer class="card-section features flex-container align-middle align-spaced">
                                <div><i class="rh rh-money-gear rh-fw"></i></div>
                                <div><i class="rh rh-highway rh-fw"></i></div>
                                <div><i class="rh rh-gps rh-fw"></i></div>
                                <div><i class="rh rh-steering rh-fw"></i></div>
                                <div><i class="rh rh-gearbox rh-fw"></i></div>
                            </footer>
                        </section>

                    </div><!-- /end .column -->
                    <div class="column column-block">

                        <section class="card card-product simple bg-secondary block-shadow">
                            <header class="card-divider">
                                <h3 class="h4 headline">Caixa de Direção</h3>
                                <ul class="rating">
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star gray-shade-color"></i></li>
                                </ul>
                            </header>
                            <img src="/static/fleet/card-product-14.jpg" alt="">
                            <div class="card-section flex-container align-middle align-justify">
                                <div class="price mb0">
                                    <sup>R$</sup>
                                    <span class="price-val">99</span><sup>,90</sup>
                                </div>
                                <a class="button rh-button flip-y right-vb small mb0" href="fleet-detalhes-right-sidebar.html">
                                    <i class="zmdi zmdi-link fa fa-link"></i>
                                    <span>detalhes</span>
                                </a>
                            </div>
                            <footer class="card-section features flex-container align-middle align-spaced">
                                <div><i class="rh rh-money-gear rh-fw"></i></div>
                                <div><i class="rh rh-highway rh-fw"></i></div>
                                <div><i class="rh rh-gps rh-fw"></i></div>
                                <div><i class="rh rh-steering rh-fw"></i></div>
                                <div><i class="rh rh-gearbox rh-fw"></i></div>
                            </footer>
                        </section>

                    </div><!-- /end .column -->
                    <div class="column column-block">

                        <section class="card card-product simple bg-secondary block-shadow">
                            <header class="card-divider">
                                <h3 class="h4 headline">Caixa de Direção</h3>
                                <ul class="rating">
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star gray-shade-color"></i></li>
                                </ul>
                            </header>
                            <img src="/static/fleet/card-product-14.jpg" alt="">
                            <div class="card-section flex-container align-middle align-justify">
                                <div class="price mb0">
                                    <sup>R$</sup>
                                    <span class="price-val">99</span><sup>,90</sup>
                                </div>
                                <a class="button rh-button flip-y right-vb small mb0" href="fleet-detalhes-right-sidebar.html">
                                    <i class="zmdi zmdi-link fa fa-link"></i>
                                    <span>detalhes</span>
                                </a>
                            </div>
                            <footer class="card-section features flex-container align-middle align-spaced">
                                <div><i class="rh rh-money-gear rh-fw"></i></div>
                                <div><i class="rh rh-highway rh-fw"></i></div>
                                <div><i class="rh rh-gps rh-fw"></i></div>
                                <div><i class="rh rh-steering rh-fw"></i></div>
                                <div><i class="rh rh-gearbox rh-fw"></i></div>
                            </footer>
                        </section>

                    </div><!-- /end .column -->
                    <div class="column column-block">

                        <section class="card card-product simple bg-secondary block-shadow">
                            <header class="card-divider">
                                <h3 class="h4 headline">Caixa de Direção</h3>
                                <ul class="rating">
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star gray-shade-color"></i></li>
                                </ul>
                            </header>
                            <img src="/static/fleet/card-product-14.jpg" alt="">
                            <div class="card-section flex-container align-middle align-justify">
                                <div class="price mb0">
                                    <sup>R$</sup>
                                    <span class="price-val">99</span><sup>,90</sup>
                                </div>
                                <a class="button rh-button flip-y right-vb small mb0" href="fleet-detalhes-right-sidebar.html">
                                    <i class="zmdi zmdi-link fa fa-link"></i>
                                    <span>detalhes</span>
                                </a>
                            </div>
                            <footer class="card-section features flex-container align-middle align-spaced">
                                <div><i class="rh rh-money-gear rh-fw"></i></div>
                                <div><i class="rh rh-highway rh-fw"></i></div>
                                <div><i class="rh rh-gps rh-fw"></i></div>
                                <div><i class="rh rh-steering rh-fw"></i></div>
                                <div><i class="rh rh-gearbox rh-fw"></i></div>
                            </footer>
                        </section>

                    </div><!-- /end .column -->
                    <div class="column column-block">

                        <section class="card card-product simple bg-secondary block-shadow">
                            <header class="card-divider">
                                <h3 class="h4 headline">Caixa de Direção</h3>
                                <ul class="rating">
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star primary-color"></i></li>
                                    <li><i class="zmdi zmdi-star fa fa-star gray-shade-color"></i></li>
                                </ul>
                            </header>
                            <img src="/static/fleet/card-product-14.jpg" alt="">
                            <div class="card-section flex-container align-middle align-justify">
                                <div class="price mb0">
                                    <sup>R$</sup>
                                    <span class="price-val">99</span><sup>,90</sup>
                                </div>
                                <a class="button rh-button flip-y right-vb small mb0" href="fleet-detalhes-right-sidebar.html">
                                    <i class="zmdi zmdi-link fa fa-link"></i>
                                    <span>detalhes</span>
                                </a>
                            </div>
                            <footer class="card-section features flex-container align-middle align-spaced">
                                <div><i class="rh rh-money-gear rh-fw"></i></div>
                                <div><i class="rh rh-highway rh-fw"></i></div>
                                <div><i class="rh rh-gps rh-fw"></i></div>
                                <div><i class="rh rh-steering rh-fw"></i></div>
                                <div><i class="rh rh-gearbox rh-fw"></i></div>
                            </footer>
                        </section>

                    </div><!-- /end .column -->
                </div><!-- /end .row -->

                <!-- ===== PAGINAÇÃO ===== -->

                <div class="row">
                    <div class="column small-12">
                        <ul class="pagination text-center" aria-label="Pagination">
                            <li class="pagination-previous disabled">Anterior<span class="show-for-sr">Página</span></li>
                            <li class="current"><span class="show-for-sr">Você está na página</span>1</li>
                            <li><a href="#" aria-label="Page 2">2</a></li>
                            <li><a href="#" aria-label="Page 3">3</a></li>
                            <li><a href="#" aria-label="Page 4">4</a></li>
                            <li class="ellipsis" aria-hidden="true"></li>
                            <li><a href="#" aria-label="Page 12">12</a></li>
                            <li><a href="#" aria-label="Page 13">13</a></li>
                            <li class="pagination-next"><a href="#" aria-label="Next page">Próxima<span class="show-for-sr">página</span></a></li>
                        </ul>
                    </div>
                </div>
            </div><!-- /end .section -->
        </main>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>

</style>
