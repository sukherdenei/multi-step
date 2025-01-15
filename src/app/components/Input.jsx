import { type } from "os";

const Input = ({
  placeholder,
  Label,
  lastName,
  type,
  name,
  userName,
  firstName,
  onChange,
}) => {
  // const [error, setError] = useState("");

  // const error = "";
  // !lastName ? (error = true) : (error = null);
  // !userName ? (error = true) : (error = null);
  // !firstName ? (error = true) : (error = null);

  return (
    <div className=" ">
      <p className="">
        {Label} <span className="text-red-600">*</span>
      </p>
      <input
        value={lastName}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        name={name}
        id=""
        className={`border-2 w-[416px] h-[44px] border-gray-300 rounded-[8px] outline-none flex m-auto pl-4`}
      />
    </div>
  );
};
export default Input;
