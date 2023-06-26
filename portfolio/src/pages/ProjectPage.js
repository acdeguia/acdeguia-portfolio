import construction from '../assets/under-construction.png'
import Header from '../components/Header'

function ProjectPage() {
    return(
        <div >
            <Header />
        <center><img src={construction} alt='image under construction' className='construction'/></center>
        </div>
    )
}

export default ProjectPage