import React,{useState,useEffect} from "react";

function FunctionalHook(){
    const [count,setCount]=useState(0)
    const [Name,setName] = useState()
    const [Age,setAge] = useState();

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });


    return(
        <div>
            <p>You clicked {count} </p>
            <p>Your Name {Name} </p>
            <p>You Age {Age} </p>

            <button onClick={()=>setCount(count+1)}>click me</button>
            <button onClick={()=>setName("Badhon")}>set name</button>
            <button onClick={()=>setAge(24)}>Set Age</button>

        </div>
    )

}

export default FunctionalHook