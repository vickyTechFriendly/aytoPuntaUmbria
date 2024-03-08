"use client"
import React, { useEffect } from 'react';
import styles from '../empleo.module.css';
import Link from "next/link";
import { usePageContext } from './../../PageContext.js';

export default function Cefit() {
    const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('CEFIT - Ayuntamiento de Punta Umbría');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Punta Umbría, empleo');
    }, []);

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
                <p>CEFIT</p> 
            </div> 
           
            <section>
                <h2><i className="material-icons" aria-hidden="true">school</i>CEFIT</h2>

                <p>El CEFIT es el Centro de Formación en Innovación y Nuevas Tecnologías del municipio de Punta Umbría (Huelva).</p>
                <p>Este Centro es el resultado de la implicación y apuesta del Ayuntamiento de Punta Umbría por facilitar y hacer llegar las nuevas tecnologías a la ciudadanía, y especialmente, a aquellos que por su condición de desempleado, estudiante o colectivos más desfavorecidos, encuentran mayores dificultades.</p>

                <ol>Los objetivos del Centro son:
                    <li style={{ marginTop: '10px' }}>Consolidar un instrumento de respuesta a la analfabetización digital e idiomática.</li>
                    <li>Contribuir a las necesidades formativas de los ciudadanos.</li>
                    <li>Promover acciones de autoempleo basadas en las nuevas tecnologías.</li>
                    <li>Recoger inquietudes y necesidades del ciudadano (particulares, profesionales y empresarios) para acometer proyectos específicos a su problemática puntual.</li>
                    <li>Potenciar el comercio electrónico entre los empresarios del municipio.</li>
                    <li>Facilitar el acceso de las pequeñas y medianas empresas a las nuevas tecnologías.</li>
                    <li>Familiarizar a los ciudadanos en el manejo de Internet vía tutorías guiadas a través de aulas de navegación.</li>
                    <li>Servir de exponente en el proceso de adaptación a Municipio Digitalizado.</li>
                    <li>Dotarse de constantes mejoras en infraestructuras orientadas a la comunicación, caso de las videoconferencias, y a la formación, caso de materiales interactivos y multimedias, así como de planificar proyectos encaminados al e-learning.</li>
                </ol>

                <p style={{ marginTop: '30px' }}>Este Centro tiene marcado como principal objetivo el intercambio de experiencias con otros telecentros implantados en cualquier punto de la geografía y la mejora continua a través del análisis constante que se hace de las experiencias existentes y visitables a través de Internet.</p>
                <p>A través de los siguiente enlaces puedes encontrar toda la información relativa al Centro de Formación en Innovación y Nuevas Tecnologías (CEFIT) del municipio de Punta Umbría.</p>

                <h3>A quién nos dirigimos</h3>
                <p>Los servicios del Telecentro van dirigidos a la ciudadanía de Punta Umbría, y especialmente a colectivos desfavorecidos.</p>
                <p>Jóvenes, Jubilados, Amas de Casa, Autónomos, Desempleados y demás colectivos, sin limitación de edad, están llamados a ser los principales protagonistas de esta apuesta del Ayuntamiento de Punta Umbría.</p>
                <p>La necesidad de crear y disponer de un Telecentro en este municipio se sustenta en el propio objetivo de evitar desigualdades entre las personas y entre este municipio y otros municipios en lo relativo a las nuevas tecnologías de la información.</p>
                <p>La incorporación de la tecnología en empresas del municipio y la vida formativa del mismo se hace necesaria para poder contribuir a la competitividad de los ciudadanos a la hora de buscar un puesto de trabajo.</p>
                <p>En este sentido, queremos vertebrar la estructura social en base a las nuevas tecnologías; colectivos sociales y profesionales tienen cabida en el mismo. No obstante, el Centro tendrá como público prioritario a los jóvenes y colectivos desempleados que pueden encontrar en las nueva tecnologías un campo de ocupación.</p>

                <h3>Dónde estamos</h3>
                <div className={styles.datosContacto}>
                    <p style={{ marginTop: '10px' }}><i className="material-icons">location_on</i>C/ Rafael Montesinos S/N, 21100, Punta Umbría (Huelva) Junto a la Urbanización La Retama</p>
                    <p><i className="material-icons">call</i>959 49 51 80</p>
                </div>
                <iframe className={styles.mapa} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.6741719419015!2d-6.974939224336188!3d37.18421357214005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd11d12e71a584a7%3A0x619c80a226f0ef2b!2sC.%20Rafael%20Montesinos%2C%2021100%20Punta%20Umbr%C3%ADa%2C%20Huelva!5e0!3m2!1ses-419!2ses!4v1703849495838!5m2!1ses-419!2ses" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{ borderRadius: '15px', marginLeft: '0px' }}></iframe>

                <h3>Nuestras instalaciones</h3>
                <p>Somos conscientes que un Centro que aglutine tecnología punta, como la banda ancha, y ofrezca servicios de manera colectiva a los ciudadanos del municipio, puede convertirse en referente tecnológico.</p>
                <p>Ordenadores en red, acceso a Internet, cableado de última generación y una infraestructura telemática potente conformará las instalaciones de este Centro sobre un marchamo de calidad en el servicio que queremos se consolide como ejemplo en la Provincia de Huelva.</p>
                <p>Queremos que los usuarios del municipio se familiaricen con ordenadores, asistan a presentaciones virtuales, presencien videoconferecnias y se beneficien de una formación apoyada en materiales multimedias y cañones de última generación. Las actividades en red previstas marcarán un antes y un después en la vida de la juventud del municipio como generación futura. En ello va nuestro empeño.</p>
                <p>En este sentido, le invitamos a que conozca más sobre el mismo a través de la sección visita virtual.</p>

                <h3>Política de calidad</h3>
                <p>El AYUNTAMIENTO DE PUNTA UMBRÍA, crea el Centro de Formación en Innovación y Tecnología (CEFIT) en el año 2.000; desde entonces se ha impartido formación a muy diferentes colectivos de la localidad tales como personas desempleadas, ocupadas, empresarios, etc. En la actualidad dispone de dos aulas, despacho para la atención personalizada y archivo.</p>
                <p>Por ello, el AYUNTAMIENTO DE PUNTA UMBRÍA se responsabiliza y adquiere el compromiso de establecer, desarrollar y mantener un Sistema de Gestión de Calidad, cuyo máximo objeto es la satisfacción de nuestros usuarios, dentro del marco de la mejora continua.</p>
                <ul>Para ello la Dirección de este centro de formación se compromete a:
                    <li style={{ marginTop: '10px' }}>Resolver cualquier tipo de necesidad o requerimiento de nuestros alumnos, poniendo a su disposición nuestra organización, medios humanos y técnicos para lograr la satisfacción de nuestros usuarios.</li>
                    <li>Optimizar el sistema productivo, de forma que nos permita cumplir los requisitos legales y reglamentarios, y plantear la mejora en el cumplimiento de los mismos.</li>
                    <li>Mantener la formación continúa del personal parafomentar el compromiso con la calidad, orientado a la prevención de incumplimientos y errores, logrando optimización de nuestros procesos y una mejora en nuestro desempeño a nivel ambiental.</li>
                    <li>Conseguir la satisfacción total del usuario, a través de la correcta prestación de nuestro servicio, el conocimiento de las expectativas del usuario y el compromiso de mejora continua.</li>
                    <li>Orientar al personal de la Entidad a conseguir el compromiso con la calidad, dirigido a prevenir incumplimientos y errores en el desempeño de su actividad.</li>
                    <li>Asegurar que trabajamos con proveedores que garanticen la calidad y el cumplimiento de nuestros objetivos.</li>
                    <li>Cumplir con los requisitos internos, del usuario, legales, reglamentarios y/o normativos u otros que se consideren aplicables en el SGC</li>
                </ul>
                <p style={{ marginTop: '30px' }}>El Director del Centro Formativo/Jefe de Área de Desarrollo Local y Turismo de Punta Umbría se asegurará que la política de calidad es adecuada al propósito y el contexto de la organización, y apoyará la dirección estratégica de la misma. Estas directrices son comunicadas, revisadas y entendidas por todo el personal, cumpliéndose así con los requisitos para garantizar una mejora continua de la eficacia del Sistema de Gestión de la Calidad.</p>
            </section>
        </div>
      </main>
    )
} 