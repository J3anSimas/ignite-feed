import Header from './components/Header/Header.component'
import Post from './components/Post/Post.component'
import './global.css'

import styles from './App.module.css'
import Sidebar from './components/Sidebar/Sidebar.component'

interface PostType {
  id: Number
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
const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/J3anSimas.png',
      name: 'Jean Simas',
      role: 'Web Developer'
    },

    publishedAt: new Date(),

    post: {
      content: [
        {
          type: 'paragraph',
          content: 'Fala galeraa 👋'
        },
        {
          type: 'paragraph',
          content:
            'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
        },
        {
          type: 'link',
          content: 'https://github.com/j3ansimas/ignite-feed'
        }
      ]
    }
  }
]

function App(): JSX.Element {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map((post) => (
            <Post
              author={post.author}
              publishedAt={post.publishedAt}
              post={post.post}
              key={post.id.toString()}
            />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App
