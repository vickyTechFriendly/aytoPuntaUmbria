"use client"
import React, { useRef, useState, useEffect } from 'react';
import styles from '../deportes.module.css';
import Link from "next/link";
import { usePageContext } from './../../PageContext.js';

export default function Circuitos() {
    const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Circuitos de entrenamiento - Ayuntamiento de Punta Umbría');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Punta Umbría, circuitos');
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

        <section className={styles.main}>
            <div  className={styles.migasPan}>
                <Link href="/" id="contenido">Inicio</Link>
                <span><i className="material-icons">chevron_right</i></span>
                <Link href="/deportes">Deportes</Link>
                <span><i className="material-icons">chevron_right</i></span>
                <p>Circuitos de entrenamiento</p> 
            </div> 
           
            <div>
                <h2><i className="material-icons" aria-hidden="true">directions_run</i>Circuitos de entrenamiento</h2>

                <div ref={fullscreenRef} className={`${styles.fullscreenContainer} ${isFullscreen ? styles.centered : ''}`}>
                    <img style={{ maxHeight: '80vh' }} src="http://www.puntaumbria.es/opencms/opencms/puntaumbria/galeria/download/galeria_varios-deportes/circuitos_entrenamientos___a3_2_copia21328170661896.jpg" alt="Circuitos de entrenamiento" onClick={isFullscreen ? closeFullscreen : openFullscreen} className={styles.fullscreenImage} />
                    {isFullscreen && <button onClick={closeFullscreen} className={styles.closeButton}><i className="material-icons">close</i></button>}
                </div>
                <p>NOTA: El circuito MUNDIAL DE CROSS no esta en buenas condiciones para su uso.</p>
            </div>
        </section>
      </main>
    )
}  