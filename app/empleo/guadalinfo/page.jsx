"use client"
import React, { useEffect } from 'react';
import styles from '../empleo.module.css';
import Link from "next/link";
import { usePageContext } from './../../PageContext.js';

export default function Guadalinfo() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Centro Guadalinfo - Ayuntamiento de Punta Umbría');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Punta Umbría, empleo');
    }, []);
    
    return (
      <main>
        <section  className={styles.cabecera}>
          <img src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
          <h1>Empleo y Desarrollo Económico</h1>
        </section>

        <div className={styles.main}>
            <div  className={styles.migasPan}>
                <Link href="/" id="contenido">Inicio</Link>
                <span><i className="material-icons">chevron_right</i></span>
                <Link href="/empleo">Empleo y Desarrollo Económico</Link>
                <span><i className="material-icons">chevron_right</i></span>
                <p>Centro Guadalinfo</p> 
            </div> 
           
            <section>
                <h2><i className="material-icons" aria-hidden="true">language</i>Centro Guadalinfo</h2>

                <p>GUADALINFO: EL PROYECTO</p>
                <p>Guadalinfo empezó como proyecto piloto en 2003, con la apertura de 26 centros en Andalucía. El éxito de esta iniciativa propició la rápida extensión de estos centros por todo el territorio andaluz.</p>
                <p>Los objetivos del proyecto inicial eran implantar una red de centros de acceso público a Internet en Banda Ancha en los municipios andaluces de menos de 10.000 habitantes, promover la colaboración entre Administraciones Públicas, evitar la brecha digital e innovar a través de los servicios que ofrecen las Tecnologías de la Información y la Comunicación, TIC. Se trata, en definitiva, de conseguir la plena incorporación de Andalucía en la Sociedad de la Información y el Conocimiento y la movilización de toda la población hacia las TIC.</p>
                <p>Guadalinfo cuenta en la actualidad con más de 700 centros que están dirigidos no solamente a ser un lugar para la formación, sino que pretenden también ser un espacio social en el que los usuarios participen activamente, tanto demandando información como aportando ideas. Los centros Guadalinfo son un reflejo de cada municipio, un lugar de encuentro en el que los usuarios participan y colaboran activamente en la sociedad 2.0.</p>

                <ul>Encontrará en los Centros Guadalinfo:
                    <li style={{ marginTop: '10px' }}>Acceso a Internet en Banda Ancha.</li>
                    <li>Equipamiento informático multimedia.</li>
                    <li>Cursos de formación, conferencias, exposiciones, excursiones, tertulias…</li>
                    <li>Uso seguro de internet y sus herramientas.</li>
                    <li>Atención personalizada a los usuarios.</li>
                </ul>

                <h3>CENTRO GUADALINFO DE PUNTA UMBRIA</h3>
                <p>Punta Umbría, como otros 700 pueblos de Andalucía, cuenta también con un centro Guadalinfo, en la calle Rafael Montesinos de la localidad. Es aquí donde gran parte de la comunidad local acude en busca de consejo, orientación y formación en todo lo relacionado con las Nuevas Tecnologías.</p>
                <p>Actualmente dispone de numerosos cursos y talleres gratuitos a los que los usuarios del centro pueden acceder libremente. También hay unos horarios de navegación para la consulta del correo personal o cualquier otra gestión a través de Internet.</p>
                <p>Para conocer en profundidad el centro visite el blog <Link href="http://guadalinfopuntaumbria.blogspot.com" className={styles.underline} style={{ marginLeft: '6px' }}>http://guadalinfopuntaumbria.blogspot.com</Link></p>
            </section>
        </div>
      </main>
    )
} 