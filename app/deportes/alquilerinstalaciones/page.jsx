"use client"
import React, { useRef, useState, useEffect } from 'react';
import styles from '../deportes.module.css';
import Link from "next/link";
import { usePageContext } from './../../PageContext.js';

export default function AlquilerInstalaciones() {
    const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Alquiler online de instalaciones - Ayuntamiento de Punta Umbría');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Punta Umbría, instalaciones deportivas, alquiler online, deporte');
    }, []);

    const fullscreenRef = useRef(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const openFullscreen = () => {
        if (fullscreenRef.current.requestFullscreen) {
            fullscreenRef.current.requestFullscreen();
        } else if (fullscreenRef.current.mozRequestFullScreen) {
            fullscreenRef.current.mozRequestFullScreen();
        } else if (fullscreenRef.current.webkitRequestFullscreen) {
            fullscreenRef.current.webkitRequestFullscreen();
        } else if (fullscreenRef.current.msRequestFullscreen) {
            fullscreenRef.current.msRequestFullscreen();
        }
        setIsFullscreen(true);
    };

    const closeFullscreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        setIsFullscreen(false);
    };

    return (
      <main>
        <section  className={styles.cabecera}>
          <img src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <h1>Deportes</h1>
        </section>

        <div className={styles.main}>
            <div  className={styles.migasPan}>
                <Link href="/" id="contenido">Inicio</Link>
                <span><i className="material-icons">chevron_right</i></span>
                <Link href="/deportes">Deportes</Link>
                <span><i className="material-icons">chevron_right</i></span>
                <p>Alquiler online de instalaciones</p> 
            </div> 
           
            <section>
                <h2><i className="material-icons" aria-hidden="true">language</i>Alquiler online de instalaciones</h2>

                <p>El Ayuntamiento de Punta Umbría, en su apuesta por mejorar la gestión de las instalaciones deportivas del municipio, ha puesto en marcha 'Sporttia' para el alquiler de instalaciones deportivas a través de Internet, a la que se accede mediante la web www.sporttia.com o la app para móviles y tabletas Android.</p>
                <p>El registro es gratuito y el usuario, una vez registrado, puede alquilar de forma rápida y sencilla las pistas, interactuar como en una red social con otros usuarios, confirmar su asistencia a partidos, convocar y asistir a eventos o visualizar rankings.</p>
                <p>Los socios del Servicio Municipal de Deportes del Ayuntamiento de Punta Umbría no tienen que registrarse. Si eres Socio/a y no conoces tu Login y Contraseña, ponte en contacto con el <Link href="/deportes/informacion" className={styles.underline}>S.M.D.</Link> y te la enviaremos de forma privada a través de SMS o correo electrónico para que puedas acceder como socio.</p>

                <div className={styles.boton}>
                    <Link href="https://www.sporttia.com/es/inicio/" target='_blank'>Acceso a alquiler online</Link>
                </div>
            </section>

            <section className={styles.comoAlquilar}>
                <h3>Cómo alquilar:</h3>

                <div ref={fullscreenRef} className={`${styles.fullscreenContainer} ${isFullscreen ? styles.centered : ''}`}>
                    <img
                        src="http://www.puntaumbria.es/opencms/opencms/puntaumbria/galeria/download/folleto_sporttia1425552728447.jpg"
                        alt="Instrucciones para el alquiler online de instalaciones deportivas"
                        onClick={isFullscreen ? closeFullscreen : openFullscreen}
                        className={styles.fullscreenImage}
                    />
                    {isFullscreen && <button onClick={closeFullscreen} className={styles.closeButton}><i className="material-icons">close</i></button>}
                </div>
            </section>
        </div>
      </main>
    )
}