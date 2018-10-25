import Home from './components/home/Home.vue'
import Catalogo from "./components/catalogo/Catalogo.vue"
import PecaCadastro from "./components/peca/CadastroPeca.vue"
import PecaDetalhes from "./components/peca/PecaDetalhes.vue"

export const routes = [
    { path: '', component: Home },
    { path: '*', component: Home },
    { path: '/catalogo', component: Catalogo },
    { path: '/peca/cadastro', component: PecaCadastro },
    { path: '/peca/:id', component: PecaDetalhes, props: true, name: 'peca-detalhes'},
]