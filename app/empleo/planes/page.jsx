"use client"
import React, { useEffect } from 'react';
import styles from '../empleo.module.css';
import Link from "next/link";
import { usePageContext } from '../../PageContext.js';

export default function Planes() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Planes de Empleo de la Junta de Andalucía - Ayuntamiento de Punta Umbría');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Punta Umbría, empleo');
    }, []);
    return (
      <main>
        <section  className={styles.cabecera}>
          <img src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
          <h1>Empleo y Desarrollo Económico</h1>
        </section>

        <div className={styles.main}>
            <div  className={styles.migasPan}>
                <Link href="/" id="contenido">Inicio</Link>
                <span><i className="material-icons">chevron_right</i></span>
                <Link href="/empleo">Empleo y Desarrollo Económico</Link>
                <span><i className="material-icons">chevron_right</i></span>
                <p>Planes de Empleo de la Junta de Andalucía</p> 
            </div> 
           
            <section>
                <h2><i className="material-icons" aria-hidden="true">description</i>Planes de Empleo de la Junta de Andalucía</h2>

                <p>Ya se conocen las ocupaciones de los 62 puestos de trabajo que el Ayuntamiento de Punta Umbría contratará en base a los programas de empleo de la Junta de Andalucía.</p>
                <p>Estos planes tendrán una inversión de 509.911,06 euros y se llevarán a cabo durante 2019. De estos contratos, 24 corresponden al plan Emple@Joven, con un presupuesto de 195.196,66 euros, 14 con el Emple@ +30, con 118.067,25 euros y 24 para los mayores de 45 años, con 196.647,15 euros.</p>

                <h3>Emplea@Joven</h3>
                <p>El programa pretende poner en marcha actuaciones que contribuyan a mejorar la posición de los jóvenes entre 18 y 29 años en el mercado de trabajo. Se trata de ofrecer una oportunidad laboral a 24 jóvenes a través de un contrato laboral de seis meses a jornada completa. Los interesados deben ser demandantes de empleo en el Servicio Andaluz de Empleo (SAE), estar inscritos en el fichero del Sistema Nacional de Garantía Juvenil y registrarse en las ocupaciones objeto de contratación.</p>
                <p>Los contratos serán de seis meses a jornada completa y serán los siguientes: cuatro peones de jardinería, cuatro trabajadores de personal de limpieza, ocho peones de vías públicas, cuatro vigilantes en general y cuatro maestros de educación infantil.</p>

                <h3>Emple@+30</h3>
                <p>El programa Emple@+30 está destinado a personas desempleadas que tengan entre 30 y 44 años. El plan tendrá un total de 14 beneficiarios que serán contratados por seis meses a jornada completa. Los interesados deben ser demandantes de empleo en el SAE y también estar inscritos en las ocupaciones objeto de contratación.</p>
                <p>El objeto es mejorar la empleabilidad y facilitar la incorporación laboral a través de proyectos. Las ocupaciones a contratar serán una plaza de trabajador social, otra plaza de técnico administrativo general, seis asistentes domiciliarios, dos pintores y empapeladores, un carpintero en general, un arquitecto técnico y dos albañiles.</p>

                <h3>Emple@+45</h3>
                <p>El programa Emple@+45 está destinado a personas desempleadas que tengan más de 45 años. El plan tendrá un total de 24 beneficiarios. Los interesados deben ser demandantes de empleo en el SAE y también estar inscrito en las ocupaciones objeto de contratación. Además, tendrán especial consideración los desempleados de larga duración.</p>
                <p>Las ocupaciones que contratará el Ayuntamiento de Punta Umbría serán dos técnicos administrativos general y dos empleados administrativos en general por siete meses. Además, se contratarán por seis meses cinco pintores y empapeladores, dos carpinteros en general, un fontanero, seis albañiles, dos peones de obras públicas, un carpintero de aluminio, metálico y PVC, dos personal de limpieza y un peón de jardinería.</p>
            </section>
        </div>
      </main>
    )
}  