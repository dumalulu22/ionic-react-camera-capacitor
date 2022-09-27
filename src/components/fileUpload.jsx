import { IonButton, IonLabel } from "@ionic/react";
import "./fileUpload.css";
import { AiOutlineFileAdd } from "react-icons/ai";
import { useContext } from "react";
import { Ctxt } from "../Ctxt";
import Extensions from "./ext";

const FileUpload = () => {
  var { file, setFile } = useContext(Ctxt);

  function _iconPicker(extenstion) {
    var value = "";
    Object.keys(Extensions()).map((key) =>
      Extensions()[key].includes(extenstion) ? (value = key) : ""
    );
    return value !== "" ? (
      <i className={value} style={{ fontSize: "30px" }}></i>
    ) : (
      <i className="bi bi-question-diamond" style={{ fontSize: "30px" }}></i>
    );
  }

  function _selected(data) {
    var name = data[0].name;
    var _ext = name.split(".");
    var ext =
      _ext <= 0
        ? (ext = file)
        : (ext = _ext[_ext.length - 1].trim().toLowerCase());

    setFile([...file, { name: name, ext: ext }]);
  }

  function List() {
    return (
      <div className="listItem">
        {file.map((key, index) => (
          <div className="item" key={index}>
            <IonLabel>{key.name}</IonLabel>
            <span>{_iconPicker(key.ext)}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <h3>select a file : </h3>

        <input
          style={{ display: "none" }}
          type="file"
          id="file-upload"
          onChange={(e) => _selected(e.target.files)}
        />
        <IonButton
          className="buttonUpload"
          onClick={() => document.getElementById("file-upload").click()}
        >
          selec file
        </IonButton>
        <br />
      </div>
      <div className="container">
        <h3>Selected files:</h3>
        <List />
      </div>
    </>
  );
};

export default FileUpload;
