import Home from '@/components/screens/home/Home'

const HomePage = ({ projectCards }) => {
  return <Home data={projectCards} />
}

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.API_URL}/projects`)
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

export default HomePage
