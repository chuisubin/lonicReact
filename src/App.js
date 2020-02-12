import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";
import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton,
  IonModal
} from "@ionic/react";

// import TestPage from "./Component/TestPage";
class App extends Component {
  state = {
    chomps: 0
  };
  unchomp = () => {
    if (this.state.chomps > 0) {
      this.setState({
        chomps: (this.state.chomps -= 1)
      });
    }
  };
  chomp = () => {
    this.setState({
      chomps: (this.state.chomps += 1)
    });
  };

  render() {
    return (
      <IonApp>
        <IonCardHeader>
          <IonToolbar color="primary">
            <IonTitle>News App v1.0</IonTitle>
          </IonToolbar>
        </IonCardHeader>

        <IonContent>
          <IonCard>
            <img src="https://images.unsplash.com/photo-1549240923-93a2e080e653?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2165&q=80" />
            <IonCardHeader>
              <IonCardSubtitle>Crocco</IonCardSubtitle>
              <IonCardTitle>
                You've been chomped {this.state.chomps} times!
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonButton onClick={this.chomp}>Chomp</IonButton>
              <IonButton onClick={this.unchomp}>UnChomp</IonButton>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonApp>
    );
  }
}

export default App;
