import React from "react";
import '../dashboard.css'
import {FaTasks} from 'react-icons/fa'
import {BsCheck2All} from'react-icons/bs'
import {BsFilterLeft} from 'react-icons/bs'
import {AiTwotoneCalendar} from 'react-icons/ai'
import {BsAlarm} from 'react-icons/bs'
import {BsFillTrash2Fill} from 'react-icons/bs'

    const SideBar=(props)=>{

        return(
         
            
           <nav className="side-bar"   style={{display:props.sideBar ? 'flex' : 'none' }}>
                <div className="general-tasks"  > 
                    <FaTasks color="yellow"/>
                    <span>General</span>
                </div>
            <div className="completed-tasks">
                <BsCheck2All color="green" />
                <span>Completed</span>
            </div>
            <div className="tags-labels">
                <BsFilterLeft/>
                <span>Tags</span>
            </div>
             <div className="today">
                <AiTwotoneCalendar color="orange"/>
                <span>Today</span>
                </div>  

            <div className="over-due">
                <BsAlarm color="lightblue"/>
               <span>Overdue</span>
                </div> 

            <div className="recycling-bin" >
                <BsFillTrash2Fill color="brown"/>
                <span> Deleted</span>
            </div>
            </nav>
            
        )
    }

    export default SideBar