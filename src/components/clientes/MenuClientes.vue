<template>
    <section class="section">

        <header class="s-header row align-center">
            <div class="column small-12 medium-8 large-5">
                <h2 class="s-headline">ÁREA DO CLIENTE<span class="s-headline-decor"></span></h2>
            </div>
        </header>

        <div class="s-trapeze-2x">
            <!-- s-trapeze-2x-images (left & right trapezes)-->
            <div class="s-trapeze-2x-image" data-interchange="[img/sections/s-trapeze-2x-bg.jpg, large]"></div>
            <div class="s-trapeze-2x-image" data-interchange="[img/sections/s-trapeze-2x-bg.jpg, large]"></div>

            <div class="row small-up-1 medium-up-2 large-up-3 owl-carousel" data-carousel="medium-down" data-owl-options='{"smartSpeed": "500","dotsClass": "rh-owl-dots dots-dark"}'>

                <div class="column" style="margin-bottom: 20px;">
                    <!-- Pedidos -->
                    <article class="card card-post-icon block-shadow cardCliente" @click="showModalPedidos()">
                        <div class="card-media"><img class="grayscale" src="static/cards/card-13.jpg" alt=""></div>

                        <div class="card-divider bg-primary">
                            <div class="icon-box circle secondary border large"><i class="rh rh-route"></i></div>
                            <h3 class="h4" data-equalizer-watch="data-equalizer-watch">Meus Pedidos</h3>
                        </div>

                        <div class="card-section">
                            <p>Verifique seu histórico de pedidos.
                            </p>
                        </div>
                    </article><!-- /end .card-post-icon-->
                </div>

                <div class="column">
                    <!-- Carrinho -->
                    <article class="card card-post-icon block-shadow cardCliente" @click="showModalCarrinho()">
                        <div class="card-media"><img class="grayscale" src="static/cards/card-14.jpg" alt=""></div>

                        <div class="card-divider bg-primary">
                            <div class="icon-box circle secondary border large"><i class="rh rh-price"></i></div>
                            <h3 class="h4" data-equalizer-watch="data-equalizer-watch">Carrinho</h3>
                        </div>

                        <div class="card-section">
                            <p>Visualize o carrinho de compras do pedido atual.
                            </p>
                        </div>
                    </article><!-- /end .card-post-icon-->
                </div>

                <div class="column">
                    <!-- Wishlist -->
                    <article class="card card-post-icon block-shadow cardCliente" @click="showModalWishlist()">
                        <div class="card-media"><img class="grayscale" src="static/cards/card-15.jpg" alt=""></div>

                        <div class="card-divider bg-primary">
                            <div class="icon-box circle secondary border large"><i class="rh rh-wish"></i></div>
                            <h3 class="h4" data-equalizer-watch="data-equalizer-watch">Lista de Desejos</h3>
                        </div>

                        <div class="card-section">
                            <p>Veja os produtos adicionados na lista de desejos.
                            </p>
                        </div>
                    </article><!-- /end .card-post-icon-->
                </div>
            </div><!-- /end .row -->
        </div><!-- /end .s-trapeze-2x -->
        <!-- INÍCIO - MODAL PEDIDOS -->
        <modal name="modal-pedidos" id="modal-pedidos" :height="'auto'" :width="'1200px'" :scrollable="true">
            <div class="js-tabs-container">
                <button class="close-button" data-close aria-label="Close modal" @click="hideModalPedidos()"><span></span></button>
                <div class="block-header border align-center">
					<hr class="dotted">
					<h4 class="h2">Pedidos</h4>
					<hr class="dotted">
				</div>
                <div class="column small-12 large-12">
                    <div class="el-wrap">
                        <div class="alert callout callout-hide" data-abide-error v-if="pedidosFinalizados.length == 0">
                            <p style="text-align: center;"><i class="fi-alert"></i> Você ainda não realizou nenhuma compra</p>
                        </div>
                        <table class="stack" v-else>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Quantia de Itens</th>
                                    <th>Valor</th>
                                    <th>Data</th>
                                    <th>Visualizar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(pedido, index) in pedidosFinalizados" :key="pedido.pediId">
                                    <td>{{pedido.pediId}}</td>
                                    <td>{{pedido.pecaPedidos.length}}</td>
                                    <td>R${{pedido.pediTotal}}</td>
                                    <td>{{moment.unix(pedido.pediData/1000).format("DD/MM/YYYY")}}</td>
                                    <td><div class="column" style="width: 50px; cursor: pointer;" @click="showModalPedidosFinalizados(index)"><i class="zmdi zmdi-assignment zmdi-hc-fw"></i></div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button class="button expanded" type="button" data-close @click="hideModalPedidos()">Fechar</button>
                </div>
            </div>
        </modal>
        <!-- FIM - MODAL PEDIDOS -->
        <!-- INÍCIO - MODAL PEDIDOS FINALIZADOS -->
        <modal name="modal-pedidos-finalizados" id="modal-pedidos-finalizados" :height="'auto'" :width="'1200px'" :scrollable="true">
            <div class="js-tabs-container">
                <button class="close-button" data-close aria-label="Close modal" @click="hideModalPedidosFinalizados()"><span></span></button>
                <div class="block-header border align-center" v-if="pedidosFinalizados.length != 0">
					<hr class="dotted">
					<h4 class="h2">Pedido #{{pedidosFinalizados[indexPedido].pediId}}</h4>
					<hr class="dotted">
				</div>
                <div class="column small-12 large-12" v-if="pedidosFinalizados.length != 0">
                    <div class="el-wrap">
                        <table class="stack">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Descrição</th>
                                    <th>Valor Unitário</th>
                                    <th>Quantidade</th>
                                    <th>Valor Total</th>
                                    <th>Visualizar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(peca, index) in pecasPedidosFinalizados[indexPedido]" :key="peca.pecaId">
                                    <td>{{peca.pecaId}}</td>
                                    <td>{{peca.pecaNome}}</td>
                                    <td>R${{peca.pecaValor}}</td>
                                    <td>{{pedidosFinalizados[indexPedido].pecaPedidos[index].pepeQuantidade}}</td>
                                    <td>R${{(pedidosFinalizados[indexPedido].pecaPedidos[index].pepeQuantidade * peca.pecaValor)}}</td>
                                    <td><div class="column" style="width: 50px; cursor: pointer;" @click="visualizarPeca(peca)"><i class="zmdi zmdi-assignment zmdi-hc-fw"></i></div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr class="dotted">
                    <h3 style="text-align: right;" v-if="pedidosFinalizados.length == 0" >R${{valorTotalFinalizados}}</h3>
                    <hr class="dotted">
                    <button class="button expanded" type="button" data-close @click="hideModalPedidosFinalizados()">Fechar</button>
                </div>
            </div>
        </modal>
        <!-- FIM - MODAL PEDIDOS FINALIZADOS -->
        <!-- INÍCIO - MODAL CARRINHO -->
        <modal name="modal-carrinho" id="modal-carrinho" :height="'auto'" :width="'1200px'" :scrollable="true">
            <div class="js-tabs-container">
                <button class="close-button" data-close aria-label="Close modal" @click="hideModalCarrinho()"><span></span></button>
                <div class="block-header border align-center">
                    <hr class="dotted">
                    <h4 class="h2">Carrinho</h4>
                    <hr class="dotted">
                </div>
                <div class="column small-12 large-12">
                    <div class="el-wrap">
                        <div class="alert callout callout-hide" data-abide-error v-if="!pedido.pediId">
                            <p style="text-align: center;"><i class="fi-alert"></i> Você ainda não adicionou nenhum item ao carrinho.</p>
                        </div>
                        <table class="stack" v-else>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Descrição</th>
                                    <th>Valor Unitário</th>
                                    <th>Quantidade</th>
                                    <th>Valor Total</th>
                                    <th>Deletar</th>
                                    <th>Visualizar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(peca, index) in pecasPedido" :key="peca.pecaId">
                                    <td>{{index + 1}}</td>
                                    <td>{{peca.pecaNome}}</td>
                                    <td>R${{peca.pecaValor}}</td>
                                    <td>{{pedido.pecaPedidos[index].pepeQuantidade}}</td>
                                    <td>R${{(pedido.pecaPedidos[index].pepeQuantidade * peca.pecaValor)}}</td>
                                    <td><div class="column" style="width: 50px; cursor: pointer;" @click="removerPeca(index)"><i class="zmdi zmdi-close zmdi-hc-fw"></i></div></td>
                                    <td><div class="column" style="width: 50px; cursor: pointer;" @click="visualizarPeca(peca)"><i class="zmdi zmdi-assignment zmdi-hc-fw"></i></div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr class="dotted">
                    <h3 style="text-align: right;" v-if="pedido.pediId">R${{valorTotal}}</h3>
                    <hr class="dotted">
                    <button class="button success expanded" type="button" @click="finalizarCompra()" v-if="pedido.pediId">Comprar</button>			
                    <button class="button expanded" type="button" data-close @click="hideModalCarrinho()">Fechar</button>
                </div>
            </div>
        </modal>
        <!-- FIM - MODAL PEDIDOS -->
        <!-- INÍCIO - MODAL WISHLIST -->
        <modal name="modal-wishlist" id="modal-wishlist" :height="'auto'" :width="'1200px'" v-if="montar" >
            <div class="js-tabs-container">
                <button class="close-button" data-close aria-label="Close modal" @click="hideModalWishlist()"><span></span></button>
                <div class="block-header border align-center">
                    <hr class="dotted">
                    <h4 class="h2">LISTA DE DESEJOS</h4>
                    <hr class="dotted">
                </div>
                <div class="column small-12 large-12">
                    <div class="el-wrap">
                        <div class="alert callout callout-hide" data-abide-error v-if="!wishlist.length">
                            <p style="text-align: center;"><i class="fi-alert"></i> Você ainda não adicionou nenhum item à lista de desejos.</p>
                        </div>
                        <table class="stack" v-else>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Descrição</th>
                                    <th>Valor Unitário</th>
                                    <th style="width: 150px;">Deletar</th>
                                    <th style="width: 150px;">Visualizar</th>
                                    <th style="width: 150px;">Adicionar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(wish, index) of wishlist" :key="JSON.stringify(wish)">
                                    <td>{{wish.peca.pecaId}}</td>
                                    <td>{{wish.peca.pecaNome}}</td>
                                    <td>{{wish.peca.pecaValor}}</td>
                                    <td><div class="column" style="cursor: pointer;" @click="removerPecaWishlist(index)"><i class="zmdi zmdi-close zmdi-hc-fw"></i></div></td>
                                    <td><div class="column" style="cursor: pointer;" @click="visualizarPeca(wish.peca)"><i class="zmdi zmdi-assignment zmdi-hc-fw"></i></div></td>
                                    <td><div class="column" style="cursor: pointer;" @click="adicionarAoCarrinho(wish.peca, index)"><i class="zmdi zmdi-shopping-cart-plus"></i></div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr class="dotted">
                    <h3 style="text-align: right;" v-if="wishlist.length">R${{valorTotalWishlist}}</h3>
                    <hr class="dotted">
                    <button class="button expanded" type="button" data-close @click="hideModalWishlist()">Fechar</button>
                </div>
            </div>
        </modal>
        <!-- FIM - MODAL WISHLIST -->
    </section><!-- /end .section -->
