"use client"
import styles from './economia.module.css'
import Link from "next/link"
import { useState, useEffect, useRef } from 'react';
import { usePageContext } from './../PageContext.js';

export default function Economia() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Economía y Hacienda - Ayuntamiento de Punta Umbría');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Punta Umbría, economía, hacienda,');
    }, []);

    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
      { title: "A006 - Solicitud participación en Licitaciones de Contratación", content: (
        <>
        <div className={styles.flex}>
            <div style={{ width: '60%' }}>
            <p><strong>Objeto: </strong><br />Solicitar la participación en Licitación abierta sobre Procedimiento de Contratación.</p><p><strong>Regulación: </strong><br />Ley de Contratos del Sector Público – Ley 9/2017, de 8 de Noviembre</p><p><strong>Beneficiarios: </strong><br />Todos</p><p><strong>Requisitos: </strong><br />Cumplimiento de las condiciones establecidas en los pliegos específicos para cada Licitación.</p><p><strong>Lugar de presentación: </strong><br />SERVICIO DE ATENCIÓN AL CIUDADANO</p><p><strong>Documentación a presentar: </strong><br />La establecida en los pliegos específicos para cada Licitación.</p>
            </div>
            <div className={styles.contratacion}>
                <p><strong>ÓRGANO GESTOR: CONTRATACIÓN</strong></p>
                <p><i className="material-icons">location_on</i>Pz. de la Constitución, 1</p>
                <p><i className="material-icons">call</i>959 49 51 16</p>
                <p><i className="material-icons" aria-hidden="true">mail</i><Link href="mailto:sac@puntaumbria.es">sac@puntaumbria.es</Link></p>
                <p><i className="material-icons">schedule</i>De lunes a viernes de 9:00 a 13:00</p>

                <p style={{ marginTop: '50px' }}><strong>DOCUMENTO PARA DESCARGAR</strong></p>
                <p><i className="material-icons" aria-hidden="true">article</i><Link href="http://www.puntaumbria.es/opencms/export/sites/default/puntaumbria/galeria/download/solicitud_participacion_en_procedimiento_contratacion1536307256995.pdf" target='_blank'> Solicitud participación en Procedimiento Contratación</Link></p>
            </div>
        </div>
        </>
      ) },
      { title: "IIVT Plusvalías", content: (
        <>
          <div className={styles.flex}>
            <div style={{ width: '60%' }}>
            <p><strong>Objeto: </strong><br />Impuesto Incremento Valor de Terrenos de Natureleza Urbana</p><p><strong>Regulación: </strong><br />Ordenanza fiscal</p><p><strong>Beneficiarios: </strong><br />Interesado</p><p><strong>Requisitos: </strong><br />Según normativa aplicable</p><p><strong>Lugar de presentación: </strong><br />Servicio de Atención al Ciudadano</p><p><strong>Documentación a presentar: </strong><br />La establecida en los pliegos específicos para cada Licitación.</p><p><strong>Plazo de presentación: </strong><br />Según normativa vigente</p><p><strong>Vigencia de las condiciones expuestas: </strong><br />Según normativa vigente</p><p><strong>Efectos del silencio administrativo: </strong><br />Según normativa vigente</p>
            </div>
            <div className={styles.contratacion}>
                <p><strong>ÓRGANO GESTOR: RENTAS E INSPECCIÓN DE TRIBUTOS</strong></p>
                <p><i className="material-icons">location_on</i>Av. de la Marina, 7 - Edificio Galeón</p>
                <p><i className="material-icons">call</i>959 49 51 03</p>
                <p><i className="material-icons" aria-hidden="true">mail</i><Link href="mailto:sac@puntaumbria.es">sac@puntaumbria.es</Link></p>
                <p><i className="material-icons">schedule</i>De 9:00 a 13:30</p>

                <p style={{ marginTop: '50px' }}><strong>IMPRESOS</strong></p>
                <p><i className="material-icons" aria-hidden="true">article</i><Link href="http://www.puntaumbria.es/opencms/export/sites/default/puntaumbria/galeria/download/modelo_solicitud_declaracion_plusvalia_vigente1640169105793.pdf" target='_blank'>  Solicitud Plusvalías</Link></p>
                <p><i className="material-icons" aria-hidden="true">article</i><Link href="http://www.puntaumbria.es/opencms/export/sites/default/puntaumbria/galeria/download/documentacion_plusvalia_vigente1640169117154.pdf" target='_blank'> Documentación Plusvalías</Link></p>
                <p><i className="material-icons" aria-hidden="true">article</i><Link href="http://www.puntaumbria.es/opencms/export/sites/default/puntaumbria/galeria/download/modelo_solicitud_prorroga_plusvalia1554879811802.pdf" target='_blank'> Solicitud de prórroga IIVT</Link></p>
                <p><i className="material-icons" aria-hidden="true">article</i><Link href="http://www.puntaumbria.es/opencms/export/sites/default/puntaumbria/galeria/download/documento_adjunto1538335036016.pdf" target='_blank'>Documento por Causa de Muerte</Link></p>
            </div>
        </div>
        </>
      ) },
      { title: "Solicitudes diversas a Tesorería", content: (
        <>
        <div className={styles.flex}>
            <div style={{ width: '60%' }}>
            <p><strong>Objeto: </strong><br />Solicitudes diversas dirigidas a la Tesorería del Ayto. de Punta Umbría.<br></br>Descargar el impreso correspondiente, complimentar y presentar en SAC o a través de la Sede Electrónica por Instancia General, en la dirección <Link href="https://umbria.sedelectronica.es" target='_blank'>https://umbria.sedelectronica.es</Link> </p><p><strong>Lugar de presentación: </strong><br />Servicio de Atención al Ciudadano</p>
            </div>
            <div className={styles.contratacion}>
                <p><strong>ÓRGANO GESTOR: TESORERÍA</strong></p>
                <p><i className="material-icons">location_on</i>Pz. de la Constitución, 1</p>
                <p><i className="material-icons">call</i>959 49 51 48</p>
                <p><i className="material-icons" aria-hidden="true">mail</i><Link href="mailto:sac@puntaumbria.es">sac@puntaumbria.es</Link></p>
                <p><i className="material-icons">schedule</i>De 9:00 a 14:00</p>

                <p style={{ marginTop: '50px' }}><strong>IMPRESOS</strong></p>
                <p><i className="material-icons" aria-hidden="true">article</i><Link href="https://view.officeapps.live.com/op/view.aspx?src=http%3A%2F%2Fwww.puntaumbria.es%2Fopencms%2Fexport%2Fsites%2Fdefault%2Fpuntaumbria%2Fgaleria%2Fdownload%2Forden_de_domiciliacion1697636834703.doc&wdOrigin=BROWSELINK" target='_blank'> 8. Orden de Domiciliación</Link></p>
                <p><i className="material-icons" aria-hidden="true">article</i><Link href="http://www.puntaumbria.es/opencms/export/sites/default/puntaumbria/galeria/download/1_solicitud_de_fraccionamiento1410521069348.pdf" target='_blank'>1. Solicitud de Fracccionamiento de Liquidaciones / Recibos</Link></p>
                <p><i className="material-icons" aria-hidden="true">article</i><Link href="http://www.puntaumbria.es/opencms/export/sites/default/puntaumbria/galeria/download/6_solicitud_de_compensacion_de_deudas1408538453908.pdf" target='_blank'> 6. Solicitud de Compensación de Deudas</Link></p>
                <p><i className="material-icons" aria-hidden="true">article</i><Link href="http://www.puntaumbria.es/opencms/export/sites/default/puntaumbria/galeria/download/5_datos_bancarios_para_pagos1408538455262.pdf" target='_blank'> 5. Modelo de Certificado de Cuenta Bancaria</Link></p>
                <p><i className="material-icons" aria-hidden="true">article</i><Link href="http://www.puntaumbria.es/opencms/export/sites/default/puntaumbria/galeria/download/4_solicitud_de_devolucion_ingreso_indebido1408538456594.pdf" target='_blank'> 4. Solicitud de Devolución de Ingresos Indebidos</Link></p>
                <p><i className="material-icons" aria-hidden="true">article</i><Link href="http://www.puntaumbria.es/opencms/export/sites/default/puntaumbria/galeria/download/3_aval_para_fraccionamientos_y_aplazamientos1408538457939.pdf" target='_blank'> 3. Modelo de Aval para fraccionamientos y aplazamientos</Link></p>
                <p><i className="material-icons" aria-hidden="true">article</i><Link href="http://www.puntaumbria.es/opencms/export/sites/default/puntaumbria/galeria/download/2_solicitud_de_aplazamiento1408538459465.pdf" target='_blank'> 2. Solicitud de Aplazamiento de pago de Liquidaciones / Recibos</Link></p>
            </div>
        </div>
        </>
      ) }

    ];

    const handleTabClick = (index) => {
      setActiveTab(index);
    }
  

    return (
      <main>
        <section className={styles.cabecera}>
          <img src="https://images.unsplash.com/photo-1618044733300-9472054094ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RWNvbm9tJUMzJUFEYXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          <h1>Economía y Hacienda</h1>
        </section>

        <section className={styles.main}>
                <h2>Impresos de solicitudes dirigidas a Tesorería.</h2> 
                <ul className={styles.opciones}>
                    <li>
                        <Link href="http://www.puntaumbria.es/opencms/opencms/puntaumbria/galeria/download/galeria_economia-y-hacienda/1_solicitud_de_fraccionamiento1410520464219.pdf" target='_blank' className={styles.opcion} id="contenido">1. Solicitud de Fracccionamiento de Liquidaciones / Recibos<i className="material-icons" aria-label="Abrir en pestaña nueva">open_in_new</i></Link>
                    </li>
                    <li>
                        <Link href="http://www.puntaumbria.es/opencms/opencms/puntaumbria/galeria/download/2_solicitud_de_aplazamiento1408538459465.pdf" target='_blank' className={styles.opcion}>2. Solicitud de Aplazamiento de pago de Liquidaciones / Recibos<i className="material-icons" aria-label="Abrir en pestaña nueva">open_in_new</i></Link>
                    </li>
                    <li>
                        <Link href="http://www.puntaumbria.es/opencms/opencms/puntaumbria/galeria/download/3_aval_para_fraccionamientos_y_aplazamientos1408538457939.pdf" target='_blank' className={styles.opcion}>3. Modelo de Aval para fraccionamientos y aplazamientos<i className="material-icons" aria-label="Abrir en pestaña nueva">open_in_new</i></Link>
                    </li>
                    <li>
                        <Link href="http://www.puntaumbria.es/opencms/opencms/puntaumbria/galeria/download/4_solicitud_de_devolucion_ingreso_indebido1408538456594.pdf" target='_blank' className={styles.opcion}>4. Solicitud de Devolución de Ingresos Indebidos<i className="material-icons" aria-label="Abrir en pestaña nueva">open_in_new</i></Link>
                    </li>
                    <li>
                        <Link href="http://www.puntaumbria.es/opencms/opencms/puntaumbria/galeria/download/5_datos_bancarios_para_pagos1408538455262.pdf" target='_blank' className={styles.opcion}>5. Modelo de Certificado de Cuenta Bancaria<i className="material-icons" aria-label="Abrir en pestaña nueva">open_in_new</i></Link>
                    </li>
                    <li>
                        <Link href="http://www.puntaumbria.es/opencms/opencms/puntaumbria/galeria/download/6_solicitud_de_compensacion_de_deudas1408538453908.pdf" target='_blank' className={styles.opcion}>6. Solicitud de Compensación de Deudas<i className="material-icons" aria-label="Abrir en pestaña nueva">open_in_new</i></Link>
                    </li>
                    <li>
                        <Link href="http://www.puntaumbria.es/opencms/opencms/puntaumbria/galeria/download/7_solicitud_de_compensacion_de_deudas_personal_ayto1408538452559.pdf" target='_blank' className={styles.opcion}>7. Solicitud de Compensación de Deudas para personal de Ayto.de Punta Umbría<i className="material-icons" aria-label="Abrir en pestaña nueva">open_in_new</i></Link>
                    </li>
                </ul>

                <h2>Trámites destacados</h2> 

                <div id="pestanas" className={styles.pestanas}>
                    {tabs.map((tab, index) => (
                        <a key={index} className={index === activeTab ? styles.active : ''} onClick={() => handleTabClick(index)} onKeyDown={(e) => e.key === 'Enter' && handleTabClick(index)} tabindex="0" id="contenido">
                        {tab.title}
                    </a>
                    ))}
                </div>

                {tabs.map((tab, index) => (
                <div key={index} className={styles.contenidoPestana} style={{ display: index === activeTab ? 'block' : 'none' }}>
                <p>{tab.content}</p>
                </div>
                ))}
        </section>    
      </main>
    )
}