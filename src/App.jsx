import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from "@ionic/react";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import { IonReactRouter } from "@ionic/react-router";
import { document, mail, send } from "ionicons/icons";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";
import { Ctxt } from "./Ctxt";

import { useState, useEffect } from "react";
import "@ionic/react/css/core.css";

const App = () => {
  var [file, setFile] = useState([]);
  var [fileExt, setFileExt] = useState("");
  const [emailSent, setES] = useState([]);
  var [saved, setSaved] = useState(
    localStorage.getItem("sent") ? JSON.parse(localStorage.getItem("sent")) : []
  );
  const refresh = () => {
    saved = localStorage.getItem("sent")
      ? JSON.parse(localStorage.getItem("sent"))
      : [];
    setSaved(saved);
    console.log("refreshed!!");
  };
  useEffect(() => {
    console.log("new message");
  }, [saved]);

  return (
    <Ctxt.Provider value={{ file, setFile, fileExt, setFileExt }}>
      <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/tab1">
                <Tab1 saved={emailSent} handleSave={setES} />
              </Route>
              <Route exact path="/tab2">
                <Tab2 saved={emailSent} />
              </Route>
              <Route path="/tab3">
                <Tab3 />
              </Route>
              <Route exact path="/">
                <Redirect to="/tab1" />
              </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="tab1" href="/tab1">
                <IonIcon icon={send} />
                <IonLabel>Send</IonLabel>
              </IonTabButton>
              <IonTabButton onClick={refresh} tab="tab2" href="/tab2">
                <IonIcon icon={mail} />
                <IonLabel>Mails</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab3" href="/tab3">
                <IonIcon icon={document} />
                <IonLabel>Upload file</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
    </Ctxt.Provider>
  );
};

export default App;
defineCustomElements(window);
