import { React, useLoaderData } from '../../Imports'

const Github = () => {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/akhilshettyym')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [] )

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Repositories : {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={200} /> 
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/akhilshettyym')
    return response.json()
}