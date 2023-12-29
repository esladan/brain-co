import Link from "next/link";
import InputField from "../InputField";

const Wtf = () => {
    return (
        <div className="flex justify-center">
            <form method="post" className={`bg-medium rounded p-5 mt-10 w-10/12 sm:w-4/12`}>
                <div className="flex items-center justify-between mb-5 font-bold">
                    <p>Wtf question?</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white" />
                    </svg>
                </div>
                {/* <h3 className="text-2xl font-medium mb-5">Log in</h3> */}
                <InputField type={'text'} name={'Label'} />
                <InputField type={'text'} name={'Label'} />
                <InputField type={'text'} name={'Label'} />
               
<div className="text-center">

       <button className="mt-8 w-8/12 py-3 rounded-sm bg-orange">Continue</button>
                <button className="my-1 w-8/12 py-3 rounded-sm ">Skip</button>

</div>

             
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                </div>
                
            </form>
        </div>
    );
}

export default Wtf;