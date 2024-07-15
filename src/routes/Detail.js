import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <img src={movie.large_cover_image} alt={"dk"}></img>
          <h2>{movie.title}</h2>
          <ul>
            {movie.genres.map((genre) =>
              <li key={genre}>genre</li>
            )}
          </ul>
        </>
      )}
    </div>
  );
}

export default Detail;
