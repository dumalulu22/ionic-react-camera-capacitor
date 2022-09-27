import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import FileUpload from "../components/fileUpload";
import "./Tab3.css";

const Home = () => {
  return (
    <IonPage>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
      />
      <IonHeader>
        <IonToolbar>
          <IonTitle>View</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">View</IonTitle>
          </IonToolbar>
        </IonHeader>
        <FileUpload />
      </IonContent>
    </IonPage>
  );
};

export default Home;
