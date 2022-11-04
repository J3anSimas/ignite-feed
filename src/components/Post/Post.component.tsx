import Avatar from '../Avatar/Avatar.component'
import { Comment } from '../Comment/Comment.component'
import styles from './Post.module.css'

type PostProps = {
  author: {
    avatarUrl: string
    name: string
    role: string
  },
  publishedAt: Date,
  post: {
    content: {
      type: string
      content: string
    }[]
  }   
}
export default function Post({ author, post, publishedAt }: PostProps) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar url={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
          <time title={publishedAt.toString()} dateTime={publishedAt.toString()}>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        {
          post.content.map(line => (
            line.type === 'paragraph' ?
            (<p key={line.content}>{line.content}</p>):
            (<p key={line.content}><a href={line.content} >{line.content}</a></p>)
          ))

        }
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