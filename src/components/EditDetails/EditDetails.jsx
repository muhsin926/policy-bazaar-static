import { editIcon } from "../../assets";

const EditDetails = () => {
  return (
    <div className="flex ml-5 md:ml-48 gap-3 my-4 items-center">
      <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center">
        <img src={editIcon} alt="Icon" />
      </div>
      <p>Edit your details</p>
    </div>
  );
};

export default EditDetails;
