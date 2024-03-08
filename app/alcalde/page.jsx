"use client"
import React, { useEffect } from 'react';
import { usePageContext } from '../PageContext.js';
import styles from '../pages.module.css'

export default function Alcalde() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Saludo del alcalde - Ayuntamiento Punta Umbría');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Punta Umbría, ayuntamiento');
    }, []);

    return (
      <>
        <section className={styles.cabecera}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Ayuntamiento_de_Punta_Umbr%C3%ADa.jpg/2560px-Ayuntamiento_de_Punta_Umbr%C3%ADa.jpg" alt="" />
          <h1>Organización municipal</h1>
        </section>

        <main className={`${styles.main} ${styles.saludo}`}>
        <div className={styles.alcalde}><img src="/images/alcalde.png"  alt="Alcalde de Punta Umbría"></img></div>

        <div  className={styles.text}>
          <h1>Saludo del alcalde</h1>
          <p style={{ display: 'block', marginTop: 20 }}>Como alcalde me dirijo a todos los vecinos y visitantes de Punta Umbría y les doy la bienvenida a esta web municipal, www.puntaumbria.es, un espacio en el que plasmar toda la información relativa a la gestión de este Ayuntamiento y que pretende acercar el trabajo del Consistorio a todos los interesados.</p><p style={{ display: 'block', marginTop: 20 }}>Este espacio 2.0 se convierte en plataforma de participación y comunicación de todos los puntaumbrieños con los representantes municipales. Un claro ejercicio de transparencia con el que hacer visible el trabajo diario de este Ayuntamiento. A través de un recorrido virtual, podrán conocer nuestros proyectos, servicios y actividades así como hacer trámites administrativos de un modo mucho más accesible y ágil. Esta web es, además, un espacio en el que conocer la grandeza de Punta Umbría, sus monumentos, sus playas, su cultura, su historia o sus parajes.</p><p style={{ display: 'block', marginTop: 20 }}>Os invito a hacer de esta herramienta de atención ciudadana un lugar común de encuentro, de relación directa con los vecinos y visitantes, en el que vuestra participación activa es vital.</p><p style={{ display: 'block', marginTop: 20 }}>Conscientes de la importancia del mundo virtual como cauce de gestión, cooperación y transparencia, esta Corporación Municipal apuesta por este espacio virtual por el que os animo a navegar.</p><p style={{ display: 'block', marginTop: 20 }}>Un cordial saludo,</p><p style={{ display: 'block', marginTop: 20 }}>José Carlos Hernández Cansino,</p><p style={{ display: 'block', marginTop: 20 }}>Alcalde de Punta Umbría</p><p style={{ display: 'block', marginTop: 20 }}>Un saludo.</p>
        </div>
        </main>
      </>
    )
}