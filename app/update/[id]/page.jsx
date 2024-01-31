
import styles from "./sytles.module.css"

const page = ({params}) => {
  return (
    <div className={styles.form}>
      <h1>Update Book number {params.id}</h1>
      <input className={styles.input} type='text' placeholder='title'  name='title' />
      <input className={styles.input} type='text' placeholder='dese'   name='dese' />
      <input className={styles.input} type='text' placeholder='price'  name='price' />
      <input className={styles.input} type='text' placeholder='cover'  name='cover' />

      <button className={styles.formButton}>Update</button>
    </div>
  )
}

export default page