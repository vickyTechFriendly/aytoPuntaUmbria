"use client"
import styles from '../cultura.module.css';
import Link from "next/link";
import { useEffect} from 'react';
import { usePageContext } from './../../PageContext.js';

export default function Talleres() {
  const { setTitle, setDescription, setKeywords } = usePageContext(); 

    useEffect(() => {
        setTitle('Aulas y talleres - Ayuntamiento de Punta Umbría');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Punta Umbría, cultura, talleres, cursos');
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
                <p>Aulas y Talleres</p> 
            </div> 
           
            <section>
                <h2><i className="material-icons" aria-hidden="true">construction</i> Aulas, talleres y sala polivanlente</h2>

                <div className={styles.flex}>
                  <div className={styles.datosContacto}>
                    <p><i className="material-icons">location_on</i>Plaza de las Artes s/n, Punta Umbría 21100</p>
                    <p><i className="material-icons">call</i>959 49 51 32</p>
                    <p><i className="material-icons">mail</i><Link href="mailto:cultura@puntaumbria.es" className={styles.underline}>cultura@puntaumbria.es</Link></p>
                    <p style={{ marginTop: '15px' }}>De Lunes a Viernes:<br></br>Mañanas de 09:00h. a 14:00h.<br></br>Tardes de 17:00h. a 21:00h.</p>
                  </div>

                  <p className={styles.descripcion}>Anexo al Teatro del Mar se encuentra un ala del edificio, dotada con cinco aulas destinadas a la formación, así como a lugar de encuentro de colectivos y agrupaciones de carácter social y cultural. Esta parte del edificio también dispone de tres amplios espacios destinados a los Talleres Municipales de Teatro, Pintura y Cerámica, Así como un espacio polivalente que hace las veces de salón de actos, sala de conciertos de pequeño formato y sala de proyección, donde tiene su sede el Cine Club de nuestra localidad.</p>
                </div>
            </section>
        </div>
      </main>
    )
}