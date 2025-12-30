import { getServerSession } from 'next-auth';
import styles from './page.module.css';
import Head from 'next/head';
import { redirect } from 'next/navigation';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

export default async function Dashboard() {
  console.log('olá');
  return (
    <main className={styles.container}>
      <Head>
        <title>Meu painel de tarefas</title>
      </Head>

      <h1>Página painel</h1>

      <div>
        <section>
          <div>
            <h1>Qual a sua tarefa?</h1>
            <form></form>
          </div>
        </section>
      </div>
    </main>
  );
}

/* export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  console.log(session);

  if (!session?.user) {
    redirect: {
      destination: '/';
      permanent: false;
    }
  }

  return {
    props: {},
  };
}; */
