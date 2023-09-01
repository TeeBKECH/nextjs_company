import { useRouter } from 'next/router'

import Service from '@/components/screens/services/Service'

const ServicePage = ({ data }) => {
  return <Service data={data} />
}

export async function getServerSideProps(context) {
  const { id } = context.params
  const res = await fetch(`${process.env.API_URL}/services?id=${id}`)
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

export default ServicePage
