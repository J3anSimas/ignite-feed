import styles from './Header.module.css'
import igniteLogo from '../../assets/ignite-logo.svg'

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="" />
      <strong>Ignite Feed</strong>
    </header>
  )
}
