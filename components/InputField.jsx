const InputField = ({type, name}) => {
    return ( 
        <label className="" htmlFor={name}>
        <p className="capitalize">{name}</p>
        <input className="bg-[#ffffff00] border w-full border-light p-2 mb-2 rounded-sm  placeholder:capitalize " type={type} name={name} id="" placeholder={name} />
    </label>
     );
}
 
export default InputField;