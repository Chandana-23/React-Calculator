import {React,useState} from "react";

const Calculator = () => {
    const [input,setInput] = useState("");
    const [result,setResult] = useState(0);
	const handler = (e) =>{
		setInput(e.target.value);
	};
    const click=()=>{
        if(input==="")
        {
            document.getElementById("res").innerHTML = 0;
        }
        else{
            try{
                setResult(eval(input));
                document.getElementById("res").innerHTML = result;
            }
            catch(err)
            {
                document.getElementById("res").innerHTML = err.message;
            }
        }
    }

    return ( 
        <div className="App">
            <input type="text" placeholder="Enter your expression" onChange={handler} name="input" value={input}/>
            <br/>
            <button onClick={()=>click()}>Result</button>
		    <h3 id="res">{result}</h3>
            <div>
                <button onClick={()=>setInput(input+"1")}>1</button>
                <button onClick={()=>setInput(input+"2")}>2</button>
                <button onClick={()=>setInput(input+"3")}>3</button><br/>
                <button onClick={()=>setInput(input+"4")}>4</button>
                <button onClick={()=>setInput(input+"5")}>5</button>
                <button onClick={()=>setInput(input+"6")}>6</button><br/>
                <button onClick={()=>setInput(input+"7")}>7</button>
                <button onClick={()=>setInput(input+"8")}>8</button>
                <button onClick={()=>setInput(input+"9")}>9</button><br/>
                <button onClick={()=>setInput(input+"0")}>0</button>
                <button onClick={()=>setInput(input+"+")}>+</button>
                <button onClick={()=>setInput(input+"-")}>-</button><br/>
                <button onClick={()=>setInput(input+"*")}>*</button>
                <button onClick={()=>setInput(input+"/")}>/</button>
                <button onClick={()=>setInput(input+"%")}>%</button><br/>
                <button onClick={()=>setInput(input+".")}>.</button>
                <button onClick={()=>{setInput("");
                    setResult(0)}}>CLR</button>
                <button onClick={()=>setInput(input.slice(0,-1))}>⌫</button>
            </div>
        </div>
     );
}
 
export default Calculator;