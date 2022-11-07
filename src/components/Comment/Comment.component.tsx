import styles from './Comment.module.css'
import {Trash, ThumbsUp} from 'phosphor-react'
import Avatar from '../Avatar/Avatar.component'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export type CommentProps = {
  id: string,
  author: {
    avatarLink: string
    name: string
  },
  content: string,
  publishedAt: Date,
  applause: Number,
  onDeleteComment: (comment: string) => void
  onApplaud: (comment: string) => void
}
export function Comment({id, author, content, publishedAt, applause, onDeleteComment, onApplaud}: CommentProps) {
  const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
    locale: ptBR
  })

  const publishedAtRelative = formatDistanceToNow(publishedAt, {
    locale: ptBR,
  })

  function handleDeleteComment() {
    onDeleteComment(id)
  }

  function handleApplaud() {
    onApplaud(id)
  }
  return (
    <div className={styles.comment}>
      <Avatar url={author.avatarLink} hasBorder={false}/>
    
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>
              <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>Cerca de {publishedAtRelative} atrás</time>
            </div>
              <button title="Deletar comentário" onClick={handleDeleteComment}>
                <Trash size={24} />
              </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleApplaud}>
            <ThumbsUp size={20}/>
            Aplaudir <span>{applause.toString()}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}