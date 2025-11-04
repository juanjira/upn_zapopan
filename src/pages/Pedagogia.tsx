import { Nav } from "./Nav"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


export const Pedagogia = () => {
  return (
    <div className="min-h-screen overflow-hidden max-w-full ">
      <div className="bg-[#542AAE] h-20">
        <Nav separator="/#"/>
      </div>

      <div className="p-2">
        <h3 className="title-gradient">Lic. en Pedagogía</h3>
        <h3 className="list">Perfil de Egreso</h3>
        <p className="list">Al concluir sus estudios el pedagogo podrá:</p>
        <ul className="list">
          <li>
            <FontAwesomeIcon icon={faCheck} />
            Explicar la problemática educativa de nuestro país con base en el conocimiento de las teorías, los métodos y las técnicas pedagógicas y del Sistema Educativo Nacional.
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            Construir propuestas educativas innovadoras que respondan a los requerimientos teóricos y prácticos del sistema educativo, basándose en el trabajo grupal e interdisciplinario.
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            Realizar una práctica profesional fundada en una concepción plural humanística y crítica de los procesos sociales en general y educativos en particular.
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            Diseñar, desarrollar y evaluar programas educativos con base en el análisis del sistema educativo mexicano y el dominio de las concepciones pedagógicas actuales.
          </li>
        </ul>
        <h3 className="list">
          Campo laboral
        </h3>
      </div>
      
    </div>
  )
}
