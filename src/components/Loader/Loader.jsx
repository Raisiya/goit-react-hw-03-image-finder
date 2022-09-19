import {RotatingLines} from 'react-loader-spinner';
import {Loaders} from './Loader.styled';

export const Loader = () => {
    return (
        <Loaders>
        <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
        />
        </Loaders>
    );
};
