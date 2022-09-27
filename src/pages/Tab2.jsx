import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import "./Tab1.css";
import { Link } from "react-router-dom";
import Message from "../components/message";
import { AiFillEdit } from "react-icons/ai";
const Tab2 = ({ saved }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Message</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Message</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Message saved={saved} />

        <div className="fab">
          <Link to="./tab1">New Message </Link>
          <AiFillEdit size="25px" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
