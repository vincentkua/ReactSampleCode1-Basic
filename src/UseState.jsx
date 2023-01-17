export default function UseState(props){
    const setstring = props.setstring;

    function changestate(){
        setstring("State Updated!!!")
    }


return(
    <div>
        <p style={{backgroundColor:"lightgray"}}>React Usestate Method</p>
        {props.mystring}
        <br />        
        <button onClick={()=>changestate()}>Change State</button>                     {/* arrowfunction */}
        {/* <button onClick={function() {changestate()}}>Change State</button> */}    {/* normalfunction */}
    </div>
)
}