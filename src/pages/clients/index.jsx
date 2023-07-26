import Clients from '@/components/screens/clients'

const ClientsPage = ({ clientsCards }) => {
  return <Clients data={clientsCards} />
}

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.API_URL}/clients`)
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

export default ClientsPage
