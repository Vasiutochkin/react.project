import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {MoviesRating} from "../starRatings/StarRatings";

import {imageBaseUrl} from "../../../config";
import NoImg from './poster/NoPoster.jpg'
import {movieActions} from "../../../redux";
import './moviesStyle.css'

const Movie = ({movie}) => {
    const {toggle} = useSelector(state => state.toggleReducer);

    const {original_title, poster_path, id, vote_average} = movie;

    const dispatch = useDispatch();

    return (
        <div className={'movie-card'}>
            <div className={toggle ? 'title' : 'title_black'}>{original_title}</div>
            <MoviesRating vote_average={vote_average}/>
            <Link to={id.toString()} onClick={() => dispatch(movieActions.getById({id}))}>
                <img src={poster_path ? `${imageBaseUrl}${poster_path}` : NoImg} alt={original_title}/>
            </Link>
        </div>
    );
};

export {
    Movie
};