import {MovieDetails} from "../../components";
import {useSelector} from "react-redux";

const MovieDetailsPage = () => {
    const {selectMovies} = useSelector(state => state.movies);
    return (
        <div>
            {selectMovies && <MovieDetails selectMovies={selectMovies}/>}
        </div>
    );
};

export {MovieDetailsPage};