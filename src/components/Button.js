import PropTypes from 'prop-types';

export const Button = (props) => {
    return (
        <button onClick={props.onClick} style={{ backgroundColor: props.color}} className="btn">
            {props.text}
        </button>
    )
}

Button.prototype = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}

Button.defaultProps = {
    color: 'steelblue',
}