'use client';

import { signOut, useSession } from 'next-auth/react';
import LoginButton from '../LoginButton';
import styles from './styles.module.css';
import Link from 'next/link';

const Header = () => {
  const { data: session, status } = useSession();

  return (
    <header className={styles.header}>
      <section className={styles.content}>
        <nav className={styles.nav}>
          <Link href="/">
            <h1 className={styles.logo}>
              Tarefas<span>+</span>
            </h1>
          </Link>

          <Link href={'/dashboard'} className={styles.link}>
            Meu Painel
          </Link>
        </nav>

        {status === 'loading' ? (
          <></>
        ) : session ? (
          <button className={styles.loginButton} onClick={() => signOut()}>
            Olá, {session?.user?.name}
          </button>
        ) : (
          <LoginButton title={'Acessar'} className={styles.loginButton} />
        )}
      </section>
    </header>
  );
};

export default Header;
