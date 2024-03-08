"use client"
import styles from '../pages.module.css'
import Link from "next/link"
import { useState, useEffect, useRef } from 'react';
import { usePageContext } from '../PageContext.js';

export default function Plenos() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Plenos - Ayuntamiento de Punta Umbría');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Punta Umbría');
    }, []);

    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
      { title: "Vídeos", content: (
        <>
          <p>Desde el 25 de noviembre de 2015 las sesiones plenarias se emiten en directo por internet a través del canal que el Ayuntamiento de Punta Umbría dispone en la plataforma YouTube.</p><p style={{ marginTop: '20px' }}>Una vez finalizada la emisión en directo, los vídeos son subidos automáticamente al canal, teniendo en cuenta que este proceso no es inmediato, ya que YouTube necesita tiempo de procesamiento para ponerlo en línea, que obviamente dependerá de la duración de la sesión correspondiente.</p>
          <p className={styles.enlacePestanas}><i className="material-icons">smart_display</i>
            <Link href="https://www.youtube.com/watch?v=tJKjzb_jV-s" target="_blank" >Pleno municipal 05/04/2016</Link>
          </p>
          <p className={styles.enlacePestanas}><i className="material-icons">smart_display</i>
            <Link href="https://www.youtube.com/watch?v=lTk-zLsXIa8" target="_blank" >Pleno municipal 23/02/2016</Link>
          </p>
          <p className={styles.enlacePestanas}><i className="material-icons">smart_display</i>
            <Link href="https://www.youtube.com/watch?v=QRqMVu3_xNo" target="_blank" >Pleno municipal 27/01/2016</Link>
          </p>
        </>
      ) },
      { title: "Audios", content: (
        <>
          <p>Puedes escuchar los plenos en: <Link href="http://ondapuntaradio.net/album/plenos-2015/" target="_blank" className={styles.enlacePestanas2}>http://ondapuntaradio.net/album/plenos-2015/</Link></p>
        </>
      ) },
      { title: "Convocatorias", content: (
        <>
          <p><strong>Convocatorias de Plenos 2014</strong></p>
          <p className={styles.enlacePestanas}><i className="material-icons">article</i>
            <Link href="http://www.puntaumbria.es/opencms/opencms/puntaumbria/galeria/download/galeria_actas-de-plenos-2014/convocatoria_pleno_e_24_02_20141392884353520.pdf" target="_blank" >Convocatoria Pleno Extraordinario 24 de Febrero de 2014</Link>
          </p>
          <p className={styles.enlacePestanas}><i className="material-icons">article</i>
            <Link href="http://www.puntaumbria.es/opencms/opencms/puntaumbria/galeria/download/galeria_actas-de-plenos-2014/convocatoria_pleno_o._10_02_20141391599766872.pdf" target="_blank" >Convocatoria Pleno Ordinario 10 de Febrero de 2014</Link>
          </p>
          <p className={styles.enlacePestanas}><i className="material-icons">article</i>
            <Link href="http://www.puntaumbria.es/opencms/opencms/puntaumbria/galeria/download/galeria_actas-de-plenos-2014/convocatoria_pleno_e._03_02_20141391086945605.pdf" target="_blank" >Convocatoria Pleno Extraordinario 3 de Febrero de 2014</Link>
          </p>
          <p className={styles.enlacePestanas}><i className="material-icons">article</i>
            <Link href="http://www.puntaumbria.es/opencms/opencms/puntaumbria/galeria/download/galeria_actas-de-plenos-2014/convocatoria_pleno_o._31_03_20141395922299146.pdf" target="_blank" >Convocatoria Pleno Ordinario 31 de Marzo de 2014</Link>
          </p>
          <p className={styles.enlacePestanas}><i className="material-icons">article</i>
            <Link href="http://www.puntaumbria.es/opencms/opencms/puntaumbria/galeria/download/galeria_actas-de-plenos-2014/convocatoria_pleno_e_29_04_20141396528713766.pdf" target="_blank" >Convocatoria Pleno Extraordinario 29 de Abril de 2014</Link> - Mesas Electorales
          </p>
          <p className={styles.enlacePestanas}><i className="material-icons">article</i>
            <Link href="http://www.puntaumbria.es/opencms/opencms/puntaumbria/galeria/download/galeria_actas-de-plenos-2014/convocatoria_pleno_e_21_04_20141397132074124.pdf" target="_blank" >Convocatoria Pleno Extraordinario 21 de Abril de 2014</Link>
          </p>
          <p className={styles.enlacePestanas}><i className="material-icons">article</i>
            <Link href="http://www.puntaumbria.es/opencms/opencms/puntaumbria/galeria/download/galeria_actas-de-plenos-2014/convocatoria_pleno_o._11_06_20141402058533429.pdf" target="_blank" >Convocatoria Pleno Ordinario 11 de Junio de 2014</Link>
          </p>
          <p className={styles.enlacePestanas}><i className="material-icons">article</i>
            <Link href="http://www.puntaumbria.es/opencms/opencms/puntaumbria/galeria/download/galeria_actas-plenos-2014/convocatoria_pleno_o._08_08_20141407237980112.pdf" target="_blank" >Convocatoria Pleno Ordinario 8 de Agosto de 2014</Link>
          </p>
          <p className={styles.enlacePestanas}><i className="material-icons">article</i>
            <Link href="http://www.puntaumbria.es/opencms/opencms/puntaumbria/galeria/download/galeria_actas-de-plenos-2014/convocatoria_pleno_o._10_10_20141412684865678.pdf" target="_blank" >Convocatoria Pleno Ordinario 10 de Octubre de 2014</Link>
          </p>
          <p className={styles.enlacePestanas}><i className="material-icons">article</i>
            <Link href="http://www.puntaumbria.es/opencms/opencms/puntaumbria/galeria/download/galeria_actas-de-plenos-2014/convocatoria_pleno_o._05_12_20141417693379560.pdf" target="_blank" >Convocatoria Pleno Ordinario 5 de Diciembre de 2014</Link>
          </p>
          <p style={{ marginTop: '50px' }}><strong>Convocatorias de Plenos 2015</strong></p>
          <p className={styles.enlacePestanas}><i className="material-icons">article</i>
            <Link href="http://www.puntaumbria.es/opencms/opencms/puntaumbria/galeria/download/galeria_actas-de-plenos-2015/pleno_extraordinario_130120151421065161955.pdf" target="_blank" >Convocatoria Pleno Extraordinario 13 de Enero de 2015</Link>
          </p>
          <p className={styles.enlacePestanas}><i className="material-icons">article</i>
            <Link href="http://www.puntaumbria.es/opencms/opencms/puntaumbria/galeria/download/galeria_actas-de-plenos-2015/pleno_extraordinario_170320151426581134047.pdf" target="_blank" >Convocatoria Pleno Extraordinario 17 de Marzo de 2015</Link>
          </p>
        </>
      ) },
      { title: "Actas", content: (
        <>
          <p><strong>Actas de Plenos 2013</strong></p>
          <p className={styles.enlacePestanas}><i className="material-icons">article</i>
            <Link href="https://www.youtube.com/watch?v=tJKjzb_jV-s" target="_blank" >Acta Pleno Extraordinario 28 de Junio de 2013</Link>
          </p>
          <p className={styles.enlacePestanas}><i className="material-icons">article</i>
            <Link href="https://www.youtube.com/watch?v=lTk-zLsXIa8" target="_blank" >Acta Pleno Extraordinario 7 de Octubre de 2013</Link>
          </p>
          <p className={styles.enlacePestanas}><i className="material-icons">article</i>
            <Link href="https://www.youtube.com/watch?v=QRqMVu3_xNo" target="_blank" >Acta Pleno Extraordinario 22 de Julio de 2013</Link>
          </p>
          <p className={styles.enlacePestanas} style={{ marginLeft: '20px' }}><i className="material-icons">article</i>
            <Link href="https://www.youtube.com/watch?v=QRqMVu3_xNo" target="_blank" >Anexo II. Pleno Extraordinario 22 de Julio de 2013</Link>
          </p>
          <p className={styles.enlacePestanas}><i className="material-icons">article</i>
            <Link href="https://www.youtube.com/watch?v=QRqMVu3_xNo" target="_blank" >Acta Pleno Extraordinario 10 de Julio de 2013</Link>
          </p>
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
          <h1>Plenos</h1>
        </section>

        <section className={styles.main}>
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