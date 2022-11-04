import styles from './Avatar.module.css'

type AvatarProps = {
    url: string
    hasBorder?: boolean
}
export default function Avatar({url, hasBorder = true}: AvatarProps) {
  return (
    <img src={url}  className={hasBorder? styles.avatarWithBorder : styles.avatarWithoutBorder} />
  )
}
