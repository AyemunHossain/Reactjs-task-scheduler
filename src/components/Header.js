import PropTypes from 'prop-types';
import { Button } from './Button';

const Header = (props) => {
    return (
        <header className='header'>
            <h1>
                Hello {props.title}
            </h1>
            <Button color={props.addTaskStatus ? 'red' : 'green'} text={props.addTaskStatus ? 'Close' : 'Add'} onClick={props.onClickAdd} />

        </header>
    )
}


//using default proptype
Header.defaultProps = {
    name: 'Task Tracker'
}

//using proptype
Header.propTypes = {
    title: PropTypes.string.isRequired, //making this mus required
    name: PropTypes.string
}

//use styling: css in js
// const HeadersStyle = {
//     color:'red',
//     backgroundColor:'black'
// }

export default Header