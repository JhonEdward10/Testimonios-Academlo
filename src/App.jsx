import Gabriel from "./imagenes/GabrielParcero.png"
import Maydana from "./imagenes/MaydanaParcero.png"
import Miguel from "./imagenes/MiguelParcero.png"
import Testimonio from './components/Testimonios.jsx'
import './App.css'

function App() {

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen los alumnos de Academlo-BootCamp:</h1>
        <Testimonio 
        imagen={Gabriel}
        nombre='Gabriel Sanchez'
        pais='Colombia'
        cargo='Desarrollador Web Full-Stack'
        testimonio='"Es una Academia que cumplio con las expectativas de las materias vistas, 
        sin embargo pienso que pueden mejorar el acompañamiento de resolucion de dudas e inquietudes.
        Ayuda a muchas personas a encontrar un trabajo de alta calidad,
        ademas te motiva y te dan la chispa de incursionar en el mundo de la programacion"'
        />
        <Testimonio 
        imagen={Maydana}
        nombre='Hernan Exequiel Maydana'
        pais='Argentina'
        cargo='Desarrollador Web Full-Stack'
        testimonio='"Academlo fue la puerta de entrada a mi carrera como programador de software.
        El plan de estudios es muy bien estructurado, pero quede con un poco falto en el modulo de 
        node.js. Sin embargo era lo que necesitaba para implementar y poder llegar a trabajar como
        programador"'
        />
        <Testimonio 
        imagen={Miguel}
        nombre='Miguel Chavez'
        pais='Mexico'
        cargo='Desarrollador Web Full-Stack'
        testimonio='"Siempre habia querido aprender programacion y Academlo me abrio sus puertas para
        estudiar a fondo como se manipular datos y hacer lo que nos plazca, ademas academlo me dio la confianza
        de incursionar en el mundo del desarrollo".'
        />

      </div>
    </div>
  )
}

export default App
