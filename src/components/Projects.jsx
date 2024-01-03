import { useFetchProjects } from '../hooks/fetchProjects';

const Projects = () => {
  const { isLoading, projects } = useFetchProjects();

  if(isLoading){
    return <section className='projects'>
      <div className="loading"></div>
    </section>
  }

  return <section className='projects'>
    <div className="title">
      <h2>Projects</h2>
      <div className="title-underline"></div>
      <div className="projects-center">
        {projects.map(({id, img, url, title})=>(
          <a href={url} key={id} target='_blank' rel='noreferrer' className='project'>
            <img src={img} alt={title} className='image' />
            <h5>{title}</h5>
          </a>
        ))}
      </div>
    </div>
  </section>;
};

export default Projects;
