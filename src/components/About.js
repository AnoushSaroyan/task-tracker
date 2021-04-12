import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <a href="https://www.youtube.com/watch?v=w7ejDZ8SWv8&ab_channel=TraversyMedia">React JS Crash Course 2021 by Traversy Media</a>
            <br />
            <Link to='/'>Go Back</Link>
        </div>
    )
}

export default About
