import { editIcon } from '../../assets'

const EditDetails = () => {
  return (
    <div className='flex ml-48 gap-3 my-5'>
        <div className='w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center' ><img src={editIcon} alt="" /></div>
        <p>Edit your details</p>
    </div>
  )
}

export default EditDetails