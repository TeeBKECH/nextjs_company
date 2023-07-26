import { useRouter } from 'next/router'

import Project from '@/components/screens/projects/Project'

const ProjectPage = ({ data }) => {
  return <Project data={data} />
}

export async function getServerSideProps(context) {
  const { slug } = context.params
  const res = await fetch(`${process.env.API_URL}/projects?slug=${slug}`)
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

export default ProjectPage
