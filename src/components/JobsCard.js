import React, {useState} from 'react'
import styled from 'styled-components'

const Card = styled.div`
padding: 1em;
margin:1em 0;
border: 1px solid ${props => props.theme.body};
background:${props => props.theme.body};
.card-header{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    width:100%;
    img{width:100%; 
        margin:1em;
        height:100px;
        object-fit:contain;}
    .image-holder{
        max-width:100px;
    }
    .card-header__info{
       margin:1em;
       padding-left:1em;}
}

.card-content{
    display:flex;
    flex-wrap:wrap;
    align-content:center;
    justify-content:space-space-around;
    gap:1em;
    p{
        margin:auto;
        line-height:1.7;
    }
    .link{
        text-transform:uppercase;
        padding:5px;
        border: 1px solid ${props => props.body};
    }
}
`
function JobsCard({job}) {
    const jobDesc = job.description

    const [isDescriptionOpen, setDescriptionOpen] = useState(false)

    const handleClick = (e) =>{
        e.preventDefault()
        setDescriptionOpen(!isDescriptionOpen)
    }

    return (
        <Card>
            <div className="card-header">
                <div className='image-holder'>
                    <img src={job.company_logo} alt="company logo"/>
                </div>
                <div className='card-header__info'>
                    {job.company ? <h3>Company: {job.company}</h3> : <h3>Company Name</h3>}
                    {job.created_at ? <p>Posted: {job.created_at}</p> : <p>Posted at N/A</p>}
                </div>
            </div>
            <div className="card-content">
                {job.title ? <h2>{job.title}</h2> : <h2>Job Title</h2>}
                {job.location ? <p>Location: {job.location}</p> : <p>Location: Unknown</p>}
                {job.description ? <button onClick={handleClick} className='link'>Job description</button> : <p>no job description</p>}
                {job.company_url && <a href={job.company_url} target="_blank" rel="noreferrer" className='link'>Company Website</a>}
                {isDescriptionOpen && <p>{jobDesc}</p>}
            </div>
        </Card>
    )
}

export default JobsCard
