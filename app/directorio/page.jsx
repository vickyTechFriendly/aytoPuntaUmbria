"use client"
import React, { useEffect } from 'react';
import { usePageContext } from '../PageContext.js';
import styles from '../pages.module.css'
import Link from "next/link"


export default function Contacto() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Directorio de teléfonos y direcciones - Ayuntamiento Punta Umbría');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Punta Umbría');
    }, []);

    return (
      <>
      <section className={styles.cabecera}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Ayuntamiento_de_Punta_Umbr%C3%ADa.jpg/2560px-Ayuntamiento_de_Punta_Umbr%C3%ADa.jpg" alt="" />
        <h1>Contacto</h1>
      </section>

      <main className={styles.main}>
          {/* <h1 tabIndex="0" id="contenido">Directorio de teléfonos y direcciones</h1> */}

          <div className={styles.flex}>
          <div className={`${styles.contacto} ${styles.directorio}`} style={{ marginTop: '0px' }}>
            <h2>Agencia de Desarrollo Local</h2>
            <p><strong>Responsable de la entidad:</strong>Concejalía de Desarrollo Local</p>
            <p><i className="material-icons">location_on</i> Edificio Galeón, Av. de la Marina, 7 1ª Planta 21100 - Punta Umbría (Huelva)</p>
            <p><i className="material-icons">call</i>959 49 51 45 </p>
            <p><i className="material-icons" aria-hidden="true">mail</i><Link href="mailto:adl@puntaumbria.es" className={styles.underline}>adl@puntaumbria.es</Link></p>
          </div>

          <div className={`${styles.contacto} ${styles.directorio}`} style={{ marginTop: '0px' }}>
            <h2>Centralita Ayto. Punta Umbría</h2>
            <p><strong>Responsable de la entidad:</strong>Centralita</p>
            <p><i className="material-icons">location_on</i>Pz. de la Constitución, s/n</p>
            <p><i className="material-icons">call</i>959 49 51 00 </p>
            <p><i className="material-icons" aria-hidden="true">mail</i><Link href="mailto:centralita@puntaumbria.es" className={styles.underline}>centralita@puntaumbria.es</Link></p>
          </div>

          <div className={`${styles.contacto} ${styles.directorio}`}>
            <h2>Cultura - Teatro del Mar</h2>
            <p><strong>Responsable de la entidad:</strong>Concejalía de Cultura</p>
            <p><i className="material-icons">location_on</i>Plaza de las Artes, s/n</p>
            <p><i className="material-icons">call</i>959 49 51 32 </p>
            <p><i className="material-icons" aria-hidden="true">mail</i><Link href="mailto:cultura@puntaumbria.es" className={styles.underline}>cultura@puntaumbria.es</Link></p>
          </div>

          <div className={`${styles.contacto} ${styles.directorio}`}>
            <h2>Gabinete de Prensa - Comunicación</h2>
            <p><strong>Responsable de la entidad:</strong>Concejalía de Comunicación</p>
            <p><i className="material-icons">location_on</i>Pz. de la Constitución, s/n - 21100 Punta Umbría (Huelva)</p>
            <p><i className="material-icons">call</i>959 49 51 09 </p>
            <p><i className="material-icons" aria-hidden="true">mail</i><Link href="mailto:comunicacion@puntaumbria.es" className={styles.underline}>comunicacion@puntaumbria.es</Link></p>
          </div>

          <div className={`${styles.contacto} ${styles.directorio}`}>
            <h2>Intervención</h2>
            <p><strong>Responsable de la entidad:</strong>Concejalía de Economía y Hacienda</p>
            <p><i className="material-icons">location_on</i>Pz. de la Constitución, 1 - 21100 Punta Umbría (Huelva)</p>
            <p><i className="material-icons">call</i>959 49 51 04 </p>
            <p><i className="material-icons" aria-hidden="true">mail</i><Link href="mailto:intervencion@puntaumbria.es" className={styles.underline}>intervencion@puntaumbria.es</Link></p>
          </div>

          <div className={`${styles.contacto} ${styles.directorio}`}>
            <h2>Oficina de Turismo</h2>
            <p><strong>Responsable de la entidad:</strong>Concejalía de Turismo</p>
            <p><i className="material-icons">location_on</i>Av. Ciudad de Huelva, 1</p>
            <p><i className="material-icons">call</i>959 49 51 60 </p>
            <p><i className="material-icons" aria-hidden="true">mail</i><Link href="mailto:turismo@puntaumbria.es" className={styles.underline}>turismo@puntaumbria.es</Link></p>
          </div>

          <div className={`${styles.contacto} ${styles.directorio}`}>
            <h2>Policía Local</h2>
            <p><strong>Responsable de la entidad:</strong>Jefatura Policía Local</p>
            <p><i className="material-icons">location_on</i>Edificio Galeón, Av. de la Marina, 7 Planta 1ª - 21100 Punta Umbría (Huelva)</p>
            <p><i className="material-icons">call</i>959 49 51 11 </p>
            <p><i className="material-icons" aria-hidden="true">mail</i><Link href="mailto:policialocal@puntaumbria.es" className={styles.underline}>policialocal@puntaumbria.es</Link></p>
          </div>

          <div className={`${styles.contacto} ${styles.directorio}`}>
            <h2>Servicio Municipal de Deportes</h2>
            <p><strong>Responsable de la entidad:</strong>Concejalía de Deportes</p>
            <p><i className="material-icons">location_on</i>Polideportivo Municipal "Antonio Gil Hernández", C/ Andévalo s/n. 21100 - Punta Umbría (Huelva)</p>
            <p><i className="material-icons">call</i>959 49 51 59 </p>
            <p><i className="material-icons" aria-hidden="true">mail</i><Link href="mailto:secretariadeportes@puntaumbria.es" className={styles.underline}>secretariadeportes@puntaumbria.es</Link></p>
          </div>

          <div className={`${styles.contacto} ${styles.directorio}`}>
            <h2>Servicios Sociales</h2>
            <p><strong>Responsable de la entidad:</strong>Concejalía de Bienestar Social</p>
            <p><i className="material-icons">location_on</i> Plaza de las Artes, s/n</p>
            <p><i className="material-icons">call</i>959 49 51 40 </p>
            <p><i className="material-icons" aria-hidden="true">mail</i><Link href="mailto:servicios.sociales@puntaumbria.es" className={styles.underline}>servicios.sociales@puntaumbria.es</Link></p>
          </div>

          <div className={`${styles.contacto} ${styles.directorio}`}>
            <h2>Servicios Técnicos - Urbanismo - Medio Ambiente</h2>
            <p><strong>Responsable de la entidad:</strong>Concejalía de Urbanismo</p>
            <p><i className="material-icons">location_on</i> C/ Miguel Hernández, 22</p>
            <p><i className="material-icons">call</i>959 49 51 28 </p>
            <p><i className="material-icons" aria-hidden="true">mail</i><Link href="mailto:urbanismo@puntaumbria.es" className={styles.underline}>urbanismo@puntaumbria.es</Link></p>
          </div>
          </div>
      </main>
      </>
    )
  }
  