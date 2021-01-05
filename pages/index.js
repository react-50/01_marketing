import Head from 'next/head'
import MainHeader from './mainHeader/index'
import MainForm from './mainForm/index'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Cake Pops</title>
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <MainHeader />
      <MainForm />
    </div>
  )
}
