import React from 'react'
import moment from 'moment'

const PostSummary = ({project}) => {
    return (
        <div className="card z-depth-0 post-summary">
                <div className="card content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                    <p className="grey-text">{moment(project.createAt.toDate()).calendar()}</p>
                </div>
            </div>
    )
}

export default PostSummary