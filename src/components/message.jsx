import React from "react";

import "./message.css";

export default function Message({ saved }) {
  const Item = () => {
    console.log("from message");
    console.log(saved);
    return saved.map((l, k) => (
      <div key={k} className="message-item">
        <span className="msgName">{l.name}</span>
        <span className="msgContent">{l.message}</span>
      </div>
    ));
  };
  return (
    <div className="message-list">
      <Item />
    </div>
  );
}
