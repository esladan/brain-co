import Link from "next/link";
import InputField from "../InputField";
import Image from "next/image";

const DayPlan = () => {
    return (
        <div className="flex justify-center ">
            <form method="post" className={`bg-medium rounded p-5 mt-10 w-10/12 sm:w-[450px] h-[70vh] overflow-y-auto`}>
                <div className="flex items-center justify-between mb-5 font-bold">
                    <p></p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white" />
                    </svg>
                </div>
                <div className="my-3 flex justify-center">
                    <Image src={'/images/Blob1.png'} width={80} height={80} alt="" />

                </div>

                <h3 className="text-2xl text-center font-medium mb-1">Enthusiastic</h3>
                <p className="text-light text-center mb-5 text-sm">{"Energy, positivity"}</p>
                <div className="">

                    <div className="goals border-b border-dark">
                        <p className="">What are your goals today?</p>
                        <div className="tags flex flex-wrap">

                            <div className="flex m-1 px-3 justify-evenly items-center gap-1 bg-orange rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M7.16229 11.3625L13.5185 5.00625C13.6685 4.85625 13.8467 4.78125 14.0529 4.78125C14.2592 4.78125 14.4373 4.85625 14.5873 5.00625C14.7373 5.15625 14.8123 5.33438 14.8123 5.54063C14.8123 5.74688 14.7373 5.925 14.5873 6.075L7.68729 12.975C7.53729 13.125 7.36229 13.2 7.16229 13.2C6.96229 13.2 6.78729 13.125 6.63729 12.975L3.41229 9.75C3.26229 9.6 3.19041 9.42188 3.19666 9.21563C3.20291 9.00938 3.28104 8.83125 3.43104 8.68125C3.58104 8.53125 3.75916 8.45625 3.96541 8.45625C4.17166 8.45625 4.34979 8.53125 4.49979 8.68125L7.16229 11.3625Z" fill="#D3D3D3" />
                                </svg>
                                <span className="font-medium "> Runing</span>
                            </div>

                            <div className="flex m-1 px-3 justify-center items-center gap-1 bg-dark rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                    <path d="M26.2021 17.968H18.1367V26.0334H15.4482V17.968H7.38281V15.2795H15.4482V7.21411H18.1367V15.2795H26.2021V17.968Z" fill="white" />
                                </svg>
                                <span className="font-medium "> Visit family</span>
                            </div>


                            <div className="flex m-1 px-3 justify-center items-center gap-1 bg-dark rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                    <path d="M26.2021 17.968H18.1367V26.0334H15.4482V17.968H7.38281V15.2795H15.4482V7.21411H18.1367V15.2795H26.2021V17.968Z" fill="white" />
                                </svg>
                                <span className="font-medium "> Runing</span>
                            </div>


                            <div className="flex m-1 px-3 justify-center items-center gap-1 bg-dark rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                    <path d="M26.2021 17.968H18.1367V26.0334H15.4482V17.968H7.38281V15.2795H15.4482V7.21411H18.1367V15.2795H26.2021V17.968Z" fill="white" />
                                </svg>
                                <span className="font-medium "> Runing</span>
                            </div>

                            <div className="flex m-1 px-3 justify-center items-center gap-1 bg-dark rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                    <path d="M26.2021 17.968H18.1367V26.0334H15.4482V17.968H7.38281V15.2795H15.4482V7.21411H18.1367V15.2795H26.2021V17.968Z" fill="white" />
                                </svg>
                                <span className="font-medium "> Runing</span>
                            </div>

                        </div>
                    </div>


                    <div className="challanges mt-8 border-b border-dark">
                        <p className="">Any current challanges or concerns?</p>
                        <div className="tags flex flex-wrap">

                            <div className="flex m-1 px-3 justify-evenly items-center gap-1 bg-orange rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M7.16229 11.3625L13.5185 5.00625C13.6685 4.85625 13.8467 4.78125 14.0529 4.78125C14.2592 4.78125 14.4373 4.85625 14.5873 5.00625C14.7373 5.15625 14.8123 5.33438 14.8123 5.54063C14.8123 5.74688 14.7373 5.925 14.5873 6.075L7.68729 12.975C7.53729 13.125 7.36229 13.2 7.16229 13.2C6.96229 13.2 6.78729 13.125 6.63729 12.975L3.41229 9.75C3.26229 9.6 3.19041 9.42188 3.19666 9.21563C3.20291 9.00938 3.28104 8.83125 3.43104 8.68125C3.58104 8.53125 3.75916 8.45625 3.96541 8.45625C4.17166 8.45625 4.34979 8.53125 4.49979 8.68125L7.16229 11.3625Z" fill="#D3D3D3" />
                                </svg>
                                <span className="font-medium "> Runing</span>
                            </div>

                            <div className="flex m-1 px-3 justify-center items-center gap-1 bg-dark rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                    <path d="M26.2021 17.968H18.1367V26.0334H15.4482V17.968H7.38281V15.2795H15.4482V7.21411H18.1367V15.2795H26.2021V17.968Z" fill="white" />
                                </svg>
                                <span className="font-medium "> Visit family</span>
                            </div>


                            <div className="flex m-1 px-3 justify-center items-center gap-1 bg-dark rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                    <path d="M26.2021 17.968H18.1367V26.0334H15.4482V17.968H7.38281V15.2795H15.4482V7.21411H18.1367V15.2795H26.2021V17.968Z" fill="white" />
                                </svg>
                                <span className="font-medium "> Runing</span>
                            </div>


                            <div className="flex m-1 px-3 justify-center items-center gap-1 bg-dark rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                    <path d="M26.2021 17.968H18.1367V26.0334H15.4482V17.968H7.38281V15.2795H15.4482V7.21411H18.1367V15.2795H26.2021V17.968Z" fill="white" />
                                </svg>
                                <span className="font-medium "> Runing</span>
                            </div>

                            <div className="flex m-1 px-3 justify-center items-center gap-1 bg-dark rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                    <path d="M26.2021 17.968H18.1367V26.0334H15.4482V17.968H7.38281V15.2795H15.4482V7.21411H18.1367V15.2795H26.2021V17.968Z" fill="white" />
                                </svg>
                                <span className="font-medium "> Runing</span>
                            </div>

                            <input className="my-3  bg-[#ffffff00] border border-dark w-full d:w-9/12 rounded  p-3 placeholder:capitalize " type='text' placeholder={'Other...'} />


                        </div>
                    </div>

                    <div className="w-full border-b border-dark">
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

                    <div className="mt-5 border-b border-dark ">
                        <p className="">Preferred mood-boosting weather?</p>
                        <div>
                            <div className="">
                                <label htmlFor="Prefered mode">
                                    <input className="accent-orange bg-orange mb-2 me-4" type="radio" name="mood" />
                                    Sunny
                                </label>
                            </div>

                            <div className="">
                                <label htmlFor="Prefered mode">
                                    <input className="accent-orange bg-orange mb-2 me-4" type="radio" name="mood" />
                                    Sunny
                                </label>
                            </div>

                            <div className="">
                                <label htmlFor="Prefered mode">
                                    <input className="accent-orange bg-orange mb-2 me-4" type="radio" name="mood" />
                                    Sunny
                                </label>
                            </div>


                        </div>
                    </div>

                    <div className="goals my-5 border-b border-dark">
                        <p className="">What are your goals today?</p>
                        <div className="tags flex flex-wrap">

                            <div className="flex m-1 px-3 justify-evenly items-center gap-1 bg-orange rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M7.16229 11.3625L13.5185 5.00625C13.6685 4.85625 13.8467 4.78125 14.0529 4.78125C14.2592 4.78125 14.4373 4.85625 14.5873 5.00625C14.7373 5.15625 14.8123 5.33438 14.8123 5.54063C14.8123 5.74688 14.7373 5.925 14.5873 6.075L7.68729 12.975C7.53729 13.125 7.36229 13.2 7.16229 13.2C6.96229 13.2 6.78729 13.125 6.63729 12.975L3.41229 9.75C3.26229 9.6 3.19041 9.42188 3.19666 9.21563C3.20291 9.00938 3.28104 8.83125 3.43104 8.68125C3.58104 8.53125 3.75916 8.45625 3.96541 8.45625C4.17166 8.45625 4.34979 8.53125 4.49979 8.68125L7.16229 11.3625Z" fill="#D3D3D3" />
                                </svg>
                                <span className="font-medium "> Runing</span>
                            </div>

                            <div className="flex m-1 px-3 justify-center items-center gap-1 bg-dark rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                    <path d="M26.2021 17.968H18.1367V26.0334H15.4482V17.968H7.38281V15.2795H15.4482V7.21411H18.1367V15.2795H26.2021V17.968Z" fill="white" />
                                </svg>
                                <span className="font-medium "> Visit family</span>
                            </div>


                            <div className="flex m-1 px-3 justify-center items-center gap-1 bg-dark rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                    <path d="M26.2021 17.968H18.1367V26.0334H15.4482V17.968H7.38281V15.2795H15.4482V7.21411H18.1367V15.2795H26.2021V17.968Z" fill="white" />
                                </svg>
                                <span className="font-medium "> Runing</span>
                            </div>


                            <div className="flex m-1 px-3 justify-center items-center gap-1 bg-dark rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                    <path d="M26.2021 17.968H18.1367V26.0334H15.4482V17.968H7.38281V15.2795H15.4482V7.21411H18.1367V15.2795H26.2021V17.968Z" fill="white" />
                                </svg>
                                <span className="font-medium "> Runing</span>
                            </div>

                            <div className="flex m-1 px-3 justify-center items-center gap-1 bg-dark rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                    <path d="M26.2021 17.968H18.1367V26.0334H15.4482V17.968H7.38281V15.2795H15.4482V7.21411H18.1367V15.2795H26.2021V17.968Z" fill="white" />
                                </svg>
                                <span className="font-medium "> Runing</span>
                            </div>
                            <input className="my-3  bg-[#ffffff00] border border-dark w-full d:w-9/12 rounded  p-3 placeholder:capitalize " type='text' placeholder={'Other...'} />

                        </div>
                    </div>

                    <div className="mt-5 border-b border-dark ">
                        <p className="">Logic or intuition today?</p>
                        <div>
                            <div className="">
                                <label htmlFor="Prefered mode">
                                    <input className="accent-orange bg-orange mb-2 me-4" type="radio" name="mood" />
                                    Sunny
                                </label>
                            </div>

                            <div className="">
                                <label htmlFor="Prefered mode">
                                    <input className="accent-orange bg-orange mb-2 me-4" type="radio" name="mood" />
                                    Sunny
                                </label>
                            </div>

                            <div className="">
                                <label htmlFor="Prefered mode">
                                    <input className="accent-orange bg-orange mb-2 me-4" type="radio" name="mood" />
                                    Sunny
                                </label>
                            </div>


                        </div>
                    </div>

                    <div className="goals my-5 border-b border-dark">
                        <p className="">What are your goals today?</p>
                        <div className="tags flex flex-wrap">

                            <div className="flex m-1 px-3 justify-evenly items-center gap-1 bg-orange rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M7.16229 11.3625L13.5185 5.00625C13.6685 4.85625 13.8467 4.78125 14.0529 4.78125C14.2592 4.78125 14.4373 4.85625 14.5873 5.00625C14.7373 5.15625 14.8123 5.33438 14.8123 5.54063C14.8123 5.74688 14.7373 5.925 14.5873 6.075L7.68729 12.975C7.53729 13.125 7.36229 13.2 7.16229 13.2C6.96229 13.2 6.78729 13.125 6.63729 12.975L3.41229 9.75C3.26229 9.6 3.19041 9.42188 3.19666 9.21563C3.20291 9.00938 3.28104 8.83125 3.43104 8.68125C3.58104 8.53125 3.75916 8.45625 3.96541 8.45625C4.17166 8.45625 4.34979 8.53125 4.49979 8.68125L7.16229 11.3625Z" fill="#D3D3D3" />
                                </svg>
                                <span className="font-medium "> Runing</span>
                            </div>

                            <div className="flex m-1 px-3 justify-center items-center gap-1 bg-dark rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                    <path d="M26.2021 17.968H18.1367V26.0334H15.4482V17.968H7.38281V15.2795H15.4482V7.21411H18.1367V15.2795H26.2021V17.968Z" fill="white" />
                                </svg>
                                <span className="font-medium "> Visit family</span>
                            </div>


                            <div className="flex m-1 px-3 justify-center items-center gap-1 bg-dark rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                    <path d="M26.2021 17.968H18.1367V26.0334H15.4482V17.968H7.38281V15.2795H15.4482V7.21411H18.1367V15.2795H26.2021V17.968Z" fill="white" />
                                </svg>
                                <span className="font-medium "> Runing</span>
                            </div>


                            <div className="flex m-1 px-3 justify-center items-center gap-1 bg-dark rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                    <path d="M26.2021 17.968H18.1367V26.0334H15.4482V17.968H7.38281V15.2795H15.4482V7.21411H18.1367V15.2795H26.2021V17.968Z" fill="white" />
                                </svg>
                                <span className="font-medium "> Runing</span>
                            </div>

                            <div className="flex m-1 px-3 justify-center items-center gap-1 bg-dark rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                    <path d="M26.2021 17.968H18.1367V26.0334H15.4482V17.968H7.38281V15.2795H15.4482V7.21411H18.1367V15.2795H26.2021V17.968Z" fill="white" />
                                </svg>
                                <span className="font-medium "> Runing</span>
                            </div>
                            {/* <input className="my-3  bg-[#ffffff00] border border-dark w-full d:w-9/12 rounded  p-3 placeholder:capitalize " type='text' placeholder={'Other...'} /> */}

                        </div>
                    </div>
                    <div className="flex">
                        <button data-level='3' className="mt-8 m-auto w-9/12 py-2 rounded-sm bg-orange cont">Continue</button>

                    </div>


                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                </div>

            </form>
        </div>
    );
}

export default DayPlan;