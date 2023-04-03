import {imageBaseUrl} from "../../config";
import NoImg from "../Movies/Movie/poster/NoPoster.jpg";
import {useSelector} from "react-redux";
import './DetailStule.css'
import {GenresDetails} from "./GenresDetails";

const MovieDetails = ({selectMovies}) => {
    const {toggle} = useSelector(state => state.toggleReducer);

    console.log(selectMovies)
    const {original_title, poster_path, overview,release_date, status,genres} = selectMovies;

    return (
        <div className={toggle ? 'box-black' : 'box-white'}>
            <div className={'original_title'}>{original_title}</div>

            <div className={'box-1'}>
                    <img src={poster_path ? `${imageBaseUrl}${poster_path}` : NoImg} alt={original_title}/>
                <div className={'box-2'}>

                <div className={'box-3'}>
                    <h4>Release date: {release_date}</h4>
                    <h4>Status: {status}</h4>
                </div>
                <div >
                    <div>Genres:</div>
                    <div className={'genres'}>
                     {genres && genres.map(genre => <GenresDetails key={genre.id} genre={genre}/>)}
                    </div>
                </div>
                <div> <h3>Overview:</h3> {overview} </div>

                <div></div>
                <div></div>
                </div>
            </div>

        </div>
    );
};

export {MovieDetails};