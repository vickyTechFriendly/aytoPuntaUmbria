import styles from './Buscador.module.css'

export function Busqueda () {

    return(
        <div className={styles.buscador}>
            <input type="text" placeholder='¿Qué buscas?'/>
            <button><i className="material-icons" aria-label="Buscar">search</i></button>
        </div>
    )
}