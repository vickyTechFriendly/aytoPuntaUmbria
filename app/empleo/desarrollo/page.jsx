"use client"
import React, { useState, useEffect } from 'react';
import styles from '../empleo.module.css';
import Link from "next/link";
import { usePageContext } from './../../PageContext.js';

export default function Desarrollo() {
    const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Desarrollo Local - Ayuntamiento de Punta Umbría');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Punta Umbría, empleo, desarrollo');
    }, []);

    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
      { title: "Redes a las que pertenecemos", content: (
        <>
          <p>Redes y Asociaciones en materia de empleo, desarrollo económico y sostenibilidad a las que pertenece el Ayuntamiento de Punta Umbría:</p>

          <p>ICLEI (Gobiernos locales por la sostenibilidad).<br></br>Red de Ciudades Educadoras.<br></br>Red Andaluza de Desarrollo Local.</p>

          <p>Red de Ciudades por la Bicicleta.<br></br>Red Española de Ciudades por el Clima.<br></br>REIIES (Red Europea de Iniciativas para la Integración Económica y Social).</p>

          <p>Consorcio UTEDLT.<br></br>Asociación GUADIODIEL.<br></br>Grupo de Desarrollo Pesquero Costaluz.<br></br>Consorcio de Turismo de la Costa Occidental de Huelva.</p>
        </>
      ) },
      { title: "Formación", content: (
        <>
          <p>El Área de Desarrollo Local cuenta con una amplia experiencia en el desarrollo y coordinación de diferentes programas formativos dirigidos a personas desempleadas y ocupadas, lo que redunda en la mejora de la empleabilidad de las personas trabajadoras y de la competitividad y productividad de las empresas. Desde 1995 se imparten en la localidad cursos de Formación Profesional Ocupacional, FPO.</p>

          <p>La actual Formación Profesional para el Empleo, del Servicio Andaluz de Empleo, SAE, se orienta a adquirir y mejorar la cualificación profesional, adaptando las competencias a las ocupaciones más demandadas por el mercado laboral. Así, anualmente se desarrolla una amplia oferta formativa, dirigida prioritariamente a personas desempleadas, de la que se irá informando a través de esta página web.</p>

          <p>El Ayuntamiento de Punta Umbría dispone de dos centros para impartir formación: el Centro de Formación en Innovación y Tecnologías, CEFIT, y una Sala de Transformación y Manipulación de Productos de la Pesca. Ambos están inscritos en el Registro de Centros y Entidades de Formación Profesional para el Empleo, del Servicio Andaluz de Empleo.</p>

          <p>También se colabora con otras entidades en el desarrollo de acciones formativas, dirigidas a empresarios, trabajadores de pequeñas y medianas empresas y autónomos, entre otros. Además, en idiomas y nuevas tecnologías hay una interesante y permanente oferta formativa gratuita, que se amplía al colectivo de niños a partir de 6 años en los meses de verano. Todo ello en el CEFIT.</p>
        </>
      ) },
      { title: "Registro de demandante", content: (
        <>
          <p>El Área de Desarrollo Local dispone de un Registro de Demandantes que recoge los datos de Currículum de personas desempleadas o que quieran mejorar su situación laboral y que estén interesadas en acceder a posibles ofertas de empleo que se ajusten a su perfil.</p>
          
          <p>Gracias al servicio, las empresas que demanden trabajadores/as pueden cubrir sus ofertas preseleccionando del registro a aquellas personas cuyos perfiles profesionales se adapten mejor a sus necesidades.</p>

          <p>Una vez recibida la oferta, el personal técnico del Área de Desarrollo Local, salvaguardando en todo momento la confidencialidad de los datos de las empresas, informa telefónicamente a las personas candidatas que tengan un perfil adecuado, para así confirmar si están interesadas en formar parte del proceso selectivo.</p>
        </>
      ) },
      { title: "Programa de prácticas", content: (
        <>
          <p>El Ayuntamiento de Punta Umbría tiene firmados convenios específicos de colaboración formativa con diversas instituciones (Diputación Provincial de Huelva, universidades e institutos de formación reglada, entre otros) con el objetivo de posibilitar al alumnado la realización de prácticas en el Consistorio. Con esta medida se consigue una mejor cualificación a través del conocimiento directo del ambiente real de trabajo.</p>

          <p>Igualmente existen convenios de colaboración suscritos entre el Ayuntamiento de Punta Umbría y las distintas universidades para el desarrollo del Convenio de Movilidad de Estudiantes del Programa Erasmus, con el fin de ayudar a la financiación de los jóvenes de la localidad que acceden a dichas becas.</p>
        </>
      ) },
      { title: "Empresas y personas emprendedoras", content: (
        <>
          <p>El Área de Desarrollo Local del Ayuntamiento de Punta Umbría impulsa la actividad económica y la creación de empleo estable y de calidad en el municipio, fomentando la competitividad de las empresas locales, todo bajo el enfoque del desarrollo territorial sostenible. El asesoramiento integral a empresas y personas emprendedoras de la localidad es clave para conseguir estos fines.</p>

          <p>El itinerario de asesoramiento empresarial comienza en la mayoría de los casos con el estudio del Plan de Empresa, herramienta indispensable para el análisis de la futura viabilidad del proyecto.</p>

          <p>La financiación es también objeto de estudio, pues uno de los aspectos más demandados por las empresas es la búsqueda de recursos financieros. Desde el Área de Desarrollo Local se les informa y tramita incentivos y subvenciones de todas aquellas convocatorias (estatales, autonómicas y locales) a las que pudieran acogerse.</p>

          <p>De forma transversal, a lo largo de todo el proceso de asesoramiento a las empresas, se motiva a la participación de los empresarios/as en itinerarios formativos (con un horario adecuado a sus necesidades), para que adquieran los conocimientos necesarios para su adaptación a un mercado cambiante e innovador. Del mismo modo, se promueven actividades relacionadas con el asociacionismo de promotores como medida imprescindible para aunar esfuerzos.</p>
        </>
      ) }
    ];

    const handleTabClick = (index) => {
      setActiveTab(index);
    }

    return (
      <main>
        <section  className={styles.cabecera}>
          <img src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <h1>Empleo y Desarrollo Económico</h1>
        </section>

        <div className={styles.main}>
            <div  className={styles.migasPan}>
                <Link href="/" id="contenido">Inicio</Link>
                <span><i className="material-icons">chevron_right</i></span>
                <Link href="/empleo">Empleo y Desarrollo Económico</Link>
                <span><i className="material-icons">chevron_right</i></span>
                <p>Desarrollo Local</p> 
            </div> 
           
            <section>
                <h2><i className="material-icons" aria-hidden="true">storefront</i>Desarrollo Local</h2>
                <div id="pestanas" className={styles.pestanas}>
                    {tabs.map((tab, index) => (
                        <a key={index} className={index === activeTab ? styles.active : ''} onClick={() => handleTabClick(index)} onKeyDown={(e) => e.key === 'Enter' && handleTabClick(index)} tabindex="0" id="contenido">
                        {tab.title}
                    </a>
                    ))}
                </div>

                {tabs.map((tab, index) => (
                <div key={index} className={styles.contenidoPestana} style={{ display: index === activeTab ? 'block' : 'none' }}>
                    <p>{tab.content}</p>
                </div>
                ))}
            </section>
        </div>
      </main>
    )
} 