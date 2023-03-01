import React,{useState,useEffect,createContext} from "react";
import {useNavigate} from "react-router-dom";
import { uuid4 } from 'uuid4';
import { tempHolderModel } from "../utils/tempHolderModel";
const Context=createContext()
    
    function ContextFunction({children}){
        const [formState,setFormState]=useState(()=>({firstName:'Tesfa',lastName:'Tesfaye',
        email:'',password:'', staySignedIn:false}))
        const[tempHolder,setTempHolder]=useState(tempHolderModel)
        const [theme,setTheme]=useState(()=>'dark')
        const[modal,setModal]=useState('')
        const [sideBar,setSideBar]=useState(true)
        const [tasks,setTasks]=useState([{id:uuid4(), title:"Test 1", subtasks:[],comments:["This is the first"],
        description:'none',dueDate:"",tags:[],dateCreated:""},
        {id:uuid4(), title:"Test 2", subtasks:[],
        comments:['This is the second'],description:'none',dueDate:"",tags:[],dateCreated:""},
        {id:uuid4(), title:"Test 3", 
        subtasks:[],comments:['This is the third'],description:'kanye was right',dueDate:"",tags:[],dateCreated:""},
        {id:uuid4(), title:"Test 4", 
        subtasks:[],comments:['This is the fourth'],description:'none',dueDate:"",tags:[],dateCreated:""}
        
    ])
        const toggleTempHolder=(value)=>{
            setTempHolder(value)
        }
        const toggleTasksList=(value)=>{
            setTasks(value)
        }

        const updateTemp=(event)=>{
            const{name,value}=event.target
            setTempHolder(prev=>{
                return {...prev, [name]:value}
            })
        }
        const toggleModal=(value)=>{

            setModal(value)
        }
           
        const navigate=useNavigate()
              
        const updateForm=(event)=>{
            const{name,value,type,checked}=event.target
            setFormState(prev=>{
                return{
                    ...prev,
                    [name]: type ==="checkbox" ? checked : value
                }
            })
        }
    
        const changePage=(page)=>{
            navigate(page)
            
        }
              const toggleSideBar=(e,value)=>{
            value==='mainIcon' ? setSideBar(prev=>!prev) : ''
        }
       return(
        <Context.Provider value={{formState,updateForm,changePage,
        theme,sideBar,toggleSideBar,tasks,modal,toggleModal,toggleTasksList,toggleTempHolder,updateTemp,tempHolder}}>
            {children}
        </Context.Provider>
    )}

    export{Context,ContextFunction}


