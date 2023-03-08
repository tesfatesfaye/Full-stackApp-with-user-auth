import {useContext,useState,useLayoutEffect, useRef, useEffect} from "react";
import { Context } from "../Context/Context";
import { uuid4 } from 'uuid4';
import { tempHolderModel } from "../utils/utilities";
const useModal=()=>{
const titleRef=useRef(null)
let descriptionRef=useRef(null)
let addSubTaskRef=useRef(null)
let commentRef=useRef(null)
const {toggleTasksList,tasks,toggleModal,toggleTempHolder,tempHolder,modal}=useContext(Context)
const [selectedValue,setSelectedValue]=useState('')
const [modalCompleteHover,setModalCompleteHover]=useState(false)


useEffect(()=>{
    console.log(`${selectedValue} selected`)
})
useLayoutEffect(()=>{
    if(titleRef.current){
     titleRef.current.style.height="19px"
     const scrollH=titleRef.current.scrollHeight;
     titleRef.current.style.height=scrollH+"px"  
     descriptionRef.current.style.height="19px"
     const scrollHD=descriptionRef.current.scrollHeight;
     descriptionRef.current.style.height=scrollHD+"px"     
      }
    else{
        console.log("No joy for title")
    }
       
    if(addSubTaskRef.current){
             addSubTaskRef.current.style.height="19px"
         const scrollH=addSubTaskRef.current.scrollHeight;
         addSubTaskRef.current.style.height=scrollH+"px"
         const scrollHC=commentRef.current.scrollHeight;
         commentRef.current.style.height=scrollH+"px"        
      
    }
    else{
        console.log("No joy for add subtask")
    }
 
     return()=>{
          
        console.log('cleanedUp')
        descriptionRef=null
        addSubTaskRef=null
        commentRef=null
     }
},[tempHolder])


const focusStyle=(value,valueTwo="EmptyValue")=>{
    if(value===selectedValue || valueTwo===selectedValue){
        return ({border:'1px solid grey'})
    }
        return({border:''})
    }

const toggleModalCompletedHover=(value)=>{
    setModalCompleteHover(value)
}
const addNewTask=()=>{
        let objectHolder={}
        for(let key in tempHolder){
        if(key.toString()!=="comment" && key.toString()!=="tag"){
            if(key.toString()!=="subtask")
      objectHolder[key]=tempHolder[key]
        }
        }
        toggleTasksList([...tasks,{...objectHolder,id:uuid4()}])
        toggleModal('')
        toggleTempHolder(tempHolderModel)
    }
   
const toggleSelected=(value)=>{
    setSelectedValue(value)
}
const toggleShift=(value)=>{
    setSelectedValue(value)
}

        return{selectedValue,toggleSelected,
            toggleShift,focusStyle,addNewTask,
            descriptionRef,commentRef,addSubTaskRef,
            toggleModalCompletedHover,modalCompleteHover,
            titleRef}
}
 export default useModal
