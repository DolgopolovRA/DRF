import React from 'react';

const ProjectItem = ({ project }) => {
    return (
        <thead>
            <tr>
                <td>
                    {project.users}
                </td>
                <td>
                    {project.name}
                </td>
                <td>
                    {project.repo}
                </td>
            </tr>
        </thead>
    )
}

const ProjectList = ({ projects }) => {
    return (
        <table>
            <thead>
                <tr>
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
            {projects.map((project) => <ProjectItem project={project} />)}
        </table>
    )
}
export default ProjectList