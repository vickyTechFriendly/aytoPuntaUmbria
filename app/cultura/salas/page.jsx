"use client"
import styles from '../cultura.module.css';
import Link from "next/link";
import { useEffect} from 'react';
import { usePageContext } from './../../PageContext.js';

export default function Salas() {
  const { setTitle, setDescription, setKeywords } = usePageContext(); 

    useEffect(() => {
        setTitle('Salas de Exposiciones - Ayuntamiento de Punta Umbría');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Punta Umbría, cultura, exposiciones');
    }, []);

    return (
      <main>
        <section  className={styles.cabecera}>
          <img src="https://plus.unsplash.com/premium_photo-1664438942574-e56510dc5ce5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <h1>Cultura</h1>
        </section>

        <div className={styles.main}>
            <div  className={styles.migasPan}>
                <Link href="/" id="contenido">Inicio</Link>
                <span><i className="material-icons">chevron_right</i></span>
                <Link href="/cultura">Cultura</Link>
                <span><i className="material-icons">chevron_right</i></span>
                <p>Salas de Exposiciones</p> 
            </div> 
           
            <section>
                <h2><i className="material-icons" aria-hidden="true">art_track</i>Salas de Exposiciones</h2>

                <div className={styles.flex}>
                  <div className={styles.datosContacto}  style={{ width: '45%' }}>
                    <p><strong>Salas de exposiciones José Caballero y Daniel Vázquez Díaz</strong></p>
                    <p style={{ marginTop: '10px' }}><i className="material-icons">location_on</i>Plaza de las Artes s/n, Punta Umbría 21100</p>
                    <p><i className="material-icons">call</i>959 49 51 32</p>
                    <p><i className="material-icons">mail</i><Link href="mailto:cultura@puntaumbria.es" className={styles.underline}>cultura@puntaumbria.es</Link></p>
                    <p style={{ marginTop: '15px' }}>Mañanas, de Lunes a Viernes de 10:00h. a 14:00h.</p>
                    <p style={{ marginTop: '25px' }}>Las salas José Caballero y Daniel Vázquez Díaz, se encuentran ubicadas en el edificio destinado a exposiciones del nuevo centro cultural con acceso desde la Plaza de las Artes. Las salas están equipadas técnicamente para albergar exposiciones de gran formato. La sala José Caballero tiene una dimensión de 180 m2 y de 120 m2 la sala Daniel Vázquez Díaz. El horario de visita al público es de 10h. a 14h.</p>
                  </div>

                  <div className={styles.datosContacto}  style={{ width: '45%' }}>
                    <p><strong>Sala de exposiciones Teatro del Mar</strong></p>
                    <p style={{ marginTop: '10px' }}><i className="material-icons">location_on</i>Plaza de las Artes s/n, Punta Umbría 21100</p>
                    <p><i className="material-icons">call</i>959 49 51 32</p>
                    <p><i className="material-icons">mail</i><Link href="mailto:cultura@puntaumbria.es" className={styles.underline}>cultura@puntaumbria.es</Link></p>
                    <p style={{ marginTop: '15px' }}>Mañanas, de Lunes a Viernes de 10:00h. a 14:00h.<br></br>Tardes de Lunes a Viernes de 17:00h. a 21:00h.</p>
                    <p style={{ marginTop: '25px' }}>La sala de exposiciones Teatro del Mar, se encuentra ubicada en el lateral derecho del mismo edificio del teatro, con acceso desde la calle Cartaya. La sala esta destinada a albergar exposiciones temporales y está dotada del correspondiente equipamiento técnico.</p>
                  </div>

                  <div className={styles.datosContacto}  style={{ width: '45%', marginTop: '75px' }}>
                    <p><strong>Sala de exposiciones Pedro Gil Mazo</strong></p>
                    <p style={{ marginTop: '10px' }}><i className="material-icons">location_on</i>Plaza de las Artes s/n, Punta Umbría 21100</p>
                    <p><i className="material-icons">call</i>959 49 51 32</p>
                    <p><i className="material-icons">mail</i><Link href="mailto:cultura@puntaumbria.es" className={styles.underline}>cultura@puntaumbria.es</Link></p>
                    <p style={{ marginTop: '15px' }}>Mañanas, de Lunes a Viernes de 10:00h. a 14:00h.</p>
                    <p style={{ marginTop: '25px' }}>Esta sala está dedicada a la memoria y obra del pintor puntaumbrieño Pedro Gil Mazo, fallecido en enero de 2003. La sala recoge obras del propio artista así como piezas de su colección particular. La sala esta ubicada en el cuerpo de edificio destinado a exposiciones del nuevo centro cultural con acceso desde la Plaza de las Artes. El horario de apertura al público para consultas e investigación es de 10h. a 14h.</p>
                  </div>
                </div>
            </section>
        </div>
      </main>
    )
}