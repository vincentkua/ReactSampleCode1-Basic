import Hello from "./Hello";
import MapFilter from "./MapFilter";
import Props from "./Props";
import UseState from "./UseState";
import ConditionRender from "./ConditionRender";
import UseReducer from "./UseReducer";
import RecordsReducer from "./RecordReducer";

function App(props) {
  const myArray = ["aaa", "bbb", "ccc", "ddd", "abcd"];
  const [mystring, setstring] = React.useState("Default State");
  const [records, dispatch] = React.useReducer(RecordsReducer, ["one", "two"]);

  return (
    <div>
      <Hello />
      <Props value1="Props" value2="Sample" />
      <UseState mystring={mystring} setstring={setstring} />{" "}
      <MapFilter thearray={myArray} />
      <ConditionRender showitem1={true} showitem2={false} showitem3={true} />
      <UseReducer records={records} dispatch={dispatch} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
