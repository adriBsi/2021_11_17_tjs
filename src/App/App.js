import React from "react";
import { connect } from "react-redux";
import Button from "./components/Button/Button";
import FlexLayout from "./components/FlexLayout/FlexLayout";
import Header from "./components/Header/Header";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeThumbnail from "./components/MemeThumbnail/MemeThumbnail";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import { REST_ADR, REST_RESSOURCES } from "./config/config";
import store, {
  currentInitialState,
  ressourcesInitialState,
} from "./store/store";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

class App extends React.Component {
  componentDidUpdate() {
    console.log(
      "%c%s",
      "font-size:10pt;color:red;background-color:skyblue;border:1px solid black;text-align:center",
      "le changement est pret et effectif" + JSON.stringify(this.state)
    );
  }
  render() {
    console.log("APP-->", this.props);
    return (
      <>
        <Header />
        <Navbar />
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <h1>Bienvenue</h1>
              bla la bla
            </Route>
            <Route path="/thumbnail">
              <MemeThumbnail />
            </Route>
            <Route path="/edit">
              <FlexLayout>
                <MemeViewer
                  meme={this.props.current}
                  image={this.props.images.find(
                    (e) => e.id === this.props.current.imageId
                  )}
                />
                <MemeForm

                // onMemeChange={(meme) => {
                //   this.setState({ current: meme })
                // }}
                />
              </FlexLayout>
            </Route>
            <Route path="*">
              <h1>404 !! NOT FOUND</h1>
            </Route>
          </Switch>
        </div>
      </>
    );
  }
}
function mapStateToProps(state, own) {
  return {
    ...own,
    current: state.current,
    images: state.ressources.images,
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