</template>

<script>
import Pedido from '../../domain/models/Pedido.js'
import PedidoService from '../../domain/services/PedidoService.js'
import WishlistService from '../../domain/services/WishlistService.js';
var moment = require('moment');

export default {

    data(){
        return{
            moment: moment,
            pedido: new Pedido(),
            pecasPedido: [],
            pedidosFinalizados: [],
            pecasPedidosFinalizados: [],
            montar: false,
            indexPedido: 0,
            wishlist: []
        }
    },
    computed:{
        valorTotal(){
            var total = 0;
            for(var i = 0; i < this.pedido.pecaPedidos.length; i++){
                total += this.pedido.pecaPedidos[i].pepeSubtotal;
            }
            var index = total.toString().indexOf('.');
            total = total.toString()
            var valor = '';
            if(index == -1){
                valor = total;
                return valor + ".00"
            }else{
                var tamanho = total.length
                var centavos = total.substring(index + 1);
                var principal = total.substring(0, index);
                valor = principal + "."
                if(centavos.length == 1) {
                    valor = valor.concat(centavos.concat("0"));
                }else {
                    valor = valor.concat(total.substring(tamanho - 2));
                }
                return valor;
            }
        },
        valorTotalFinalizados(){
            var total = 0;
            for(var i = 0; i < this.pedidosFinalizados[this.indexPedido].pecaPedidos.length; i++){
                total += (this.pedidosFinalizados[this.indexPedido].pecaPedidos[i].pepeQuantidade * this.pecasPedidosFinalizados[this.indexPedido][i].pecaValor);
            }
            var index = total.toString().indexOf('.');
            total = total.toString()
            var valor = '';
            if(index == -1){
                valor = total;
                return valor + ".00"
            }else{
                var tamanho = total.length
                var centavos = total.substring(index + 1);
                var principal = total.substring(0, index);
                valor = principal + "."
                if(centavos.length == 1) {
                    valor = valor.concat(centavos.concat("0"));
                }else {
                    valor = valor.concat(total.substring(tamanho - 2));
                }
                return valor;
            }
        },
        valorTotalWishlist(){
            var total = 0;
            for(var i = 0; i < this.wishlist.length; i++){
                total += this.wishlist[i].peca.pecaValor;
            }
            var index = total.toString().indexOf('.');
            total = total.toString()
            var valor = '';
            if(index == -1){
                valor = total;
                return valor + ".00"
            }else{
                var tamanho = total.length
                var centavos = total.substring(index + 1);
                var principal = total.substring(0, index);
                valor = principal + "."
                if(centavos.length == 1) {
                    valor = valor.concat(centavos.concat("0"));
                }else {
                    valor = valor.concat(total.substring(tamanho - 2));
                }
                return valor;
            }
        }
    },
    beforeCreate(){
        this.service = new PedidoService(this.$resource);
        this.service
            .findByUsuarioId(this.$usuario.usuaId, this.$resource)
            .then(resposta => {
                 console.log(resposta)
                this.montar = true;
                this.pedido = resposta.body.pedido
                this.pecasPedido = resposta.body.pecas
            }).catch( erro => {
                console.log(erro)
            })
        this.service
            .findFinalizadosByUsuarioId(this.$usuario.usuaId , this.$resource)
            .then(resposta => {
                console.log(resposta)
                this.pecasPedidosFinalizados = resposta.body.pecas
                this.pedidosFinalizados = resposta.body.pedidos
            }).catch( erro => {
                console.log(erro)
            })
        this.service = new WishlistService(this.$resource)
        this.service
            .listByUsuarioId(this.$usuario.usuaId)
            .then(resposta => {
                console.log(resposta)
                this.wishlist = resposta.body.wishlist
            }).catch( erro => {
                console.log(erro)
            })
    },
    methods:{
        removerPeca(index){
            this.service = new PedidoService(this.$resource);
            this.service
                .removePeca(this.pedido, this.pedido.pecaPedidos[index].pepeId, this.$resource)
                .then(resposta => {
                    this.pedido.pecaPedidos.splice(index, 1);
                    this.pecasPedido.splice(index, 1);
                }).catch( erro => {
                    console.log(erro)
                })
        },
        removerPecaWishlist(index){
            this.service = new WishlistService(this.$resource);
            this.service
                .removePeca(this.wishlist[index], this.$resource)
                .then(resposta => {
                    console.log(resposta)
                    this.wishlist.splice(index, 1);
                }).catch( erro => {
                    console.log(erro)
                })
        },
        visualizarPeca(peca){
            console.log(peca)
            this.$router.push({
                name: '',
                path: '/peca/' + peca.pecaId,
                params: {
                    id: peca.pecaId
                }
            })
        },
        finalizarCompra(){
            this.service = new PedidoService(this.$resource);
            this.service
                .finalizarPedido(this.pedido, this.$resource)
                .then(resposta => {
                    this.pedido = new Pedido()
                    this.pecasPedido = []
                }).catch( erro => {
                    console.log(erro)
                })
            this.pedidosFinalizados.push(this.pedido)
            this.pecasPedidosFinalizados.push(this.pecasPedido)
            this.pedido = new Pedido()
            this.pecasPedido = []
        },
        adicionarAoCarrinho(peca, index){
            this.service = new PedidoService(this.$resource);
            this.service
                .addPeca(peca, this.$usuario.usuaId, this.$resource)
                .then(resposta => {
                    this.service = new PedidoService(this.$resource);
                    this.service
                        .findByUsuarioId(this.$usuario.usuaId, this.$resource)
                        .then(resposta => {
                            this.pedido = resposta.body.pedido
                            this.pecasPedido = resposta.body.pecas
                            this.wishlist.splice(index, 1);
                        }).catch( erro => {
                            console.log(erro)
                        })
                    this.service = new WishlistService(this.$resource);
                    this.service
                        .removePeca(this.wishlist[index], this.$resource)
                        .then(resposta => {
                            console.log(resposta)
                            this.wishlist.splice(index, 1);
                        }).catch( erro => {
                            console.log(erro)
                        })
                }).catch( erro => {
                    console.log(erro)
                })
        },
        showModalPedidos(){
            this.$modal.show('modal-pedidos');
        },
        hideModalPedidos(){
            this.$modal.hide('modal-pedidos');
        },
        showModalPedidosFinalizados(index){
            this.indexPedido = index
            this.$modal.show('modal-pedidos-finalizados');
        },
        hideModalPedidosFinalizados(){
            this.indexPedido = 0
            this.$modal.hide('modal-pedidos-finalizados');
        },
        showModalCarrinho(){
            this.$modal.show('modal-carrinho');
        },
        hideModalCarrinho(){
            this.$modal.hide('modal-carrinho');
        },
        showModalWishlist(){
            this.$modal.show('modal-wishlist');
        },
        hideModalWishlist(){
            this.$modal.hide('modal-wishlist');
        }
    }

}
</script>

<style>
.cardCliente{
    min-height: 0px !important;
}
.v--modal{
    margin-bottom: 20px !important;
    margin-top: 20px !important;
}
</style>
