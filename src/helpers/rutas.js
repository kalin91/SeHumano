import { SOURCE } from "./constants";
import Home from '../Pages/Home'
import Amor from '../Pages/Amor'
import Somos from '../Pages/Somos'
import Registrar from "../Pages/Registrar";
import Conectar from '../Pages/Conectar'
import NotFound from '../Pages/NotFound'
import Trascendente from '../Pages/Trascendente';
import Curioso from '../Pages/Curioso'
import { Route } from "react-router-dom";
function getRutas() {
    const map = {
    getHome : Home,
    getAmor : Amor,
    getSomos : Somos,
    getRegistrar : Registrar,
    getConectar : Conectar,
    getTrascendente : Trascendente,
    getCurioso : Curioso
}
    let rutas = Object.entries(SOURCE).map(([key, val]) => {
        const Obj = map[`get${val.src}`]
        return <Route key={val.key} path={val.uri} element={<Obj />} />
    })
    rutas = [...rutas, <Route key={-1} path="*" element={<NotFound />} />];
    return rutas;
}
const RUTAS = getRutas()


export { RUTAS }