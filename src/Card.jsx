import "./card.css";
//creación de componente funconal

const myStyle = {
    virtual: {
        color:"blue",
        fontSize: 18,
        fontFamily: "Arial"
    },
    real: {
        color:"purple",
        fontSize: 20,
        fontFamily: "Georgia"
    },
};
// CardApp({desc,href,src})
function CardApp(prop){
    console.log(prop.desc);
    /**
     * Reglas de JSX(JavaScript XML)
     * los componentes deben estar dentro de una etiqueta o componente
     * contenedor. No se pueden poner componentes hermanos
     * No se renderizan los valores undefined o null
     * No se renderizan valores booleanos
     * No se renderiza Nan o Infinty
     * No se renderiza funciones u objetos
     */
    const myCard = (
        <div className="card-container">
            <a href={prop.href}>
                <img src={prop.src} alt="" />
                <h1>{prop.title}</h1>
            </a>
            <p style={{color:"green"}}>{prop.desc}</p>
            <p style={prop.type === "virtual"? myStyle.virtual : myStyle.real}>{prop.desc}</p>;
        </div>
        
    );

    return myCard;
}
//Exportacion por default es una forma de exportar
//una unica entidad desde un modulo
export default CardApp;