import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {movieActions} from "../../redux";
import {Movie} from "./Movie/Movie";
import './moviesStyle.css'
import {useSearchParams} from "react-router-dom";

const Movies = () => {

    const {toggle} = useSelector(state => state.toggleReducer);

    const {movies} = useSelector(state => state.movies);


    const {results, page, total_pages} = movies;

    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieActions.getAll({page: query.get('page')}))
    }, [dispatch, query])

    return (
        <div className={toggle === true ? 'mainBgColor' : 'secondaryBgColor'}>

                <div className={toggle === true ? 'pages' : 'pages_black'}>
                    <button disabled={page <= 1} onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>prev</button>
                    <div>Page: {page}</div>
                    <div>Total page: {total_pages}</div>
                    <button onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>next</button>
                </div>

            <div className={'movies-container'}>
                {results && results.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {
    Movies
}