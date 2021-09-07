import {useState} from 'react';
import Game from './Game';
import Login from './Login';

const MainView = () =>{
    const [Username, setUsername] = useState("");
    const [loggedIn, setloggedIn] = useState(false)
    const loggedin = () =>{
        if(Username !== ''){
            setloggedIn(true)
        }else{
            setloggedIn(false)
            alert('name required')
        }
    }
    const UsernameFun = (e) =>{
        setUsername(e.target.value)
    }
    return(
        <>
            <p className="float-end">
                <a href="https://github.com/designerprasan007/Typing-speed-game">Source Code</a></p>
            {!loggedIn && <Login loggedin={loggedin} Username={Username} UsernameFun={UsernameFun} />}
            {loggedIn && <Game Username={Username} />}
        </>
    )
}
export default MainView;