import Home from './components/home/Home.vue'
import Catalogo from "./components/catalogo/Catalogo.vue"
import PecaCadastro from "./components/peca/CadastroPeca.vue"

export const routes = [
    { path: '', component: Home },
    { path: '*', component: Home },
    { path: '/catalogo', component: Catalogo },
    { path: '/peca/cadastro', component: PecaCadastro },
]