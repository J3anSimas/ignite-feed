import {PencilLine} from 'phosphor-react'

import styles from './Sidebar.module.css'
type Props = {

}

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="Imagem de banner" />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/j3ansimas.png" alt="" />
        <strong>Jean Simas</strong>
        <span>Web Development</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}