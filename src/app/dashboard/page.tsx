import { getServerSession } from 'next-auth';
import styles from './page.module.css';
import Head from 'next/head';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const session = await getServerSession();

  if (!session) {
    redirect('/');
  }

  return (
    <main className={styles.container}>
      <Head>
        <title>Meu painel de tarefas</title>
      </Head>

      <h1>Página painel</h1>
      <h2>{session?.user?.name}</h2>
    </main>
  );
}
