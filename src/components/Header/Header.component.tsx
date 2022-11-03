import React from 'react'
import styles from './Header.module.css'
import igniteLogo from '../../assets/ignite-logo.svg'
type Props = {}

export default function Header({}: Props) {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="" />
      <strong>Ignite Feed</strong>
    </header>
  )
}