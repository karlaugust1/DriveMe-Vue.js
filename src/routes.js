import Home from './components/home/Home.vue'
import Catalogo from "./components/catalogo/Catalogo.vue"
import PecaDetalhes from "./components/peca/PecaDetalhes.vue"
import MenuAdm from "./components/adm/MenuAdministrador.vue"
import CadastroPeca from "./components/adm/components/CadastroPeca.vue"
import CadastroMontadora from "./components/adm/components/CadastroMontadora.vue"
import CadastroTipoVeiculo from "./components/adm/components/CadastroTipoVeiculo.vue"
import CadastroModelo from "./components/adm/components/CadastroModelo.vue"
import CadastroAplicacao from "./components/adm/components/CadastroAplicacao.vue"
import MenuClientes from "./components/clientes/MenuClientes.vue"
import SobreNos from "./components/empresa/Sobre-nos.vue"
import AEmpresa from "./components/empresa/A-empresa.vue"

export const routes = [
    { path: '', component: Home },
    { path: '*', component: Home },
    { path: '/', component: Home },
    { path: '/catalogo', component: Catalogo, props: true, name: 'catalogo' },
    { path: '/peca/cadastro', component: CadastroPeca, name: 'peca-cadastro' },
    { path: '/montadora/cadastro', component: CadastroMontadora, name: 'montadora-cadastro' },
    { path: '/tipoveiculo/cadastro', component: CadastroTipoVeiculo, name: 'tipoveiculo-cadastro' },
    { path: '/modelo/cadastro', component: CadastroModelo, name: 'modelo-cadastro' },
    { path: '/aplicacao/cadastro', component: CadastroAplicacao, name: 'aplicacao-cadastro' },
    { path: '/peca/:id', component: PecaDetalhes, props: true, name: 'peca-detalhes'},
    { path: '/administrador', component: MenuAdm, name: 'menu-adm'},
    { path: '/cliente', component: MenuClientes, name: 'menu-cliente'},
    { path: '/a-empresa', component: AEmpresa, name: 'a-empresa'},
    { path: '/sobre-nos', component: SobreNos, name: 'sobre-nos'},
]