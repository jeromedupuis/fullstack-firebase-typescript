import React from 'react'
import Layout from '../components/Layout'
const Index: React.FunctionComponent = () => {

  const test: number = 'tthis is not a number !';
  return (
    <Layout title="Home">
      <h1>Hello Next.js {test}</h1>
    </Layout>
  )
}
export default Index;
