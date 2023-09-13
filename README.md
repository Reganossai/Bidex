# flighttest app created using react 

The project is an airport app that shows the arrivals and departures from an airport. It has a register page to register users and log into the website based on users stored in local storage. The dashboard of the app is visible once the user is logged in.





// React is loaded and is available as React and ReactDOM
// imports should NOT be used
const List = (props) => {
  
  return  null;
}

document.body.innerHTML = "<div id='root'> </div>";
  
const rootElement = document.getElementById("root");
ReactDOM.render(<List items={["A", "B", "C"]} />, rootElement);

let listItem = document.querySelectorAll("li")[2];
if(listItem) {
  listItem.click();
}
setTimeout(() => console.log(document.getElementById("root").innerHTML));