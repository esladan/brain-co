import Link from "next/link";
import InputField from "../InputField";
import Image from "next/image";

const SetMood = () => {
    return (
        <div className="flex justify-center">
            <form method="post" className={`bg-medium rounded p-5 mt-10 w-10/12 sm:w-4/12`}>
                <div className="flex items-center justify-between mb-5 font-bold">
                    <p></p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white" />
                    </svg>
                </div>


                <h3 className="text-2xl font-medium mb-5">How are you feeling right now? </h3>
                <p className="text-light text-sm">{"If you're experiencing a particular emotion, sharing can prompt support or assistance."}</p>
                <div className="text-center">
                    <div className="my-3 flex justify-center">
                        <Image src={'/images/Blob1.png'} width={80} height={80} alt="" />

                    </div>
                    <h3 className="text-2xl font-medium mb-3">Happy</h3>
                    <div className="w-full">
                        <input className="w-full border-0 bg-dark accent-light rounded-lg appearance-none" type="range" defaultValue={50} name="" id="" />
                        <ul className="flex justify-between">
                            <li>
                                <p className="text-light text-xs">Upset</p>
                            </li>
                            <li>
                                <p className="text-light text-xs">Okay</p>
                            </li>
                            <li>
                                <p className="text-light text-xs">Happy</p>
                            </li>
                        </ul>
                    </div>
                    <button data-level='2' className="mt-8 w-9/12 py-2 rounded-sm bg-orange cont">Continue</button>


                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                </div>

            </form>
        </div>
    );
}

export default SetMood;