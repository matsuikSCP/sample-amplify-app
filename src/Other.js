import "@aws-amplify/ui-react/styles.css";
import { Storage, Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Header } from "./ui-components";
import { useState, useEffect } from "react";

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

const func1 = (setContent, fname, setFname, msg, setMsg) => {
  const onFnameChange = (event) => {
    setFname(event.target.value);
  };
  const onMsgChange = (event) => {
    setMsg(event.target.value);
  };
  const onClick = (event) => {
    const opt = {
      level: "protected",
    };
    const name = fname.indexOf(".") === -1 ? fname + ".txt" : fname;
    Storage.put(name, msg, opt).then((value) => {
      alert(name + "を保存しました");
    });
  };
  setContent(
    <div>
      <input type="text" className="form-control my-2" onChange={onFnameChange} />
      <textarea className="form-control my-2" onChange={onMsgChange} />
      <button className="btn btn-primary my-2 text-center" onClick={onClick}>
        保存
      </button>
    </div>
  );
};

export default withAuthenticator(Other);
