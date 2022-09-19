import PropTypes from 'prop-types';
import {LoadButton} from './Button.styled';

export const Button = ({onClick, children}) => (
            <LoadButton type='button' onClick= {onClick}>
                {children}
            </LoadButton>
    );

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};