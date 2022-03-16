
const getLinks = () =>{
    const links = {}
    let keyVal = 0
    for(const [key,val] of Object.entries(ORIGEN)){
        keyVal++
        links[`${key}`] = ({uri:val.uri, text:val.text, key:keyVal})
    }
    return links;
}
const ORIGEN = {
    home: { uri: '/', text: "Humano", src: "Home"} ,
    somos: { uri: '/nosotros', text: "¿Quienes Somos?", src: "Somos"},
    amor: { uri: '/amor', text: "Amor", src:"Amor"},
    registrar: {uri: '/registro', text: "Registrate", src:"Registrar"},
    conectar: {uri: '/entrar', text: "¡Bienvenido!", src:"Conectar"},
    trascendente: {uri: '/trascendente', text: "Trascendente", src:"Trascendente"},
    curioso: {uri: '/curioso', text: "Curioso", src:"Curioso"},
 };

 const getSource = () =>{
    const routes = {}
    let keyVal = 0
    for(const [key,val] of Object.entries(ORIGEN)){
        keyVal++
        routes[`${key}`] = ({uri:val.uri,src:val.src, key:keyVal})
    }
    return routes;
}
 
 const LINKS = getLinks();
const SOURCE = getSource();
 export {LINKS, SOURCE}
