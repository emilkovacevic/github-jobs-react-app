import React, {useState} from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

const Card = styled.div`
padding: 1em;
background:${props => props.theme.body};
max-width: 1280px;
margin: 1rem auto;
display:grid;
grid-template-columns: 1fr 1fr;
gap:1em;
 @media screen and (min-width: 960px) {
    grid-template-columns: 1fr;
 }

*> {
    width: 100%;
}
.card-header{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    gap:1em;
    > *{
        width:100%;
        padding: 5px;
    }
     .image-holder{
        margin:1em;
        max-width:300px;
        max-height:100px;
        display:flex;
        gap:1em;
        justify-content:space-between;
        align-items:center;
    }
    img{width:100%; 
        height:100%;
        border-radius:10px;
        padding:1em;
        background:white;
        object-fit:contain;}
}

.card-content{    
    display:grid;
    text-align:center;
    background:${props => props.theme.appBg};
    h2{
        margin-top:2em;
    }
    .link{
        text-align:left;
        text-transform:uppercase;
        font-size:1rem;
        padding:0 10px;
    }
}
.buttons{
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    
}

h2,h3{
    text-align:center;
    color: ${props => props.theme.p};
    }
@media screen and (min-width: 600px) {
grid-template-columns: 1fr 1fr;
}

@media screen and (min-width: 960px) {
grid-template-columns: 1fr 1fr 1fr;
}

@media screen and (min-width: 1280px) {
grid-template-columns: 1fr 2fr;
}
`

const CardOpen = styled.div`
    max-width: 1280px;
    margin: 1rem auto;
    background: ${props => props.theme.p};
`

function JobsCard({job}) {
    const [isDescriptionOpen, setDescriptionOpen] = useState(false)

    const handleClick = (e) =>{
        e.preventDefault()
        setDescriptionOpen(!isDescriptionOpen)
    }

    return (
        <div>
        <Card>
            <div className="card-header">
                <div className='image-holder'>
                    <img src={job.company_logo} alt={job.company}/>
                    {job.company ? <h3>{job.company}</h3> : <h3>Company Name</h3>}
                </div>
                <div className='card-header__info'>
                    {job.created_at ? <p>Posted: {job.created_at}</p> : <p>Posted at N/A</p>}
                    {job.location ? <p>Location: {job.location}</p> : <p>Location: Unknown</p>}
                </div>
            </div>
            <div className="card-content">
                {job.title ? <h2>{job.title}</h2> : <h2>Job Title</h2>}
                <div className="buttons">
                    {job.description ? <button onClick={handleClick} className='link'>Job description</button> : <p>no job description</p>}
                    {job.company_url && <a href={job.company_url} target="_blank" rel="noreferrer" className='link'>Company Website</a>}
                </div>
            </div>
            
        </Card>
      {
                isDescriptionOpen &&
                    <CardOpen >
                        {job.description}
                    </CardOpen>
                }
        </div>
    )
}

export default JobsCard
