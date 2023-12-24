import InputField from "@/components/InputField";
import Image from "next/image";
import Link from "next/link";

const page = () => {
    return (<div className="p-2 md:p-5 overflow-hidden  md:fixed w-full ">
        <nav className="flex justify-between items-center">
            <div className="flex items-center font-bold">
                <Image src={'/images/logo.png'} width={40} height={40} alt="" />
                <p>BrainCo</p>
            </div>

            <ul className="flex gap-4">
                <li><Link href={'#notifications'}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 19C4.71667 19 4.47917 18.9042 4.2875 18.7125C4.09583 18.5208 4 18.2833 4 18C4 17.7167 4.09583 17.4792 4.2875 17.2875C4.47917 17.0958 4.71667 17 5 17H6V10C6 8.61667 6.41667 7.3875 7.25 6.3125C8.08333 5.2375 9.16667 4.53333 10.5 4.2V3.5C10.5 3.08333 10.6458 2.72917 10.9375 2.4375C11.2292 2.14583 11.5833 2 12 2C12.4167 2 12.7708 2.14583 13.0625 2.4375C13.3542 2.72917 13.5 3.08333 13.5 3.5V4.2C14.8333 4.53333 15.9167 5.2375 16.75 6.3125C17.5833 7.3875 18 8.61667 18 10V17H19C19.2833 17 19.5208 17.0958 19.7125 17.2875C19.9042 17.4792 20 17.7167 20 18C20 18.2833 19.9042 18.5208 19.7125 18.7125C19.5208 18.9042 19.2833 19 19 19H5ZM12 22C11.45 22 10.9792 21.8042 10.5875 21.4125C10.1958 21.0208 10 20.55 10 20H14C14 20.55 13.8042 21.0208 13.4125 21.4125C13.0208 21.8042 12.55 22 12 22ZM8 17H16V10C16 8.9 15.6083 7.95833 14.825 7.175C14.0417 6.39167 13.1 6 12 6C10.9 6 9.95833 6.39167 9.175 7.175C8.39167 7.95833 8 8.9 8 10V17Z" fill="white" />
                </svg></Link></li>

                <li><Link href={'#notifications'}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM4 18V17.2C4 16.6333 4.14583 16.1125 4.4375 15.6375C4.72917 15.1625 5.11667 14.8 5.6 14.55C6.63333 14.0333 7.68333 13.6458 8.75 13.3875C9.81667 13.1292 10.9 13 12 13C13.1 13 14.1833 13.1292 15.25 13.3875C16.3167 13.6458 17.3667 14.0333 18.4 14.55C18.8833 14.8 19.2708 15.1625 19.5625 15.6375C19.8542 16.1125 20 16.6333 20 17.2V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18ZM6 18H18V17.2C18 17.0167 17.9542 16.85 17.8625 16.7C17.7708 16.55 17.65 16.4333 17.5 16.35C16.6 15.9 15.6917 15.5625 14.775 15.3375C13.8583 15.1125 12.9333 15 12 15C11.0667 15 10.1417 15.1125 9.225 15.3375C8.30833 15.5625 7.4 15.9 6.5 16.35C6.35 16.4333 6.22917 16.55 6.1375 16.7C6.04583 16.85 6 17.0167 6 17.2V18ZM12 10C12.55 10 13.0208 9.80417 13.4125 9.4125C13.8042 9.02083 14 8.55 14 8C14 7.45 13.8042 6.97917 13.4125 6.5875C13.0208 6.19583 12.55 6 12 6C11.45 6 10.9792 6.19583 10.5875 6.5875C10.1958 6.97917 10 7.45 10 8C10 8.55 10.1958 9.02083 10.5875 9.4125C10.9792 9.80417 11.45 10 12 10Z" fill="white" />
                </svg></Link></li>

                <li><Link href={'#notifications'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 18C3.71667 18 3.47917 17.9042 3.2875 17.7125C3.09583 17.5208 3 17.2833 3 17C3 16.7167 3.09583 16.4792 3.2875 16.2875C3.47917 16.0958 3.71667 16 4 16H20C20.2833 16 20.5208 16.0958 20.7125 16.2875C20.9042 16.4792 21 16.7167 21 17C21 17.2833 20.9042 17.5208 20.7125 17.7125C20.5208 17.9042 20.2833 18 20 18H4ZM4 13C3.71667 13 3.47917 12.9042 3.2875 12.7125C3.09583 12.5208 3 12.2833 3 12C3 11.7167 3.09583 11.4792 3.2875 11.2875C3.47917 11.0958 3.71667 11 4 11H20C20.2833 11 20.5208 11.0958 20.7125 11.2875C20.9042 11.4792 21 11.7167 21 12C21 12.2833 20.9042 12.5208 20.7125 12.7125C20.5208 12.9042 20.2833 13 20 13H4ZM4 8C3.71667 8 3.47917 7.90417 3.2875 7.7125C3.09583 7.52083 3 7.28333 3 7C3 6.71667 3.09583 6.47917 3.2875 6.2875C3.47917 6.09583 3.71667 6 4 6H20C20.2833 6 20.5208 6.09583 20.7125 6.2875C20.9042 6.47917 21 6.71667 21 7C21 7.28333 20.9042 7.52083 20.7125 7.7125C20.5208 7.90417 20.2833 8 20 8H4Z" fill="white" />
                </svg></Link></li>
            </ul>
        </nav>
        <main>
            <section className="mt-5 flex min-h-[90vh] gap-4">
                <div className="sidenav hidden md:block relative w-2/12">
                    <button className="py-2 justify-center bg-orange flex gap-2 px-5 w-full rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20 2C20.5304 2 21.0391 2.21071 21.4142 2.58579C21.7893 2.96086 22 3.46957 22 4V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H6L2 22V4C2 2.89 2.9 2 4 2H20ZM11 6V9H8V11H11V14H13V11H16V9H13V6H11Z" fill="white" />
                        </svg>
                        New chat
                    </button>
                    <div className="">
                        <p className="my-3 text-sm">Recent</p>
                        <div className="ps-2">
                            <p className="my-1">Alex</p>
                            <p className="my-1">Diana (3)</p>

                        </div>
                    </div>
                    <Link className="flex gap-2 absolute bottom-3" href={'./settings'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M11.9998 15.5C11.0716 15.5 10.1813 15.1313 9.52497 14.4749C8.86859 13.8185 8.49984 12.9283 8.49984 12C8.49984 11.0717 8.86859 10.1815 9.52497 9.52513C10.1813 8.86875 11.0716 8.5 11.9998 8.5C12.9281 8.5 13.8183 8.86875 14.4747 9.52513C15.1311 10.1815 15.4998 11.0717 15.4998 12C15.4998 12.9283 15.1311 13.8185 14.4747 14.4749C13.8183 15.1313 12.9281 15.5 11.9998 15.5ZM19.4298 12.97C19.4698 12.65 19.4998 12.33 19.4998 12C19.4998 11.67 19.4698 11.34 19.4298 11L21.5398 9.37C21.7298 9.22 21.7798 8.95 21.6598 8.73L19.6598 5.27C19.5398 5.05 19.2698 4.96 19.0498 5.05L16.5598 6.05C16.0398 5.66 15.4998 5.32 14.8698 5.07L14.4998 2.42C14.4598 2.18 14.2498 2 13.9998 2H9.99984C9.74984 2 9.53984 2.18 9.49984 2.42L9.12984 5.07C8.49984 5.32 7.95984 5.66 7.43984 6.05L4.94984 5.05C4.72984 4.96 4.45984 5.05 4.33984 5.27L2.33984 8.73C2.20984 8.95 2.26984 9.22 2.45984 9.37L4.56984 11C4.52984 11.34 4.49984 11.67 4.49984 12C4.49984 12.33 4.52984 12.65 4.56984 12.97L2.45984 14.63C2.26984 14.78 2.20984 15.05 2.33984 15.27L4.33984 18.73C4.45984 18.95 4.72984 19.03 4.94984 18.95L7.43984 17.94C7.95984 18.34 8.49984 18.68 9.12984 18.93L9.49984 21.58C9.53984 21.82 9.74984 22 9.99984 22H13.9998C14.2498 22 14.4598 21.82 14.4998 21.58L14.8698 18.93C15.4998 18.67 16.0398 18.34 16.5598 17.94L19.0498 18.95C19.2698 19.03 19.5398 18.95 19.6598 18.73L21.6598 15.27C21.7798 15.05 21.7298 14.78 21.5398 14.63L19.4298 12.97Z" fill="white" />
                        </svg>
                        Settings
                    </Link>
                </div>
                <div className="bg-medium relative p-2 md:p-5 rounded-xl w-full md:w-10/12  h-[88vh]">
                    <p>Alex</p>
                    <div className="">
                        <div className="absolute md:px-28 bottom-5 flex justify-center gap-1 md:gap-3 w-full">
                            {/* <div className="w-10/12"> */}
                            <input className="  bg-[#ffffff00] border w-9/12 md:w-9/12 border-light p-3 rounded-sm  placeholder:capitalize " type='text' placeholder={'Type your message...'} />
                            {/* </div> */}
                            <button className="bg-white  w-fit flex justify-center items-center text-dark px-4 md:px-3 rounded-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2C12.7956 2 13.5587 2.31607 14.1213 2.87868C14.6839 3.44129 15 4.20435 15 5V11C15 11.7956 14.6839 12.5587 14.1213 13.1213C13.5587 13.6839 12.7956 14 12 14C11.2044 14 10.4413 13.6839 9.87868 13.1213C9.31607 12.5587 9 11.7956 9 11V5C9 4.20435 9.31607 3.44129 9.87868 2.87868C10.4413 2.31607 11.2044 2 12 2ZM19 11C19 14.53 16.39 17.44 13 17.93V21H11V17.93C7.61 17.44 5 14.53 5 11H7C7 12.3261 7.52678 13.5979 8.46447 14.5355C9.40215 15.4732 10.6739 16 12 16C13.3261 16 14.5979 15.4732 15.5355 14.5355C16.4732 13.5979 17 12.3261 17 11H19Z" fill="#01060F" />
                                </svg>

                                <span className="hidden md:block text-nowrap ">Hold to talk..</span></button>
                            <button className="bg-dark flex justify-center items-center text-dark px-4 rounded-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19.8 12.925L4.4 19.425C4.06667 19.5583 3.75 19.5291 3.45 19.3375C3.15 19.1458 3 18.8666 3 18.5V5.49997C3 5.1333 3.15 4.85414 3.45 4.66247C3.75 4.4708 4.06667 4.44164 4.4 4.57497L19.8 11.075C20.2167 11.2583 20.425 11.5666 20.425 12C20.425 12.4333 20.2167 12.7416 19.8 12.925ZM5 17L16.85 12L5 6.99997V10.5L11 12L5 13.5V17Z" fill="white" />
                                </svg>

                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    </div>);
}

export default page;