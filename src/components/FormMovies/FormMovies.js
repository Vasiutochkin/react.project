import {useDispatch} from "react-redux";

import {movieActions} from "../../redux";

const FormMovies = () => {

    const dispatch = useDispatch();

    const formHandler = (e) => {
        e.preventDefault()
        if (e.target.value === '') {
            dispatch(movieActions.getAll(dispatch))
        } else {
            dispatch(movieActions.moviesSearch({value: e.target.value}))
        }
    }
    return (
        <form>
            <input type="text" placeholder={'Search whatever you want '} name={'movies'} onChange={formHandler}/>
        </form>
    );
};

export {FormMovies};
