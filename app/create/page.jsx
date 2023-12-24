import InputField from "@/components/InputField";

import Image from "next/image";
import Link from "next/link";

const page = () => {
    return ( 
        <div className="flex justify-center">
        <form method="post" className={`bg-medium rounded p-5 mt-10 max-w-4/12`}>
            <div className="flex items-center font-bold">
            <Image src={'/images/logo.png'} width={40} height={40} alt=""/>
            <p>BrainCo</p>
            </div>
            <h3 className="text-2xl font-medium mb-5">Create account</h3>
           <InputField type={'text'} name={'username'}/>
           <InputField type={'password'} name={'password'}/>
           
           <button className="my-5 w-full py-3 rounded-sm bg-orange">Continue</button>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
           <button className=" w-full py-3 px-4 rounded-sm bg-dark">Continue with Google</button>
           <button className=" w-full py-3 px-4 rounded-sm bg-dark">Continue with GitHub</button>

           </div>
            <p className="text-center font-light mt-6 text-sm">Already have an account? <Link className="underline" href={'./login'}>Log in </Link></p>
        </form>
        </div>
     );
}
 
export default page;