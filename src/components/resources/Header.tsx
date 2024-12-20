import { useEffect, useRef, useState } from 'react'
import '../../styles/header.css'
import logo from '../../assets/images/logo.png'
import { useNavigate } from 'react-router-dom';

const Header=()=>{

    const [offset,setOffset]=useState("-100%")
    const tabs=useRef([
        {title:"Home",link:"/"},
        {title:"Services",link:"/services"},
        {title:"Enroll Now",link:"/"},
        {title:"Upcoming Demo",link:"/"},
        {title:"Book Demo Slot",link:"/"},
        {title:"About Us",link:"/about"},
    ]).current
    const navigate = useNavigate();

    useEffect(()=>{
        setOffset("0%");
    },[])

    const redirect=(link:string)=>{
        console.log(link);
        navigate(link);
    }
    
    return(
        <div className='header-wrapper' style={{transform:"translateY("+offset+")"}}>
            <img src={logo} className='logo'/>
            <div className='tabs-wrapper'>
            {
                tabs.slice(0,3).map((tab)=>
                <button onClick={()=>redirect(tab.link)} className='tab'><p className='tab-title'>{tab.title}</p></button>
                )
            }
            </div>
            <input placeholder='Search' className='search'/>
            <div className='tabs-wrapper'>
            {
                tabs.slice(3,6).map((tab)=>
                <button onClick={()=>redirect(tab.link)} className='tab'><p className='tab-title'>{tab.title}</p></button>
                )
            }
            </div>
        </div>
    )
}

export default Header