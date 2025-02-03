import './scroller.css';
import Marquee from "react-fast-marquee";

export default function Scroller() {
  return (
    <div className='scroll-container'>
        <div className="scorll-content">
            <Marquee className='marquee' speed={200} autoFill={true} style={{
              display: 'flex', alignItems: 'center', height: '100%',
            }} >
              <p>Graphic Designer</p>
              <img src="/Star.svg" alt="Star" width={30} height='auto'/>
              <p>UI/UX</p>
              <img src="/Star.svg" alt="Star" width={30} height='auto'/>
              <p>App Design</p>
              <img src="/Star.svg" alt="Star" width={30} height='auto'/>
              <p>Logo</p>
              <img src="/Star.svg" alt="Star" width={30} height='auto'/>
              <p>Brnad Identity</p>
              <img src="/Star.svg" alt="Star" width={30} height='auto'/>
              <p>Business Card</p>
              <img src="/Star.svg" alt="Star" width={30} height='auto'/>
              <p>Frontend Dev</p>
              <img src="/Star.svg" alt="Star" width={30} height='auto'/>
              <p>Build Web Site</p>
              <img src="/Star.svg" alt="Star" width={30} height='auto'/>
              <p>MERN</p>
              <img src="/Star.svg" alt="Star" width={30} height='auto'/>
              <p>React</p>
              <img src="/Star.svg" alt="Star" width={30} height='auto'/>
            </Marquee>
        </div>
    </div>
  )
}
