import Head from 'next/head'
import Tweet from './tweet'
import path from 'path'
import fs from 'fs'

export default function Home({tweets}:  {tweets:{text:string, author:string, date:string, index:number}[]}) {
  return (
    <>
      <Head>
        <title>Twitter Clone by SG</title>
      </Head>
          <h1>Hello from SG</h1>
          {
            tweets.map((t: {text:string, author:string, date:string, index:number})=>
              <Tweet text={t.text} author={t.author} date={t.date} key={t.index}/>
            )
          }
    </>
  )
}

export async function getServerSideProps(){
  const filePath = path.join(process.cwd(), 'data.json')
  const tweets = JSON.parse(fs.readFileSync(filePath).toString())
  console.log(tweets);
  return {
    props: {tweets}
  }
}