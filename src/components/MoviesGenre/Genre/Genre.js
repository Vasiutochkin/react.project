import './generStyle.css'
import {movieActions} from "../../../redux";
import {useDispatch, useSelector} from "react-redux";

const Genre = ({genre}) => {
    const {id, name} = genre;

    const dispatch = useDispatch();
    const {toggle} = useSelector(state => state.toggleReducer);

    return (
        <div className={toggle ? 'tag' : 'tag_black'} onClick={() => dispatch(movieActions.movieGenresId({id}))}>
            <div>{name}</div>
        </div>
    );
};

export {Genre};