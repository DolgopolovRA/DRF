import React from 'react';
import { Link } from 'react-router-dom';

const ProjectItem = ({ project, deleteProject }) => {
    return (
        <thead>
            <tr>
                <td>
                    {project.id}
                </td>
                <td>
                    {project.users}
                </td>
                <td>
                    {project.name}
                </td>
                <td>
                    {project.repo}
                </td>
                <td></td>

                <td><button onClick={() => deleteProject(project.id)} type='button'>Delete</button></td>
            </tr>
        </thead>
    )
}

const ProjectList = ({ projects, deleteProject }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Users
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Repo
                        </th>
                    </tr>
                </thead>
                {projects.map((project) => <ProjectItem project={project} deleteProject={deleteProject} />)}
            </table>
            <Link to='/projects/create'>Create</Link>
        </div>
    )
}
export default ProjectList