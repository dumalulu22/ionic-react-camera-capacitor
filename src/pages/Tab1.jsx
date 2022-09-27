import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import Mail from "../components/form";
import "./Tab2.css";

const Tab1 = ({ saved, handleSave }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Email</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Mail saved={saved} handleSave={handleSave} />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
