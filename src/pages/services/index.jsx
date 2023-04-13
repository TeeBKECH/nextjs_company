import Services from '@/components/screens/services/Services'

const ServicesPage = ({ servicesCards }) => {
  return <Services data={servicesCards} />
}

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.API_URL}/services`)
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

export default ServicesPage
