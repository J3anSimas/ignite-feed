import styles from './Comment.module.css'
import {Trash, ThumbsUp} from 'phosphor-react'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/j3ansimas.png" alt="" />
    
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jean Simas</strong>
              <time title="03 de novembro às 14:29" dateTime={Date.now().toString()}>Cerca de 1h atrás</time>
            </div>
              <button title="Deletar comentário">
                <Trash size={24} />
              </button>
          </header>

          <p>Muito bom, parabens</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20}/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}