const Input = () => {
    return ( 
        <div className="">
        <div className="absolute md:px-28 bottom-4 flex justify-center  gap-1 md:gap-3 w-full">
         
            <input className="  bg-[#ffffff00] border w-8/12 md:w-9/12 border-light p-3 rounded-sm  placeholder:capitalize " type='text' placeholder={'Type your message...'} />
        
            <button className="bg-white  w-fit flex justify-center items-center text-dark px-3 md:px-3 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C12.7956 2 13.5587 2.31607 14.1213 2.87868C14.6839 3.44129 15 4.20435 15 5V11C15 11.7956 14.6839 12.5587 14.1213 13.1213C13.5587 13.6839 12.7956 14 12 14C11.2044 14 10.4413 13.6839 9.87868 13.1213C9.31607 12.5587 9 11.7956 9 11V5C9 4.20435 9.31607 3.44129 9.87868 2.87868C10.4413 2.31607 11.2044 2 12 2ZM19 11C19 14.53 16.39 17.44 13 17.93V21H11V17.93C7.61 17.44 5 14.53 5 11H7C7 12.3261 7.52678 13.5979 8.46447 14.5355C9.40215 15.4732 10.6739 16 12 16C13.3261 16 14.5979 15.4732 15.5355 14.5355C16.4732 13.5979 17 12.3261 17 11H19Z" fill="#01060F" />
                </svg>

                <span className="hidden md:block text-nowrap ">Hold to talk..</span></button>
            <button className="bg-dark flex justify-center items-center text-dark px-3 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19.8 12.925L4.4 19.425C4.06667 19.5583 3.75 19.5291 3.45 19.3375C3.15 19.1458 3 18.8666 3 18.5V5.49997C3 5.1333 3.15 4.85414 3.45 4.66247C3.75 4.4708 4.06667 4.44164 4.4 4.57497L19.8 11.075C20.2167 11.2583 20.425 11.5666 20.425 12C20.425 12.4333 20.2167 12.7416 19.8 12.925ZM5 17L16.85 12L5 6.99997V10.5L11 12L5 13.5V17Z" fill="white" />
                </svg>

            </button>
        </div>
    </div>
     );
}
 
export default Input;