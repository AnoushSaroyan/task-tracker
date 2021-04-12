import PropTypes from 'prop-types'
import Button from './Button' 

const Header = (props) => {
    const onClick = (e) => {
        console.log(e)
    }

    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button color='green' text='Add' onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS -> <h1 style={headingStyle}>{props.title}</h1> 
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header