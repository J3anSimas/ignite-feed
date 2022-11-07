import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { v4 } from 'uuid'
import React, { useState } from 'react'

import Avatar from '../Avatar/Avatar.component'
import { Comment } from '../Comment/Comment.component'
import styles from './Post.module.css'

interface PostProps {
  author: {
    avatarUrl: string
    name: string
    role: string
  }
  publishedAt: Date
  post: {
    content: Array<{
      type: string
      content: string
    }>
  }
}

interface CommentInterface {
  id: string
  author: {
    avatarLink: string
    name: string
  }
  content: string
  publishedAt: Date
  applause: Number
}
export default function Post({
  author,
  post,
  publishedAt
}: PostProps): JSX.Element {
  const [comments, setComments] = useState<CommentInterface[]>([
    {
      id: v4(),
      author: {
        avatarLink: 'https://github.com/j3ansimas.png',
        name: 'Jean Simas'
      },
      content: 'Muito bom maninho',
      publishedAt: new Date(),
      applause: 25
    },
    {
      id: v4(),
      author: {
        avatarLink: 'https://github.com/j3ansimas.png',
        name: 'Jean Simas'
      },
      content: 'Muito bom maninho',
      publishedAt: new Date(),
      applause: 25
    },
    {
      id: v4(),
      author: {
        avatarLink: 'https://github.com/j3ansimas.png',
        name: 'Jean Simas'
      },
      content: 'Muito bom maninho',
      publishedAt: new Date(),
      applause: 25
    }
  ])
  const [newCommentText, setNewCommentText] = useState('')
  const publishedAtFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR
    }
  )

  const publishedAtRelative = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleNewComment(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    setComments([
      ...comments,
      {
        id: v4(),
        author: {
          avatarLink: 'https://github.com/diego3g.png',
          name: 'Diego Rocket'
        },
        content: newCommentText,
        publishedAt: new Date(),
        applause: 0
      }
    ])
    setNewCommentText('')
  }

  function deleteComment(comment: string): void {
    setComments(comments.filter((com) => com.id !== comment))
  }

  function Applaud(comment: string): void {
    setComments(
      comments.map((com) => {
        if (com.id === comment) {
          com.applause = Number(com.applause) + 1
        }
        return com
      })
    )
  }

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
        <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>
          Publicado {publishedAtRelative}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map((line) =>
          line.type === 'paragraph' ? (
            <p key={line.content}>{line.content}</p>
          ) : (
            <p key={line.content}>
              <a href={line.content}>{line.content}</a>
            </p>
          )
        )}
      </div>

      <form className={styles.commentForm} onSubmit={handleNewComment}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          required
        />

        <footer>
          <button type="submit" disabled={newCommentText === ''}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(({ id, applause, author, content, publishedAt }) => (
          <Comment
            key={id}
            id={id}
            applause={applause}
            author={author}
            content={content}
            publishedAt={publishedAt}
            onDeleteComment={deleteComment}
            onApplaud={Applaud}
          />
        ))}
      </div>
    </article>
  )
}
