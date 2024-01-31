import styles from './styles.module.css'

const page = () => {
  return (
    <div className={styles.form}>
      <h1>Add new Book</h1>
      <input className={styles.input} type='text' placeholder='title'  name='title' />
      <input className={styles.input} type='text' placeholder='dese'   name='dese' />
      <input className={styles.input} type='text' placeholder='price'  name='price' />
      <input className={styles.input} type='text' placeholder='cover'  name='cover' />

      <button className={styles.formButton}>Add</button>
    </div>
  )
}

export default page