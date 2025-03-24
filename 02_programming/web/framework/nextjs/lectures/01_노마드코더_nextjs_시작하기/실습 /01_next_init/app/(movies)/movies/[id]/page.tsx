const MovieDetail = async (props) => {
  const params = await props.params;
  const id = params.id;
  return <h1>movie / {id}</h1>;
};
export default MovieDetail;
