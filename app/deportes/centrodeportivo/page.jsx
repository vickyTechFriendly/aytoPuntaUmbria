"use client"
import React, { useRef, useState, useEffect } from 'react';
import styles from '../deportes.module.css';
import Link from "next/link";
import { usePageContext } from './../../PageContext.js';

export default function CentroDeportivo() {
    const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Centro deportivo Punta Umbría - Ayuntamiento de Punta Umbría');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Punta Umbría, deporte, piscina cubierta, centro deportivo');
    }, []);

    const firstImageRef = useRef(null);
    const secondImageRef = useRef(null);
    const [isFirstImageFullscreen, setIsFirstImageFullscreen] = useState(false);
    const [isSecondImageFullscreen, setIsSecondImageFullscreen] = useState(false);

    const openFullscreen = (ref, setImageFullscreen) => {
        if (ref.current.requestFullscreen) {
            ref.current.requestFullscreen();
        } else if (ref.current.mozRequestFullScreen) {
            ref.current.mozRequestFullScreen();
        } else if (ref.current.webkitRequestFullscreen) {
            ref.current.webkitRequestFullscreen();
        } else if (ref.current.msRequestFullscreen) {
            ref.current.msRequestFullscreen();
        }
        setImageFullscreen(true);
    };

    const closeFullscreen = (setImageFullscreen) => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        setImageFullscreen(false);
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
                <p>Centro deportivo Punta Umbría</p> 
            </div> 
           
            <section>
                <h2><i className="material-icons" aria-hidden="true">fitness_center</i>Centro deportivo Punta Umbría (Piscina Municipal Cubierta)</h2>

                <p>Centro Deportivo Punta Umbría (Piscina Municipal Climatizada), gestionada por la empresa  Alarro Gestión XXI, S.L.</p>
                <p>Ampliamos los servicios y las instalaciones con gimnasio de 250 m cuadrados y maquinaria de última generación, dos salas de actividades dirigidas y en la piscina chorros de hidromasaje. Abono piscina y superabono. Nuevas Promociones. ¡Apúntate ya!  Adjuntamos Horario de Actividades Dirigidas desde el día 1 de Diciembre con los principales cambios:</p>
                <ul>
                    <li>Clases Nuevas para que puedas entrenar a cualquier horario. </li>
                    <li>Recuerda que los Sábados tenemos clases colectivas.</li>
                    <li>Clases para los mas peques.</li>
                    <li>Más de 50 Actividades Colectivas semanales.</li>
                </ul>

                <div className={styles.datosContacto}>
                    <p><i className="material-icons">call</i>959 04 00 33</p>
                    <p><i className="material-icons">mail</i><Link href="mailto:centropuntaumbria@lider-sport.es" className={styles.underline}>centropuntaumbria@lider-sport.es</Link></p>
                </div>
            </section>

            <section className={`${styles.comoAlquilar} ${styles.horarios}`}>
                <div>
                    <h3>Horario de la piscina municipal:</h3>

                    <div ref={firstImageRef} className={`${styles.fullscreenContainer} ${isFirstImageFullscreen ? styles.centered : ''}`}>
                        <img src="http://www.puntaumbria.es/opencms/opencms/puntaumbria/galeria/images/galeria_horario-piscina-municipal/horario_centro_deportivo1691068672806.jpg" alt="Horario de la piscina municipal" onClick={() => openFullscreen(firstImageRef, setIsFirstImageFullscreen)} className={styles.fullscreenImage}/>

                        {isFirstImageFullscreen && <button onClick={() => closeFullscreen(setIsFirstImageFullscreen)} className={styles.closeButton}><i className="material-icons">close</i></button>}
                    </div>
                </div>
                <div>
                    <h3>Horario de las actividades:</h3>

                    <div ref={secondImageRef} className={`${styles.fullscreenContainer} ${isSecondImageFullscreen ? styles.centered : ''}`}>
                        <img src="http://www.puntaumbria.es/opencms/opencms/puntaumbria/galeria/images/galeria_horario-actividades-piscina/horario_verano1691134748947.jpg" alt="Horario de las actividades de la piscina municipal" onClick={() => openFullscreen(secondImageRef, setIsSecondImageFullscreen)} className={styles.fullscreenImage}/>

                        {isSecondImageFullscreen && <button onClick={() => closeFullscreen(setIsSecondImageFullscreen)} className={styles.closeButton}><i className="material-icons">close</i></button>}
                    </div>
                </div>
            </section>
        </div>
      </main>
    )
} 