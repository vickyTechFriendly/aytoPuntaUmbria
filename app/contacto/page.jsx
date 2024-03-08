"use client"
import React, { useEffect } from 'react';
import { usePageContext } from './../PageContext.js';
import styles from '../pages.module.css'
import Link from "next/link"


export default function Contacto() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Contacto - Ayuntamiento Punta Umbría');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Punta Umbría');
    }, []);

    return (
      <>
      <section className={styles.cabecera}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Ayuntamiento_de_Punta_Umbr%C3%ADa.jpg/2560px-Ayuntamiento_de_Punta_Umbr%C3%ADa.jpg" alt="" />
        <h1>Contacto</h1>
      </section>

      <main className={`${styles.main} ${styles.contenido}`}>
          <div className={styles.contacto}>
            <h1 tabIndex="0" id="contenido">Ayuntamiento</h1>
            <p><i className="material-icons">location_on</i>Edificio Galeón, Av. de la Marina, 7, 21100 Punta Umbría, Huelva</p>
            <p><i className="material-icons">call</i>959 49 51 00</p>
            <p><i className="material-icons" aria-hidden="true">mail</i><Link href="mailto:info@ayto-puntaumbria.es" className={styles.underline}>info@ayto-puntaumbria.es</Link></p>
            <p><i className="material-icons">schedule</i>De lunes a viernes de 9:00 a 13:00</p>
          </div>
          <iframe className={styles.mapa} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12714.987947849077!2d-6.9671495!3d37.1824834!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd11d128e9012141%3A0xaced27d9f5acdc93!2sAyuntamiento%20De%20Punta%20Umbr%C3%ADa!5e0!3m2!1ses-419!2ses!4v1701769485344!5m2!1ses-419!2ses" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{ borderRadius: '15px' }}></iframe>
      </main>
      </>
    )
  }
  