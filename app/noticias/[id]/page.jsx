"use client"
import Link from "next/link"
import styles from './noticia.module.css'
import React, { useState, useEffect } from 'react';
import {UltimasNoticias} from '../../../components/UltimasNoticias'
import {SliderUltimasNoticias} from '../../../components/SliderUltimasNoticias'
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

export default function Noticia ({ params }) {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Noticias - Ayuntamiento de Punta Umbría');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Punta Umbría, Noticias, actualidad');
    }, []);

  const {id} = params;

  function formatearFecha(fechaString) {
      const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(fechaString).toLocaleDateString('es-ES', opciones);
  }
    
  const [noticias, setNoticias] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_NOTICIAS_URL}`)
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

    return(
        <main className={styles.main}>
            <div className={styles.contenido}>
              <article className={styles.noticia}>  
              {!isLoading && noticias && noticias.length > 0 && (
                <div>
                  <Link href="/noticias" className={styles.migasPan}><i className="material-icons">chevron_left</i>Volver al listado de noticias</Link>
                  <h1 tabIndex="0" id="contenido">{noticias[0].titulo}</h1>
                  <img src={`${process.env.NEXT_PUBLIC_IMAGENES_URL}/${noticias[0].imagen_principal}`} alt={`Imagen de ${noticias[0].titulo}`}></img> 
                  <div className={styles.datos}>
                    <p className={styles.categoria}>{noticias[0].categoria}</p>
                    <div className={styles.derecha}>
                      <p>{formatearFecha(noticias[0].fecha)}</p>
                      <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer"><img style={{ height: '15px' }} src="/images/twitter_n.png" alt="Compartir por twitter"></img></a>
                      <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer"><img style={{ height: '15px' }} src="/images/facebook_n.png" alt="Compartir por facebook"></img></a>
                      <a href={whatsappShareUrl} target="_blank" rel="noopener noreferrer"><img style={{ height: '15px' }} src="/images/whatsapp.png" alt="Compartir por whatsapp"></img></a>
                      <a href={emailShareUrl}><img style={{ width: '15px' }} src="/images/correo.png" alt="Compartir por correo electrónico"></img></a>
                    </div>
                  </div>    
                  <p className={styles.noticiaTexto}>{noticias[0].noticia}</p>  
                </div>
              )}
              </article>     
            </div>

            <section className={styles.ultimasNoticias}>
                  <h2>Últimas noticias</h2>
                  <SliderUltimasNoticias noticiaActualId={id} />
                  <UltimasNoticias noticiaActualId={id} />
            </section>
        </main>
    )
}