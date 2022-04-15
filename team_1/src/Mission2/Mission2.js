import './Mission2.css';
import { Link } from "react-router-dom";


function Mission2() {

    const [currentClick, setCurrentClick] = React.useState(null);
    const [prevClick, setPrevClick] = React.useState(null);

    const GetClick = (e) => {
        setCurrentClick(e.target.id);
        console.log(e.target.id);
    };

    React.useEffect(
        (e) => {
          if (currentClick !== null) {
            let current = document.getElementById(currentClick);
            console.log(current);
            if(current.id == "bbtn1"){
                current.style = "background : URL(https://i.ibb.co/GP5n2nv/Group-10-3.png); background-size: contain; background-repeat: no-repeat; background-position: center;";
            }
           
           if(current.id == "bbtn2"){
            current.style = "background : URL(https://i.ibb.co/GJH2Jxn/Group-9-3.png); background-size: contain; background-repeat: no-repeat; background-position: center;";
            }

            if(current.id == "bbtn3"){
                 current.style = "background : URL(https://i.ibb.co/b30rVCH/Group-8-3.png); background-size: contain; background-repeat: no-repeat; background-position: center;";
            }
            setPrevClick(currentClick);
        }
    
          if (prevClick !== null) {
            let prev = document.getElementById(prevClick);
            if(prev.id == "bbtn1"){
                prev.style = "background : URL(https://i.ibb.co/1J2xNM0/Group-10.png); background-size: contain; background-repeat: no-repeat; background-position: center;";
            }
            
            if(prev.id == "bbtn2"){
                prev.style = "background : URL(https://i.ibb.co/bRfwR4b/Group-9.png); background-size: contain; background-repeat: no-repeat; background-position: center;";
            }

            if(prev.id == "bbtn3"){
                prev.style = "background : URL(https://i.ibb.co/tcgFx5V/Group-8.png); background-size: contain; background-repeat: no-repeat; background-position: center;";
            }

            
          }
        },
        [currentClick]
      );



    return( 
        <div className='mission2'>
            <div className="topbar2"/>
            <div className="comment">
                원하는 색을 선택하고<td/>버튼을 누르세요. (다중 선택 가능)
            </div>
            
            <div className="brec1">
                <button id="bbtn1" className="bbtn1" onClick={GetClick}/>
                <button id="bbtn2" className="bbtn2" onClick={GetClick}/>
                <button id="bbtn3" className="bbtn3" onClick={GetClick}/>
            </div>
            
            <div className="brec2">
                <Link to="/Mission2_result">
                    <button className="next_btn"/>
                </Link>
            </div>
           
        </div>

    );
    }

export default Mission2;