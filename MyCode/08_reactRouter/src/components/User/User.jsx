import { useParams } from "../../Imports"

const User = () => {
    const { userid } = useParams()
  return (
    <div className='text-center bg-gray-600 text-white text-3xl p-4'>
      User :{userid}
    </div>
  )
}

export default User
