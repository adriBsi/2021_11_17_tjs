import React from "react";
import Button from "./components/Button/Button";

class App extends React.Component {
  counter = 0;
  constructor(props) {
    super(props);
    this.state={counter:0, value2:0}
  }
  componentDidUpdate(){
    console.log('%c%s','font-size:42pt;color:red;background-color:skyblue','le changement est pret et effectif'+this.state.counter);
  }
  render() {
    return (
      <div className="App">
        counter: {this.state.counter}
        <br />
        <Button
          text="soustraire 1"
          onButtonClicked={() => {
            this.setState({counter:this.state.counter-1});
            console.log(this.state.counter);
          }}
          bgColor="tomato"
        />
        <Button
          text="Ajouter 1"
          onButtonClicked={() => {
            this.setState({counter:this.state.counter+1});
            console.log(this.state.counter);
          }}
          bgColor="green"
        />
      </div>
    );
  }
}
export default App;
