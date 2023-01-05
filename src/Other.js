import "@aws-amplify/ui-react/styles.css";
import { Storage, Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Header } from "./ui-components";
import { useState, useEffect } from "react";

const func1 = (setContent) => {
  const opt = {
    level: "public",
    download: true,
  };
  Storage.get("sample.txt", opt).then((value) => {
    value.Body.text().then((data) => {
      const arr = data.split("\n");
      const res = [];
      for (let item of arr) {
        res.push(<li>{item}</li>);
      }
      setContent(<ul>{res}</ul>);
    });
    // setContent(<img width="300px" height="200px" src={value} />);
  });
};

function Other() {
  const [content, setContent] = useState("");
  const [fname, setFname] = useState("");
  const [msg, setMsg] = useState("");
  useEffect(() => {
    func1(setContent, fname, setFname, msg, setMsg);
  }, [fname, msg]);
  return (
    <div>
      <Header className="my-4" />
      <p>*これは新たに利用した表示です。</p>
      <div className="border border-primary px-3 py-2">{content}</div>
    </div>
  );
}

export default withAuthenticator(Other);
