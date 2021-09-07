import { useEffect, useState } from "react";
import './Game.css'
import Result from './Result';
import { Stories } from "../Helpers/Stories";
const Game = ({Username}) =>{
    const [textVal, setTextVal] = useState("");
    const [seconds, setSeconds] = useState(1);
    const [finalResult, setFinalResult] = useState({coorect:0, wrongs:0, chars:0})
    const [started, setStarted] = useState(false)
    const StoryDiv = document.getElementById('StoryDiv');
    const TextArea = document.getElementById('inputTextarea');
    const loadStory = () =>{
        StoryDiv.innerHTML = "";
        setTextVal("");
        TextArea.disabled = false;
        const randomstory = Math.floor(Math.random() * Stories.length);
        const storyData = Stories[randomstory].story;
        storyData.split('').forEach(chare => {
            const characterSpan = document.createElement('span');
            characterSpan.innerText = chare
            StoryDiv.appendChild(characterSpan);
        });
        setSeconds(60);
        setStarted(true);
    }
    // loadStory()

    useEffect(() => {
        let timerId;
        if (seconds > 0) {
          const timer = () => setTimeout(() => setSeconds(seconds - 1), 1000);
          timerId = timer();
        } else {
          setSeconds('Times Up!');
          TextArea.disabled = true;
        }
        return () => {
            clearTimeout(timerId);
          };// eslint-disable-next-line
      }, [seconds]);

        const Textchanged = (e) =>{
            setTextVal(e.target.value);
            var arraystory = StoryDiv.querySelectorAll('span');
            var arrayval = e.target.value.split('') 
            arraystory.forEach((charespan, ind) =>{
                const character = arrayval[ind];
                if(character == null){
                    charespan.classList.remove('correct');
                    charespan.classList.remove('incorrect');
                }
                else if(character === charespan.innerText){
                    charespan.classList.add('correct');
                    charespan.classList.remove('incorrect');
                }else{
                    charespan.classList.add('incorrect');
                    charespan.classList.remove('correct');
                }
            })
        }
    const handleChange = (e) => {
        e.preventDefault();
      };
      const finalResultFun = () =>{
        //   e.target.disabled = true
        var corrects = document.querySelectorAll(".correct").length;
        var wrongs = document.querySelectorAll(".incorrect").length;
        var totalChar = corrects + wrongs;
        if(totalChar < 1){
            alert('Type Something before Result');
            return
        }
        setFinalResult({...finalResult, coorect:corrects, wrongs:wrongs, chars:totalChar })
      }
    return(
        <div className="outerHero">
            <div className="herobody">
            {finalResult.chars >= 1 ? <Result Username={Username}  finalResult={finalResult} /> :
            <>
            {started &&  <><h2 id="timer">{seconds}</h2>
            {seconds === 'Times Up!' && <button className="btn btn-info" onClick={finalResultFun}>Result</button>}
            </>}
                <div>
                    <button className="btn btn-primary float-end" onClick={loadStory}>{started ? 'Reset' : 'Start'}</button>
                    <textarea value={textVal} id="inputTextarea"    onCut={handleChange}
                    onCopy={handleChange} onPaste={handleChange} placeholder="Start Typing here..." onChange={(e) => Textchanged(e)}></textarea>
                </div>
                <div  id="StoryDiv"></div>
                </>
            }
            </div>
        </div>
    )
}

export default Game;