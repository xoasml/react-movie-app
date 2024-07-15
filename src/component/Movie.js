function Movie({ mediumCoverImage, title, summary, genres }) {
  return (
    <div>
      <img src={mediumCoverImage} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
