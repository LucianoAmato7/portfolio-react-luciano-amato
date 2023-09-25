import Technologies from "./technologies/Technologies"

const Description = () => {
    return(
        <div className="mb-36 w-4/6 pt-24 flex flex-col">
            <h2 className="italic text-3xl mb-12 font-semibold">ACERCA DE MI:</h2>
            <p className="text-xl tracking-normal leading-relaxed">
                Respetuoso, carismático y compañero. Profesional y ético en mi enfoque hacia el trabajo. Entusiasta por crecer en la industria IT, enfrento desafíos profesionales y técnicos. Experiencia en proyectos front y back-end, comprendiendo a fondo la arquitectura web. Listo para consolidar habilidades y crecer en el campo. Mi enfoque orientado a resultados, capacidad de resolución de problemas y habilidades de comunicación son activos que puedo aportar a un equipo de trabajo. Estoy comprometido con mi crecimiento profesional y ansío enfrentar nuevos desafíos.
            </p>
            <Technologies/>
        </div>    
    )
}

export default Description