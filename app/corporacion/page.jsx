"use client"
import styles from '../pages.module.css'
import { useState, useEffect, useRef } from 'react';
import { usePageContext } from './../PageContext.js';

export default function Corporacion() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Corporación municipal - Ayuntamiento de Punta Umbría');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Punta Umbría, ayuntamiento, Corporación municipal');
    }, []);

    const [personas, setPersonas] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      fetch(`${process.env.NEXT_PUBLIC_CORPORACION_URL}`)
        .then(response => response.json())
        
        .then(data => {
          setPersonas(data.data);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error al llamar a la API:', error);
          setIsLoading(false);
        });
    }, []);

    const grupoGobierno = personas?.filter(persona => persona.partido === 'grupo de gobierno');
    const oposicion = personas?.filter(persona => persona.partido === 'oposicion');

    if (isLoading) return <div>Cargando corporación municipal...</div>;

    return (
      <>
      <section className={styles.cabecera}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Ayuntamiento_de_Punta_Umbr%C3%ADa.jpg/2560px-Ayuntamiento_de_Punta_Umbr%C3%ADa.jpg" alt="" />
        <h1>Organización municipal</h1>
      </section>

      <main className={styles.main}>
        <h1>GRUPO de gobierno (UPU)</h1>
          <div className={styles.corporacion}>
          {grupoGobierno && grupoGobierno.map((persona, index) => (
              <div key={index} className={styles.trabajador}>
                <img src={`${process.env.NEXT_PUBLIC_IMAGENES_URL}/${persona.foto}`} alt=""/>
                <h2 className={styles.trabajador}>{persona.Nombre_y_apellido}</h2>
                <p>{persona.puesto}</p>
              </div>
            ))}
          </div>

          <h1>Oposición</h1>
          <div className={styles.corporacion}>
          {oposicion && oposicion.map((persona, index) => (
              <div key={index} className={styles.trabajador}>
                <img src={`${process.env.NEXT_PUBLIC_IMAGENES_URL}/${persona.foto}`} alt=""/>
                <h2 className={styles.trabajador}>{persona.Nombre_y_apellido}</h2>
                <p>{persona.partido_politico}</p>
              </div>
          ))}
          </div>
      </main>
      </>
    )
}