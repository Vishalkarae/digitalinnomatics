import { useNavigate } from "react-router-dom";
import { Banner as BannerType } from "../../types";
import '../../styles/banner.css'
import { useEffect, useRef, useState } from "react";


const Banner=(props:{mode:"static"|"dynamic",banners:BannerType[],delay:number,autoChange?:boolean})=>{

    const navigate = useNavigate();
    const container=useRef<any>(null)
    const currentBanner=useRef(0);
    const timerSet=useRef(false);

    const setBanner=(index:number)=>{
        console.log(index,container.current.clientWidth)
        if(container.current)
        {
            const pageWidth = container.current.clientWidth;
            container.current.scrollTo({
                left: index * pageWidth,
                behavior: "smooth",
            });
            currentBanner.current=index;
        }
    }

    const getCurrentBanner=()=>currentBanner.current

    useEffect(()=>{
        if(props.autoChange && !timerSet.current)
        {
            setInterval(()=>{
                let current=getCurrentBanner();
                //console.log(current);
                setBanner(current>=props.banners.length-1?0:current+1);
            },props.delay?props.delay:1500)
            timerSet.current=true;
        }
        if (container.current) {
            container.current.addEventListener("touchmove", handleTouchMove, { passive: false });
          }
      
        return () => {
        if (container.current) {
            container.current.removeEventListener("touchmove", handleTouchMove);
        }
        }
    },[])

    const handleTouchMove=(e:any)=>{
        console.log(e);
        e.preventDefault()
    }

    return(
        <div className="banners-wrapper">
            <div className="banners-subwrapper" ref={container}>
            {
                props.banners.map((banner:BannerType,index:number)=>
                props.mode=="static"
                ?
                <div className="banner-wrapper-static">
                    <button onClick={()=>navigate(banner.redirectUrl)} className="banner-content-wrapper-static">
                        <img src={banner.image}/>
                        <p>{index}</p>
                    </button>
                </div>
                
                :
                <div className="banner-wrapper-dynamic">
                    <img src={banner.image}/>
                    <div className="banner-content-wrapper-dynamic">
                        <p>{banner.title}</p>
                        <button onClick={()=>navigate(banner.redirectUrl)}><p>{banner.redirectButtonTitle}</p></button>
                    </div>
                </div>
            )
            }
            </div>
        </div>
    )

}

export default Banner