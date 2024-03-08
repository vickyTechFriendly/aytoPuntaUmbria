"use client"
import Link from "next/link"
import styles from './agenda.module.css'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { usePageContext } from './../../PageContext.js';

  const shareUrl = encodeURIComponent('https://tuwebsite.com/pagina-a-compartir');
  const title = "Echa un vistazo a esta gran página web que encontré!";
  const shareText = encodeURIComponent('Echa un vistazo a esta página!');
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`;
  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(`${title} ${shareUrl}`)}`;
  const emailSubject = encodeURIComponent('Mira esta página que encontré');
  const emailBody = encodeURIComponent(`Echa un vistazo a esta página: ${shareUrl}`);
  const emailShareUrl = `mailto:?subject=${emailSubject}&body=${emailBody}`;  
  

export default function Evento ({ params }) {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Agenda - Ayuntamiento de Punta Umbría');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Punta Umbría, ayuntamiento');
    }, []);

  const { id } = params;
  const [noticias, setNoticias] = useState(null);
  const [fullscreenImageSrc, setFullscreenImageSrc] = useState("");
  const fullscreenRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_AGENDA_URL}`)
      .then(response => response.json())
      .then(data => {
        const noticias = data.data;
        const noticiaEncontrada = noticias.find(noticia => noticia.slug === id);

      if (noticiaEncontrada) {
        setNoticias([noticiaEncontrada]); 
        setIsLoading(false);
      } else {
        console.error('No se encontró ninguna noticia con ese slug');
        setIsLoading(false);
      }
    })
    .catch(error => {
      console.error('Error al llamar a la API:', error);
      setIsLoading(false);
    });
  }, [id]); 

  const openFullscreen = (imgSrc) => {
    setFullscreenImageSrc(imgSrc);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

    return(
        <main className={styles.main}>
          <div className={styles.contenido}>
            <article className={styles.noticia}>  
            {!isLoading && noticias && noticias.length > 0 && (
              <div>
                <Link href="/agenda" className={styles.migasPan}><i className="material-icons">chevron_left</i>Volver al listado de eventos</Link>
                <h1 tabIndex="0" id="contenido">{noticias[0].nombre_evento}</h1>
                <img className={styles.imgPrincipal} src={`${process.env.NEXT_PUBLIC_IMAGENES_URL}/${noticias[0].imagen1}`} alt={`Imagen de ${noticias[0].nombre_evento}`}></img>
                <section className={styles.evento}>
                  <div  className={styles.noticiaTexto}>
                      <div className={styles.datos}>
                        <div  className={styles.categorias}>
                          {noticias[0].categorias.map((categoria, index) => (
                            <p key={index} className={styles.categoria}>{categoria}</p>
                          ))} 
                        </div>
                        <div className={styles.derecha}>
                          <p>Compartir en redes sociales:</p>
                          <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer"><img style={{ height: '15px' }} src="/images/twitter_n.png" alt="Compratir por twitter"></img></a>
                          <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer"><img style={{ height: '15px' }} src="/images/facebook_n.png" alt="Compratir por facebook"></img></a>
                          <a href={whatsappShareUrl} target="_blank" rel="noopener noreferrer"><img style={{ height: '15px' }} src="/images/whatsapp.png" alt="Compratir por whatsapp"></img></a>
                          <a href={emailShareUrl}><img style={{ width: '15px' }} src="/images/correo.png" alt="Compratir por correo electrónico"></img></a>
                        </div>
                      </div>
                      
                      <p className={styles.descripcion}>{noticias[0].descripcion}</p>  
                  </div>
                  <div className={styles.detalles}>
                    <h2>Detalles</h2>
                    <hr />
                    {noticias[0].fecha_visible && <p><i className="material-icons">calendar_month</i>{noticias[0].fecha_visible}</p>}
                    {noticias[0].lugar && <p><i className="material-icons">location_on</i>{noticias[0].lugar}</p>}
                    {noticias[0].horario && <p><i className="material-icons">schedule</i>{noticias[0].horario}</p>}
                    {noticias[0].Informacion_extra && <p className={styles.masInformacion}>{noticias[0].Informacion_extra}</p>}
                    {noticias[0].enlace && <p className={styles.masInformacion}><strong>Más información en:</strong> <Link href={`noticias[0].enlace`} target='_blank'>{noticias[0].enlace}</Link></p>}
                    {noticias && noticias[0] && (
                      <div style={{ marginTop: '30px' }}>
                        {noticias[0].pdf1 && (
                          <a href={`${process.env.NEXT_PUBLIC_IMAGENES_URL}/${noticias[0].pdf1}`} target="_blank" rel="noopener noreferrer">
                            Ver pdf "{noticias[0].nombre_pdf1}""
                          </a>
                        )}
                        {noticias[0].pdf2 && (
                          <a href={`${process.env.NEXT_PUBLIC_IMAGENES_URL}/${noticias[0].pdf2}`} target="_blank" rel="noopener noreferrer">
                            {noticias[0].nombre_pdf2}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </section> 
              </div>
            )}

            <section className={styles.galeria}>
                {noticias && noticias[0] && (
                  <>
                    {[noticias[0].imagen1, noticias[0].imagen2, noticias[0].imagen3, noticias[0].imagen4, noticias[0].imagen5, noticias[0].imagen6]
                      .filter(imagen => imagen)
                      .map((imagen, index) => (
                          <div key={index} className={styles.imageContainer} onClick={() => openFullscreen(`${process.env.NEXT_PUBLIC_IMAGENES_URL}/${imagen}`)}>
                            <Image src={`${process.env.NEXT_PUBLIC_IMAGENES_URL}/${imagen}`} alt={`Imagen ${index + 1}`} width={400} height={150}/>
                          </div>
                      ))
                    }
                  </>
                )}
            </section>

            {isFullscreen && (
                <div className={styles.fullscreenOverlay} onClick={closeFullscreen}>
                  <img src={fullscreenImageSrc} alt="Imagen ampliada" className={styles.fullscreenImage} />
                  <button onClick={closeFullscreen} className={styles.closeButton}><i className="material-icons">close</i></button>
                </div>
            )}
            </article>     
          </div>
        </main>
    )
}