import Customize from "./Customize";
import DayPlan from "./DayPlan";
import SetMood from "./SetMood";
import Wtf from "./Wtf";

const Onboard = () => {
    return (
        <div className="bg-dark fixed top-0 left-0 w-full h-full" >
            <div className="wtf">
                {/* <Wtf/> */}
            </div>
            <div className="custormize text-center">
                {/* <Customize/> */}
            </div>

            <div className="text-center">
                {/* <SetMood/> */}
            </div>
            <div className=""></div>
            <DayPlan />
        </div>
    );
}

export default Onboard;