import './SucBH.css';
import { Link } from "react-router-dom";

function SucBH() {
   
    return( 
        <div className='SucBH'>
            <div className='Sucparent'>
            <img className="Str1" alt="Str1" src="img/Str.png"/>
            <img className="Str2" alt="Str2" src="img/Str.png"/>
            <img className="Str3" alt="Str3" src="img/Str.png"/>
            <img className="Str4" alt="Str4" src="img/Str.png"/>
            <img className="Emoji" alt="Emoji" src="img/Emoji.png"/>
            <img className="hun" alt="hun" src="img/hun.png"/>
            <img className="clap" alt="clap" src="img/clap.png"/>
            
            <img className="SucBHimg" alt="SucBHimg" src="img/SucBHimg.png"/>

            </div>
            <Link to="/GFInfo"><img className="Smtbtn" alt="Smtbtn" src="img/Smtbtn.png"/></Link>
    </div>
);
}
export default SucBH;
