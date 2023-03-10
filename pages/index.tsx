import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // サブディレクトリデプロイの検証用のなんちゃって環境変数
  const ENV = 'production'
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              {/* img by next - optimized - images  */}
              {/* <h3 style={{ color: 'blue' }}>next-optimized-images とimgタグ：たぬきフェイス！</h3>
              <img
                src="/tanuki_face.png"
                alt="Tanuki face!"
                className={styles.vercelLogo}
                width={100}
                height={100}
              /> */}

              {/* next/image WITH unoptimized */}
              <h3 style={{ color: 'blue' }}>画像最適化せずにImageタグ：葉っぱのせ！たぬき</h3>
              <Image
                src="/leaf_tanuki.png"
                alt="Tanuki with happa!"
                width={100}
                height={100}
                className={styles.vercelLogo}
                priority
              />

              {/* next/image WITH fake loader */}
              {/* <h3 style={{ color: 'blue' }}>画像最適化せずにImageタグ(fake loader)：葉っぱのせ！たぬき</h3>
              <Image
                src="/leaf_tanuki.png"
                alt="Tanuki with happa!"
                width={100}
                height={100}
                className={styles.vercelLogo}
                loader={({ src }) => src}
              /> */}

              {/* img WITHOUT next - optimized - images */}
              {/* <h3 style={{ color: 'blue' }}>next-optimized-imagesを使用せずにimgタグ：たぬきフェイス！</h3>
              <img
                src="/tanuki_face.png"
                alt="Tanuki face!"
                className={styles.vercelLogo}
              /> */}

              {/* next/image WITH fake loader + sub_dir solution */}
              {/* <h3 style={{ color: 'blue' }}>サブディレクトリでも表示したい！：葉っぱのせ！たぬき</h3>
              <Image
                src={`${ENV === 'production' && '/next'}/leaf_tanuki.png`}
                alt="Tanuki with happa!"
                width={100}
                height={100}
                className={styles.vercelLogo}
                loader={({ src }) => src}
              /> */}

              {/* <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              /> */}
            </a>
          </div>
        </div>

        <Link href="/non-dynamic">
          動的じゃないルーティング
        </Link>

        <Link href='dynamic/1'>
          <h4>動的ルーティング：１</h4>
        </Link>

        <Link href='dynamic/2'>
          <h4>動的ルーティング：２</h4>
        </Link>

        <Link href='dynamic/3'>
          <h4>動的ルーティング：３</h4>
        </Link>

        <div className={styles.center}>
          {/* <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          /> */}
          <div className={styles.thirteen}>
            {/* <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            /> */}
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
