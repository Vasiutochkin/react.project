import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions} from "../../redux";
import {Genre} from "./Genre/Genre";
import './genresStyle.css'

const MoviesGenre = () => {
    const dispatch = useDispatch();

    const {toggle} = useSelector(state => state.toggleReducer);

    const {genres: {genres}} = useSelector(state => state.movies);

    useEffect(() => {
        dispatch(movieActions.movieGenres())
    }, [dispatch])

    return (
        <div className={toggle === true ? 'mainBgColorGenres' : 'secondaryBgColorGenres'}>
            <div className={'container'}>
                {genres && genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
            </div>
        </div>
    );
};

export {MoviesGenre};