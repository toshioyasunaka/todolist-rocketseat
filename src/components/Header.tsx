import rocket from '../assets/rocket.svg'

import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocket} alt="Foguete - Logotipo do TodoList" />
      <div>
        <span className={styles.blue}>to</span><span className={styles.purple}>do</span>
      </div>
    </header>
  )
}