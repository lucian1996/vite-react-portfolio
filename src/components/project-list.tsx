import Project from './project'

export default function ProjectList() {
  return (
    <div id="Projects" className="main ">
      <div className="project-frame">
        <Project
          name='Personal Portfolio'
          date='September 2023'
          summary='Modern and lightweight portfolio designed to demonstrate an adept understanding of modern CSS alongside contemporary JavaScript libraries such as Framer Motion'
          image='portfolio'
          techArray={['vite', 'react']}
          githubUrl='https://github.com/lucian1996/vite-react-portfolio'
          textLeft={true}
        />
        <Project
          name='CinDay Computer Database'
          date='July 2023'
          summary='Developed a full-stack React application using Next.js and Prisma to track student laptops and iPads, leveraging Redux state management, automated ORM, and the benefits of server-side rendering (SSR) for improved performance and user experience.'
          image='database'
          techArray={['next', 'react', 'prisma', 'redux']}
          demoUrl='https://computer-database.vercel.app/'
          githubUrl='https://github.com/lucian1996/database-ui'
          textLeft={false}
        />
      </div>
    </div>
  )

}

