import './Result.css'
const Result = ({finalResult, Username}) =>{
    return(
        <div className="resultBg">
        <h1>Name: {Username}</h1>
        <h1>Total Characters Typed: {finalResult.chars}</h1>
        <h1>Total Right Characters: {finalResult.coorect}</h1>
        <h1>Total Wrong Characters: {finalResult.wrongs}</h1>
        <h1>Characters per Second: {Math.floor(finalResult.chars / 10)}</h1>

        </div>
    )
}

export default Result