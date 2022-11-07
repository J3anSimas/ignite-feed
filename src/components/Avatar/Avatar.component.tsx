import styles from './Avatar.module.css'

interface AvatarProps {
  url: string
  hasBorder?: boolean
}
export default function Avatar({
  url,
  hasBorder = true
}: AvatarProps): JSX.Element {
  return (
    <img
      src={url}
      className={
        hasBorder ? styles.avatarWithBorder : styles.avatarWithoutBorder
      }
    />
  )
}
