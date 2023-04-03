import '../MovieDetails/DetailStule.css'

const GenresDetails = ({genre}) => {
    const {name} = genre;
    return (
        <div className={'genres-box'}>
            {name}
        </div>
    );
};

export {GenresDetails};