import Home from '@/components/screens/home/Home'

const HomePage = ({ projectCards, servicesCards }) => {
  return (
    <Home
      data={projectCards}
      servicesCards={servicesCards}
    />
  )
}

export async function getServerSideProps(context) {
  const projectsRes = await fetch(`${process.env.API_URL}/projects`)
  const servicesRes = await fetch(`${process.env.API_URL}/services`)
  const projectsData = await projectsRes.json()
  const servicesData = await servicesRes.json()

  // if (data) {
  //   return {
  //     notFound: true,
  //   }
  // }

  return {
    props: { ...projectsData, ...servicesData }, // will be passed to the page component as props
  }
}

export default HomePage
