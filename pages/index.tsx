import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from 'styles/Home.module.scss';
import { marked } from 'marked';
import README from 'README.md';

const mdText = README.replace(/https:\/\/badg\.vercel\.app/g, '');
const html = marked.parse(mdText);

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Badge</title>
        <meta name="description" content="徽章生成服务" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: html }}
      ></main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
