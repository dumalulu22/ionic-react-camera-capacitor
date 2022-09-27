import { useState } from "react";

export default function innitState() {
  var [file, setFile] = useState([]);
  var [fileExt, setFileExt] = useState("");
  return file, setFile, fileExt, setFileExt;
}
