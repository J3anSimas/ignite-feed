import { PencilLine } from 'phosphor-react'
import Avatar from '../Avatar/Avatar.component'

import styles from './Sidebar.module.css'

export default function Sidebar(): JSX.Element {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt="Imagem de banner"
      />

      <div className={styles.profile}>
        <Avatar url="https://github.com/j3ansimas.png" />
        <strong>Jean Simas</strong>
        <span>Web Development</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
