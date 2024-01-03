import { useFetchProjects } from '../hooks/fetchProjects';

const Projects = () => {
  const { isLoading, projects } = useFetchProjects();

  return <div>Projects</div>;
};

export default Projects;
