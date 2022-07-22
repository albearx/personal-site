import './Projects.css'
import ValorantTracker from './ValorantTracker'

const Projects = () => {
  const secretVar = process.env.REACT_APP_SECRETVAR
  console.log('environment var:', secretVar)


  return (
    <div className="projects-header">
      <h1>Projects will be added here soon</h1>
      <ValorantTracker />
    </div>
    
  )
}
export default Projects;