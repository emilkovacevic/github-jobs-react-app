import React, {useState} from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

const Card = styled.div`
padding: 1em;
margin:1em 0;
background:${props => props.theme.body};
.card-header{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    width:100%;
    img{width:100%; 
        object-fit:contain;}
    .image-holder{
        max-width:100px;
        max-height:100px;
    }
    .card-header__info{
       margin:1em 0;
       padding-left:1em;}
}

.card-content{
    display:grid;
    grid-template-columns: 1fr;
    align-items:center;
    gap:1em;
    
  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: 2fr 1fr  1fr;
  }
    p{
        margin:auto;
        line-height:1.7;
    }
    .link{
        text-transform:uppercase;
        padding:0 0.5em;
        font-size:1rem;
        text-align:center;
        border:1px solid ${props => props.theme.h2} !important;
        margin:auto 1em;
        border: 1px solid red;
    }
}
.buttons{
    display:flex;
    justify-content:space-between;
    align-content:center;
    
}
.job-description__content{
    border-top:2px solid ${props => props.theme.h2};
}
`
function JobsCard({job}) {
    const [isDescriptionOpen, setDescriptionOpen] = useState(false)

    const handleClick = (e) =>{
        e.preventDefault()
        setDescriptionOpen(!isDescriptionOpen)
    }

    return (
        <Card>
            <div className="card-header">
                <div className='image-holder'>
                    <img src={job.company_logo} alt={job.company}/>
                </div>
                <div className='card-header__info'>
                    {job.company ? <h3>Company: {job.company}</h3> : <h3>Company Name</h3>}
                    {job.created_at ? <p>Posted: {job.created_at}</p> : <p>Posted at N/A</p>}
                </div>
            </div>
            <div className="card-content">
                {job.title ? <h2>{job.title}</h2> : <h2>Job Title</h2>}
                {job.location ? <p>Location: {job.location}</p> : <p>Location: Unknown</p>}
                <div className="buttons">
                    {job.description ? <button onClick={handleClick} className='link'>Job description</button> : <p>no job description</p>}
                    {job.company_url && <a href={job.company_url} target="_blank" rel="noreferrer" className='link'>Company Website</a>}
                </div>
            </div>
            {
                isDescriptionOpen &&
                     <div className='job-description__content'>
                         <ReactMarkdown source={job.description}/>
                     </div>
                }
        </Card>
    )
}

export default JobsCard
