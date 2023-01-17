export default function MapFilter(props) {
  const thearray = props.thearray;
  const maparraylist = thearray.map((eachitem) => <li>{eachitem}</li>);
  const filterarraylist = thearray
  .filter((eachitem) => eachitem.includes("a"))
  .map((eachitem) => <li>{eachitem}</li>);

  return (
    <div>
      <p style={{backgroundColor:"lightgray"}}>Mapped List</p>
      <ul>{maparraylist}</ul>
      <p style={{backgroundColor:"lightgray"}}>Filtered List (Contain a)</p>
      <ul>{filterarraylist}</ul>
    </div>
  );
}
