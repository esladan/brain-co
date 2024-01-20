"use client"
import { useEffect } from "react";
import Customize from "./Customize";
import DayPlan from "./DayPlan";
import SetMood from "./SetMood";
import Wtf from "./Wtf";

const Onboard = () => {

    useEffect(()=>{
        let onboard = document.querySelector('.onboard')
       
            document.querySelectorAll('.cont').forEach(btn =>{
    
              btn.addEventListener('click',(e)=>{
                e.preventDefault()
                console.log(btn.dataset.level+1)
            onboard.childNodes[Number(btn.dataset.level)].classList.add('hidden')
                if(Number(btn.dataset.level)+1==4) return onboard.classList.add('hidden')

            onboard.childNodes[Number(btn.dataset.level)+1].classList.remove('hidden')

              })
            })
           
            
    },[])

    return(
    <div className="bg-dark fixed top-0 left-0 w-full h-full onboard">
        <div className="wtf">
            <Wtf />
        </div>
        <div className="custormize text-center hidden">
            <Customize />
        </div>

        <div className="text-center hidden">
            <SetMood />
        </div>
        <div className="hidden">
        <DayPlan /></div>
    </div>)
}

export default Onboard;