import {Route, Routes} from "react-router-dom";

import {NavBar} from "./components";
import {MovieDetailsPage, MoviesPage} from "./pages";

const App = () => {
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path='' element={<MoviesPage/>}/>
                <Route path=':movieId' element={<MovieDetailsPage/>}/>
            </Routes>
        </div>
    );
};

export {App};