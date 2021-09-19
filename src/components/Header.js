import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    
    // const onClick = () => {
    //     alert('clicked')
    // }

    return (
        <header className='header'>
            <h1> {props.title}</h1>
            <Button 
                onClick={props.showAddForm} 
                text={`${props.showAddTask ? 'Close': 'Add'}`}
                color={`${props.showAddTask ?'red' : 'green'}`} />
                    
        </header>
    )
}

// CSS in JS
// const headingStyle = {
//     color : 'green',
//     backgroundColor:'#eee',
//     padding : "10px"    
// }

Header.propTypes = {    
    title : PropTypes.string,
}

Header.defaultProps = {
    title : 'Task Tracker'
}


export default Header
