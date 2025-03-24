export default async function MovieDetail(props) {
  const params = await props.params;
  return <h1>movie / {params.id}</h1>;
}
