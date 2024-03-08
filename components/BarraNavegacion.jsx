"use client"
import Link from "next/link"
import styles from './BarraNavegacion.module.css'
import { useEffect, useState } from 'react'; 

export function BarraNavegacion () {

    const [tiempo, setTiempo] = useState(null);
  
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=Punta Umbría&appid=6083d072cd0e5e27dd2af63e993b86f0&units=metric&lang=es');
            const data = await response.json();

            const fechaHoy = new Date().toISOString().split('T')[0];
            const temperaturasDelDia = data.list.filter(item => 
                new Date(item.dt_txt).toISOString().split('T')[0] === fechaHoy
            );

            const maxima = Math.max(...temperaturasDelDia.map(item => item.main.temp_max));
            const minima = Math.min(...temperaturasDelDia.map(item => item.main.temp_min));
            const icono = temperaturasDelDia[0]?.weather[0]?.icon; // Usar el ícono del primer registro del día

            setTiempo({ maxima, minima, icono });
        };

        fetchData();
    }, []);    

    return(
        <nav className={styles.barraSuperior}>
            
            <Link href="#contenido" className={styles.skipLink}>Saltar al contenido principal</Link>
            <ul>
                <li><Link href="/contacto"><i className="material-icons" aria-label="Contacto">email</i></Link></li>
                <li><Link href="/accesibilidad"><i className="material-icons" aria-label="Accesibilidad">accessible</i></Link></li>
            </ul>

            <div>
                {tiempo && ( 
                    <div className={styles.meteorologia}>
                        {tiempo.icono && <img src={`http://openweathermap.org/img/w/${tiempo.icono}.png`} alt=""></img>}
                        <p>{Math.round(tiempo.minima)} °C - {Math.round(tiempo.maxima)} °C</p>
                    </div>
                )} 
            </div>

            <div className={styles.redes}> 
                <a href="https://www.facebook.com/people/Ayuntamiento-De-Punta-Umbr%C3%ADa/100072512790629/" target="_blank"><img src="/images/facebook.png" height={15} alt="Facebook"></img></a>
                <a href="https://twitter.com/AytoPuntaUmbria?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" ><img src="/images/twitter.png" height={15} alt="X"></img></a>
                <a href="https://www.instagram.com/ayuntamientodepuntaumbria/?hl=es" target="_blank"><img src="/images/instagram.png" height={15} alt="Instagram"></img></a>
                <a href="https://www.youtube.com/@ayuntamientodepuntaumbria4887" target="_blank"><img src="/images/youtube.png" width={18} alt="Youtube"></img></a>
            </div> 
        </nav>
    )
}