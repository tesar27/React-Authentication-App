import { useFetch } from "../hooks/useFetch";

const Playground09 = ({login}) => {
  const {loading, data, error} = useFetch(
    `https://api.github.com/users/${login}`
  );

  if (loading) return <h1>Loading...</h1>
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>

  return (
    <div>
      <img src={data.avatar_url} alt="avatar"/>
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>} 
      </div>
    </div>
  )
}

export default Playground09;