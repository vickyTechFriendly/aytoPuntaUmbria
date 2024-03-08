"use client"
import styles from './page.module.css'
import Link from "next/link"
import {Cabecera} from '../components/CarruselCabecera'
import {MenuIconos} from '../components/MenuIconos'
import {SliderNoticias} from '../components/SliderNoticias'
import { useEffect, useState, useRef } from 'react'; 
import { usePageContext } from './PageContext.js';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Home() {
  const { setTitle, setDescription, setKeywords } = usePageContext();

    useEffect(() => {
        setTitle('Ayuntamiento de Punta Umbría');
        setDescription('Web oficial del Excmo. Ayuntamiento');
        setKeywords('Punta Umbría, ayuntamiento');
    }, []);

  const facebookEmbedCode = 'TU_CÓDIGO_DE_INTEGRACIÓN_AQUÍ';
  const twitterEmbedCode = `<a class="twitter-timeline" href="https://twitter.com/AytoPuntaUmbria?ref_src=twsrc%5Etfw">Tweets by AytoPuntaUmbria</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`;
  const instagramEmbedCode = 'TU_CÓDIGO_DE_INTEGRACIÓN_AQUÍ';

  const now = new Date();
  const dayNumber = String(now.getDate()).padStart(2, '0');
  const dayName = now.toLocaleDateString('es', { weekday: 'long' }); 
  const monthName = now.toLocaleDateString('es', { month: 'long' }); 

  function formatearFecha(fechaString) {
    const opciones = {month: 'long', day: 'numeric' };
    return new Date(fechaString).toLocaleDateString('es-ES', opciones);
  }

  const [noticias, setNoticias] = useState([]);
  const [eventos, setEventos] = useState([]);  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_NOTICIAS_URL}`)
      .then(response => response.json())
      .then(data => {
        const noticiasOrdenadas = ordenarNoticiasPorFecha(data.data);
        setNoticias(noticiasOrdenadas);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error al llamar a la API:', error);
        setIsLoading(false);
      });
  }, []);

  function ordenarNoticiasPorFecha(noticias) {
    return noticias.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  }

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_AGENDA_URL}`)
      .then(response => response.json())
      .then(data => {
        const eventosOrdenados = ordenarEventosPorFecha(data.data);
        setEventos(eventosOrdenados);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error al llamar a la API:', error);
        setIsLoading(false);
      });
  }, []);

  function ordenarEventosPorFecha(eventos) {
    return eventos.sort((a, b) => new Date(b.fecha_concreta) - new Date(a.fecha_concreta));
  }
  
  const asideRef = useRef(null);
  useEffect(() => {
    if (asideRef.current) {
      const focusableElements = asideRef.current.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
      focusableElements.forEach(element => {
        element.tabIndex = -1;
      });
    }
  }, []);



  /* if (isLoading) return <div>Cargando noticias...</div>;
  if (!noticias.length) return <div>No hay noticias disponibles</div>; */

  return (
    <main className={styles.main}>
      <Cabecera/>
      <MenuIconos/>

      {/* NOTICIAS PARA EL ESCRITORIO */}
      <section className={styles.actualidad}>
      <h1 tabIndex="0" id="contenido">Actualidad</h1>
      <div className={styles.noticias}>
        {noticias.slice(0, 3).map((noticia, index) => (
            <Link href={`/noticias/${noticia.slug}`} className={styles.noticia} key={index}>
              <img src={`${process.env.NEXT_PUBLIC_IMAGENES_URL}/${noticia.imagen_principal}`} alt=""></img>
              <div className={`${styles.informacion} ${styles.informacionGrande}`}>
                <div className={styles.datos} aria-hidden="true">
                  <p className={styles.categoria}>{noticia.categoria}</p>
                  <span>&bull;</span>
                  <p  className={styles.fecha}>{formatearFecha(noticia.fecha)}</p>
                </div>
                <h2 aria-label={noticia.titulo}>{noticia.titulo.length > 50 ? noticia.titulo.slice(0, 50) + '...' : noticia.titulo}</h2>
                <p className={styles.descripcion}>{noticia.breve_descripcion.length > 75 ? noticia.breve_descripcion.slice(0, 75) + '...' : noticia.breve_descripcion}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.mas}><Link href="/noticias">{'Ver más noticias >'}</Link></div>
      </section>

     <SliderNoticias/>
     <Link href="/noticias" className={styles.masMovil}><i className="material-icons" aria-hidden="true">feed</i>Más noticias</Link>

      <section className={styles.actividades}>
        <h1>Agenda</h1>
        <div className={styles.agenda}>
          <aside ref={asideRef} aria-hidden="true">
            <div className={styles.fechaActual} tabIndex="-1"> 
              <div className={styles.semana} tabIndex="-1">{dayName}</div>
              <div className={styles.dia} tabIndex="-1">{dayNumber}</div>
              <div className={styles.mes} tabIndex="-1">{monthName} </div>
            </div>
            <Calendar locale="es-ES" className={styles.calendario} tabIndex="-1"/>
          </aside>
          <article>
          {eventos.slice(0, 2).map((evento, index) => (
            <Link href={`/agenda/${evento.slug}`} key={index}  className={styles.evento}>
              <img src={`${process.env.NEXT_PUBLIC_IMAGENES_URL}/${evento.imagen1}`} alt=""></img>
              <div className={styles.informacion}>
                <h2>{evento.nombre_evento.length > 50 ? evento.nombre_evento.slice(0, 50) + '...' : evento.nombre_evento}</h2>
                
                <div className={styles.categoriaContainer}>
                  {evento.categorias.map((categoria, catIndex) => (
                    <span key={catIndex} className={styles.categoria}>{categoria}</span>
                  ))}
                </div>
                <p className={styles.fecha}><i className="material-icons">calendar_month</i>{evento.fecha_visible}</p>
                {evento.lugar && <p className={styles.ubicacion}><i className="material-icons">location_on</i>{evento.lugar}</p>}
              </div>
            </Link>
          ))}
          </article>
        </div>
        
        <div className={styles.mas}><Link href="/agenda">{'Ver más eventos >'}</Link></div>
        <Link href="/agenda" className={styles.masMovil}><i className="material-icons" aria-hidden="true">feed</i>Más eventos</Link>
      </section>

      <section className={styles.redesSociales}>
        <div className={styles.contenido}> 
          <h1>Redes sociales</h1>
          <div className={styles.redesEmbebidas} tabIndex="-1">
            <div dangerouslySetInnerHTML={{ __html: facebookEmbedCode }} tabIndex="-1"/>
            <div dangerouslySetInnerHTML={{ __html: twitterEmbedCode }} tabIndex="-1"/>
            <div dangerouslySetInnerHTML={{ __html: instagramEmbedCode }} tabIndex="-1"/>
            <div></div>
            <div></div>
          </div>
        </div>
      </section> 
    </main>
  )
}