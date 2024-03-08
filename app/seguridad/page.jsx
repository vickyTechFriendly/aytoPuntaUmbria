"use client"
import React, { useEffect } from 'react';
import { usePageContext } from './../PageContext.js';
import styles from '../pages.module.css'
import Link from "next/link"

export default function Seguridad() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Seguridad - Ayuntamiento Punta Umbría');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Punta Umbría, policía local, protección civil');
    }, []);

    return (
      <main className={`${styles.main} ${styles.contenidoSeguridad}`}>
          <div className={styles.contactoSeguridad}>
            <h1 tabIndex="0" id="contenido">Jefatura Policía Local</h1>
            <p><i className="material-icons">location_on</i>Edificio Galeón, Av. de la Marina, 7, 21100 Punta Umbría, Huelva</p>
            <p><i className="material-icons">call</i>Teléfono 092  (959495111)</p>
            <p><i className="material-icons" aria-hidden="true">mail</i><Link href="mailto:policialocal@puntaumbria.es" className={styles.underline}>policialocal@puntaumbria.es</Link></p>

            <h1 style={{ marginTop: '50px' }}>Protección Civil. Centro de Coordinación Operativa Local (CECOPAL)</h1>
            <p><i className="material-icons">location_on</i>Paseo de la Ría, 8. Edificio Antiguo Ayuntamiento 21100 Punta Umbría Huelva</p>
            <p><i className="material-icons" aria-hidden="true">call</i>959495149</p>
            <p><i className="material-icons" aria-hidden="true">mail</i><Link href="mailto:proteccioncivil@puntaumbria.es" className={styles.underline}>proteccioncivil@puntaumbria.es</Link></p>
            <p><i className="material-icons" aria-hidden="true">mail</i><Link href="mailto:proteccioncivilpuntaumbria@gmail.com" className={styles.underline}>proteccioncivilpuntaumbria@gmail.com</Link></p>
          </div>
          
          <iframe className={styles.mapaSeguridad} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12714.186074790767!2d-6.967787!3d37.1872466!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd11d12bc95429d7%3A0x6e0a7817c5d3f3fa!2sPolic%C3%ADa%20Local%20de%20Punta%20Umbr%C3%ADa!5e0!3m2!1ses-419!2ses!4v1702376613644!5m2!1ses-419!2ses" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{ borderRadius: '15px' }}></iframe>
      </main>
    )
  }
  