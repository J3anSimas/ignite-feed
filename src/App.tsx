import { useState } from 'react'
import Header from './components/Header/Header.component'
import Post from './components/Post/Post.component'
import './global.css'

import styles from './App.module.css'
import Sidebar from './components/Sidebar/Sidebar.component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post 
            author="Diego Fernandes"
            content="Qui ea anim excepteur et. Commodo sint minim mollit consequat laboris labore esse qui nulla deserunt elit. Voluptate aute velit consectetur voluptate ut cupidatat ut et dolor quis. Magna aliqua est sunt magna laborum. Non fugiat sunt dolore qui nisi mollit ullamco ad dolore deserunt. Et exercitation ex proident ullamco mollit duis dolor do aliqua nostrud."
          />
          <Post 
            author="Diego Fernandes"
            content="Qui ea anim excepteur et. Commodo sint minim mollit consequat laboris labore esse qui nulla deserunt elit. Voluptate aute velit consectetur voluptate ut cupidatat ut et dolor quis. Magna aliqua est sunt magna laborum. Non fugiat sunt dolore qui nisi mollit ullamco ad dolore deserunt. Et exercitation ex proident ullamco mollit duis dolor do aliqua nostrud."
          />
          <Post 
            author="Diego Fernandes"
            content="Qui ea anim excepteur et. Commodo sint minim mollit consequat laboris labore esse qui nulla deserunt elit. Voluptate aute velit consectetur voluptate ut cupidatat ut et dolor quis. Magna aliqua est sunt magna laborum. Non fugiat sunt dolore qui nisi mollit ullamco ad dolore deserunt. Et exercitation ex proident ullamco mollit duis dolor do aliqua nostrud."
          />

        </main>
      </div>
    </div>
  )
}

export default App
