"use client"
import styles from '../cultura.module.css';
import Link from "next/link"; 
import { useEffect} from 'react';
import { usePageContext } from './../../PageContext.js';

export default function Teatro() {
  const { setTitle, setDescription, setKeywords } = usePageContext(); 

    useEffect(() => {
        setTitle('Teatro del Mar - Ayuntamiento de Punta Umbría');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Punta Umbría, cultura, teatro');
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
                <p>Teatro del Mar</p> 
            </div> 
           
            <section>
                <h2><i className="material-icons" aria-hidden="true">theater_comedy</i>Teatro del Mar</h2>

                <div className={styles.flex}>
                  <div className={styles.datosContacto}>
                      <p><i className="material-icons">location_on</i>Plaza de la Constitución s/n, Punta Umbría 21100</p>
                      <p style={{ marginTop: '25px', flexDirection: 'column', alignItems: 'flex-start' }}><strong>Horario de taquilla: </strong>Dos horas antes el día de la función</p>
                  </div>

                  <div className={styles.descripcion}>
                    <p>El Teatro del Mar se inauguró el día 3 de noviembre del año 2006. Está situado junto al edificio del Ayuntamiento y tiene acceso desde la Plaza de la Constitución. El teatro es de nueva planta, obra del arquitecto José Ramón Moreno García, y tiene una superficie construida de 3.100 m2. Dispone de 486 localidades, divididas en dos plantas: patio y principal. Su amplio escenario permite la puesta en escena de grandes producciones. Además, está dotado con las últimas tecnologías.</p>
                    <p>En los meses de primavera y verano, el Teatro del Mar dispone de un escenario exterior, con aforo para más de 500 personas.</p>
                  </div>
                </div>
            </section>
        </div>
      </main>
    )
}