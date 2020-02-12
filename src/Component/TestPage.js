import React from "react";

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
  IonButton
} from "@ionic/react";

function TestPage() {
  return (
    <IonApp>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Welcome to 123</IonCardSubtitle>
            <IonCardTitle>Running in React</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </IonApp>
  );
}

export default TestPage;
