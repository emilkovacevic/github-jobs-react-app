import React, {useState} from 'react'
import styled from 'styled-components'

const Card = styled.div`
margin:1em 0;
border: 1px solid ${props => props.theme.body};
`


function JobsCard({job}) {



    return (
        <Card>
            <div>
               <h3>{job.company}</h3>
               <p>{job.created_at}</p>
            </div>
            <div>
                <h2>{job.title}</h2>
                <p>location:{job.location}</p>
                <a href={job.company.company_url}>Company url</a>
            </div>
        </Card>
    )
}

export default JobsCard
