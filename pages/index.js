import React from 'react'
import Head from 'next/head'
import Logo from 'components/logo'
import stylesheet from 'styles/index.sass'

export default () => (
  <div className="root">
    <Head>
      <meta charSet="utf-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <title>Next.js on Heroku</title>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>

    <h1><Logo style={{ height: '1.45rem' }}/> Next.js on LIVE Heroku</h1>

    <p>Deploy <a href="https://zeit.co/blog/next">Next.js</a> universal web apps on <a href="https://www.heroku.com/home">Heroku</a>.</p>

    <p>This <strong>demo deployment on Heroku</strong> is from the repo <a href="https://github.com/mars/heroku-nextjs">mars/heroku-nextjs</a>.</p>

    <p><a href="https://github.com/mars/heroku-nextjs/archive/master.zip">Download this Next.js app</a> as a Heroku-ready template, or follow <a href="https://github.com/mars/heroku-nextjs#production-deployment">Production Deployment</a> to push an existing app to Heroku.</p>
  </div>
)
