import { Facebook, Instagram, Twitter, Mail } from "@material-ui/icons"
import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-about">
            <div className='sidebar-about-title'>
                About me
            </div>
            <div className='sidebar-about-img'>
                <img src='/assets/sidebar-img.jpeg'/>
            </div> 
            <div className="sidebar-about-disc">
                Lorem ipsum dolor sit ament cosdkjkdt fg asdfsd feng dfksdfj asdjoiwerjw sncv fhowjm xc wed woei  sierijer ewikbnaoe j dje dkjdr ewljwes  dljf jedj jdde  d 
            </div>
        </div>

        <div className="sidebar-categories">
            <div className="sidebar-categories-title">
                categories
            </div>
            <div className="sidebar-categories-list">
                <ul>
                    <li>Life</li>
                    <li>Music</li>
                    <li>Life</li>
                    <li>Life</li>
                    <li>Life</li>
                    <li>Life</li>
                </ul>
            </div>
        </div>

        <div className="sidebar-social-media">
            <div className="sidebar-social-media-title">
                follow us
            </div>
            <div className="sidebar-social-media-icons">
                <ul>
                    <li><a href="#"><Facebook/></a></li>
                    <li><a href="#"><Instagram/></a></li>
                    <li><a href="#"><Twitter/></a></li>
                    <li><a href="#"><Mail/></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar