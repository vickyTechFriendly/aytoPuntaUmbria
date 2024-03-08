import Link from "next/link"
import styles from './Footer.module.css'


export function Footer () {

    return(
        <footer className={styles.footer}>
            <div className={`${styles.flex} ${styles.flexCenter}`}>
                <div className={styles.ayto}>
                    {/* <img src="/images/logo 2.png" alt="Logotipo del ayuntamiento de Punta Umbría"></img> */}     
                    <img src="/images/logo footer.png" alt="Logotipo del ayuntamiento de Punta Umbría"></img>
                </div>
                <div className={styles.datos}>
                    <div className={styles.contacto}> 
                        <p><i className="material-icons">location_on</i>Edificio Galeón, Av. de la Marina, 7, 21100 Punta Umbría, Huelva</p>
                        <p><i className="material-icons">phone</i>959 49 51 00</p>
                        <Link href="mailto:info@ayto-puntaumbria.es"><i className="material-icons" aria-hidden="true">mail</i>info@ayto-puntaumbria.es</Link>
                    </div>  

                    <div className={styles.redes}> 
                        <a href="https://www.facebook.com/people/Ayuntamiento-De-Punta-Umbr%C3%ADa/100072512790629/" target="_blank"><img src="/images/facebook.png" alt="Facebook"></img></a>
                        <a href="https://twitter.com/AytoPuntaUmbria?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><img src="/images/twitter.png" alt="X"></img></a>
                        <a href="https://www.instagram.com/ayuntamientodepuntaumbria/?hl=es" target="_blank"><img src="/images/instagram.png" height={15} alt="Instagram"></img></a>
                        <a href="https://www.youtube.com/@ayuntamientodepuntaumbria4887" target="_blank"><img src="/images/youtube.png" alt="YouTube"></img></a>
                    </div>       
                </div>
                <div className={styles.enlacesInteres}> 
                        <p>Enlaces de interés</p>
                        <div className={styles.flex} style={{ gap: '25px' }}>
                            <div className={styles.flexColumn}>
                                <Link href="#">Enlace deinterés</Link>
                                <Link href="#">Enlace deinterés</Link>
                                <Link href="#">Enlace deinterés</Link>
                            </div>
                            <div className={styles.flexColumn}>
                                <Link href="#">Enlace deinterés</Link>
                                <Link href="#">Enlace deinterés</Link>
                                <Link href="#">Enlace deinterés</Link>
                            </div>
                        </div>
                    </div> 
            </div>
            <div className={styles.enlaces}>
                <a href="">Accesibilidad</a>
                <a href="">Aviso legal</a>
                <a href="">Política de privacidad</a>
                <a href="">Mapa web</a>         
            </div>
            <img src="/images/logo girado.png" width={100} className={styles.logo} alt=""></img>  
        </footer>
    )
}