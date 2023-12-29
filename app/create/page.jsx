import InputField from "@/components/InputField";

import Image from "next/image";
import Link from "next/link";

const page = () => {
    return (
        <div className="flex justify-center">
            <form method="post" className={`bg-medium rounded p-5 mt-10 max-w-4/12`}>
                <div className="flex items-center font-bold">
                    <Image src={'/images/logo.png'} width={40} height={40} alt="" />
                    <p>BrainCo</p>
                </div>
                <h3 className="text-2xl font-medium mb-5">Create account</h3>
                <InputField type={'text'} name={'username'} />
                <InputField type={'password'} name={'password'} />

                <button className="my-5 w-full py-3 rounded-sm bg-orange">Continue</button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                   
                    <button className="flex items-center gap-2 w-full py-3 px-4 rounded-sm bg-dark">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_30_2110)">
                                <path d="M12.4796 10.92V14.2H20.3196C20.0796 16.04 19.4666 17.387 18.5326 18.333C17.3856 19.48 15.5996 20.733 12.4796 20.733C7.65264 20.733 3.87964 16.84 3.87964 12.013C3.87964 7.186 7.65264 3.293 12.4796 3.293C15.0796 3.293 16.9866 4.32 18.3866 5.64L20.6936 3.333C18.7466 1.44 16.1326 0 12.4796 0C5.86664 0 0.306641 5.387 0.306641 12C0.306641 18.613 5.86664 24 12.4796 24C16.0526 24 18.7466 22.827 20.8526 20.64C23.0126 18.48 23.6926 15.427 23.6926 12.973C23.6926 12.213 23.6396 11.506 23.5196 10.92H12.4796Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_30_2110">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Continue with Google</button>
                   
                    <button className="flex items-center gap-2 w-full py-3 px-4 rounded-sm bg-dark">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_30_2115)">
                                <path d="M12 0.296875C5.37 0.296875 0 5.66988 0 12.2969C0 17.5999 3.438 22.0969 8.205 23.6819C8.805 23.7949 9.025 23.4239 9.025 23.1049C9.025 22.8199 9.015 22.0649 9.01 21.0649C5.672 21.7889 4.968 19.4549 4.968 19.4549C4.422 18.0699 3.633 17.6999 3.633 17.6999C2.546 16.9559 3.717 16.9709 3.717 16.9709C4.922 17.0549 5.555 18.2069 5.555 18.2069C6.625 20.0419 8.364 19.5119 9.05 19.2049C9.158 18.4289 9.467 17.8999 9.81 17.5999C7.145 17.2999 4.344 16.2679 4.344 11.6699C4.344 10.3599 4.809 9.28988 5.579 8.44987C5.444 8.14687 5.039 6.92688 5.684 5.27388C5.684 5.27388 6.689 4.95188 8.984 6.50388C9.944 6.23688 10.964 6.10488 11.984 6.09888C13.004 6.10488 14.024 6.23688 14.984 6.50388C17.264 4.95188 18.269 5.27388 18.269 5.27388C18.914 6.92688 18.509 8.14687 18.389 8.44987C19.154 9.28988 19.619 10.3599 19.619 11.6699C19.619 16.2799 16.814 17.2949 14.144 17.5899C14.564 17.9499 14.954 18.6859 14.954 19.8099C14.954 21.4159 14.939 22.7059 14.939 23.0959C14.939 23.4109 15.149 23.7859 15.764 23.6659C20.565 22.0919 24 17.5919 24 12.2969C24 5.66988 18.627 0.296875 12 0.296875Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_30_2115">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Continue with GitHub</button>

                </div>
                <p className="text-center font-light mt-6 text-sm">Already have an account? <Link className="underline" href={'./login'}>Log in </Link></p>
            </form>
        </div>
    );
}

export default page;