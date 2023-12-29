import Link from "next/link";
import InputField from "../InputField";

const Customize = () => {
    return (
        <div className="flex justify-center">
            <form method="post" className={`bg-medium rounded p-5 mt-10 w-10/12 sm:w-4/12`}>
                <div className="flex items-center justify-between mb-5 font-bold">
                    <p></p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white" />
                    </svg>
                </div>

                <div className="my-5 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
  <path d="M15 57C14.15 57 13.4375 56.7125 12.8625 56.1375C12.2875 55.5625 12 54.85 12 54C12 53.15 12.2875 52.4375 12.8625 51.8625C13.4375 51.2875 14.15 51 15 51H18V30C18 25.85 19.25 22.1625 21.75 18.9375C24.25 15.7125 27.5 13.6 31.5 12.6V10.5C31.5 9.25 31.9375 8.1875 32.8125 7.3125C33.6875 6.4375 34.75 6 36 6C37.25 6 38.3125 6.4375 39.1875 7.3125C40.0625 8.1875 40.5 9.25 40.5 10.5V12.6C44.5 13.6 47.75 15.7125 50.25 18.9375C52.75 22.1625 54 25.85 54 30V51H57C57.85 51 58.5625 51.2875 59.1375 51.8625C59.7125 52.4375 60 53.15 60 54C60 54.85 59.7125 55.5625 59.1375 56.1375C58.5625 56.7125 57.85 57 57 57H15ZM36 66C34.35 66 32.9375 65.4125 31.7625 64.2375C30.5875 63.0625 30 61.65 30 60H42C42 61.65 41.4125 63.0625 40.2375 64.2375C39.0625 65.4125 37.65 66 36 66ZM24 51H48V30C48 26.7 46.825 23.875 44.475 21.525C42.125 19.175 39.3 18 36 18C32.7 18 29.875 19.175 27.525 21.525C25.175 23.875 24 26.7 24 30V51Z" fill="#D3D3D3"/>
</svg>
                </div>
                <h3 className="text-2xl font-medium mb-5">Customize activity from <br />
AI companion?</h3>
              <p className="text-light text-sm">Some people thrive on frequent communication, while others may prefer more solitude.</p>
<div className="text-center">

       <button className="mt-8 w-8/12 py-3 rounded-sm bg-orange">Turn on notifications</button>
                <button className="my-1 w-8/12 py-3 rounded-sm ">Skip</button>

</div>

             
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                </div>
                
            </form>
        </div>
    );
}

export default Customize;