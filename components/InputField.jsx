const InputField = ({type, name}) => {
    return ( 
        <label className="" htmlFor={name}>
        <p className="capitalize">{name}</p>
        <input className="  " type={type} name={name} id="" placeholder={name} />
    </label>
     );
}
 
export default InputField;