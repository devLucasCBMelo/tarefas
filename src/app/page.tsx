import Image from 'next/image';
import styles from './page.module.css';

import heroImg from '../../public/assets/hero.png';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.logoContent}>
        <div>
          <Image className={styles.hero} alt="Logo Tarefas+" src={heroImg} priority />
        </div>

        <h1 className={styles.title}>
          Sistema feito para organizar <br />
          seus estudos e tarefas
        </h1>

        <div className={styles.infoContent}>
          <section className={styles.box}>
            <span className={styles.spanText}>+12 posts</span>
          </section>

          <section className={styles.box}>
            <span className={styles.spanText}>+12 posts</span>
          </section>
        </div>
      </main>
    </div>
  );
}
