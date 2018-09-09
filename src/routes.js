import Home from './components/home/Home.vue'
import Catalogo from "./components/catalogo/Catalogo.vue";

export const routes = [
    { path: '', component: Home },
    { path: '*', component: Home },
    { path: '/catalogo', component: Catalogo }
]