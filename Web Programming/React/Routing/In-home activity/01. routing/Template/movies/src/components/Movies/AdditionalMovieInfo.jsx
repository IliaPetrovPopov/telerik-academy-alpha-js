const AdditionalMovieInfo = ({ Actors, Awards, Plot }) => {

    return (
        <div>
            <h3>Additional Info</h3>
            <div>{Plot}</div>

            <hr />

            <div>Actors: {Actors}</div>
            <div>Awards: {Awards}</div>
        </div>
);
};

export default AdditionalMovieInfo;