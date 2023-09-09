import Technologies from "../../technologies/Technologies"

const Description = () => {
    return(
        <div className="min-h-screen w-4/6 pt-24 flex flex-col items-center">
            <h2 className="text-7xl mb-16">Desarrollador Web Full Stack</h2>
            <p className="text-xl tracking-normal leading-relaxed">
            {/* Desarrolador Web Full Stack con conocimientos en las siguientes tecnologías: HTML, CSS, SASS, GIT / GITHUB, NODEJS, JAVASCRIPT, REACTJS, EXPRESS, MONGODB, SQL, FIREBASE. */}
            Soy un apasionado recién graduado con un fuerte interés en el mundo de las tecnologías de la información. He adquirido sólidos 
            conocimientos durante mis estudios y he demostrado habilidades técnicas a través de proyectos académicos y trabajos prácticos. Mi enfoque orientado a resultados, capacidad de resolución de problemas y habilidades de comunicación son activos que puedo aportar a un equipo de trabajo. Estoy comprometido con mi crecimiento profesional y ansío enfrentar nuevos desafíos en la industria IT.
            </p>
            <Technologies/>
        </div>    
    )
}

export default Description