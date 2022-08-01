import {useState} from 'react';
import Button from "./Button";
import Dice from "./Dice";


function random(n) {
    return Math.ceil(Math.random()* n)
}

function App(){
    const [num,setNum] = useState(1);

    const handleRollCilck = () =>{
        const nextNum = random(6);
        setNum(nextNum);
    }

    const handleClearCilck = () =>{
        setNum(1);
    }

    return (
    <div>
        <div>
            <Button onClick={handleRollCilck}>던지기</Button>
            <Button onClick={handleClearCilck}>처음부터</Button>
        </div>
        <Dice color="red" num={num}/>
    </div>);
}

export default App;