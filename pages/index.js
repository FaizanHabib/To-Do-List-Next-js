import Head from 'next/head';
import Todolist from '../component/Todolist';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Todolist />
    </div>
  );
}
