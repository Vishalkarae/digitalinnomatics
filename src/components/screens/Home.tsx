import { useRef } from 'react'
import '../../styles/home.css'
import Banner from '../resources/Banner'
import { Banner as BannerType} from '../../types'

const Home=()=>{

    const banners=useRef<BannerType[]>([
        {title:"Banner1",redirectUrl:"/"},
        {title:"Banner2",redirectUrl:"/"},
        {title:"Banner3",redirectUrl:"/"},
        {title:"Banner4",redirectUrl:"/"}
    ]).current

    return(
        <div className='main-wrapper'>
            <div className='banner-wrapper'>
                <Banner autoChange mode="static" delay={2500} banners={banners}/>
                {/* <p style={{alignSelf:"center"}}>Banner</p> */}
            </div>
            <div className='services-wrapper'>
                <p style={{alignSelf:"center"}}>Services Offered</p>
                <p style={{alignSelf:"center"}}>Enroll now button</p>
            </div>
            <div className='tutors-wrapper'>
                <p style={{alignSelf:"center"}}>Course Tutors Info</p>
                <p style={{alignSelf:"center"}}>Schedule a callback button</p>
            </div>
        </div>
    )

}

export default Home