import { useRouter } from 'next/router'

import Client from '@/components/screens/clients/Client'

const ClientPage = ({ data }) => {
  return <Client data={data} />
}

export async function getServerSideProps(context) {
  const { slug } = context.params
  const res = await fetch(`${process.env.API_URL}/clients?slug=${slug}`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { ...data }, // will be passed to the page component as props
  }
}

export default ClientPage
