import { Rating } from 'react-simple-star-rating'

import '../moviesStyle.css'

function MoviesRating({vote_average}) {

    let vote = Math.round(vote_average/2);

    return (
        <div className={'rating'}>
            <Rating initialValue={vote} />
        </div>
    )
}
export {
    MoviesRating
}