"use client"
import React, { useEffect } from 'react';
import styles from '../deportes.module.css';
import Link from "next/link";
import { usePageContext } from './../../PageContext.js';

export default function CentroDeportivo() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Información y atención al usuario - Ayuntamiento de Punta Umbría');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Punta Umbría, deporte');
    }, []);

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
                <p>Información y atención al usuario</p> 
            </div> 
           
            <div>
                <h2><i className="material-icons" aria-hidden="true">info</i>Información y atención al usuario</h2>

                <p>Para información de actividades, escuelas deportivas y alquileres de instalaciones pueden dirigirse al Servicio Municipal de Deportes.</p>
                
                <div className={styles.flex}>
                    <div className={styles.datosContacto}>
                        <p><strong>Polideportivo Municipal 'Antonio Gil Hernández':</strong></p>
                        <p style={{ marginTop: '10px' }}><i className="material-icons">location_on</i>C/ Andévalo s/n. 21100 - Punta Umbría (Huelva)</p>
                        <p><i className="material-icons">call</i>959 49 51 59</p>
                        <p><i className="material-icons">mail</i><Link href="mailto:deportes@puntaumbria.es" className={styles.underline}>deportes@puntaumbria.es</Link></p>
                        <p style={{ marginTop: '15px' }}>Atención al público de lunes a viernes de 8:30 a 14:00 h.</p>
                    </div>
                    <iframe className={styles.mapa} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12712.90352152702!2d-6.9714364!3d37.194864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd11d1239973f8db%3A0x45827a843abde36e!2sPolideportivo%20Antonio%20Gil%20Hernandez!5e0!3m2!1ses-419!2ses!4v1703681307667!5m2!1ses-419!2ses" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{ borderRadius: '15px' }}></iframe>
                </div>
            </div>
        </section>
      </main>
    )
}