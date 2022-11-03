import { Comment } from '../Comment/Comment.component'
import styles from './Post.module.css'

type Props = {
  author: string
  content: string
}
export default function Post({ author, content }: Props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/j3ansimas.png" alt="" className={styles.avatar} />
          <div className={styles.authorInfo}>
            <strong>Jean Simas</strong>
            <span>Web Developer</span>
          </div>
        </div>
          <time title="03 de novembro às 14:29" dateTime={Date.now().toString()}>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉 <a href="">jane.design/doctorcare</a></p>

        <p><a href="">#novoprojeto</a> <a href="">#nlw</a> <a href="">#rocketseat</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário"/>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />

      </div>
    </article>
  )
}