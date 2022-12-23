import logo from "./logo.svg";
import "./App.css";
// スタイルシートをインポート
import "@aws-amplify/ui-react/styles.css";
//  Amplify本体のオブジェクト、サインアウト用のAuthオブジェクト
import { Amplify, Auth } from "aws-amplify";
// UI関係のモジュールからwithAuthenticator関数をインポート
import { withAuthenticator } from "@aws-amplify/ui-react";
// 自動生成される情報をインポート
import aws_exports from "./aws-exports";
import { Header } from "./ui-components";
import { useState, useEffect } from "react";

// 設定情報を反映（バックエンドとうまくやり取りするためのもの）
Amplify.configure(aws_exports);

function App() {
  const [msg, setMsg] = useState("ok");
  const onClick = (value) => {
    setMsg("You typed:" + value);
  };

  const [flag, setFlag] = useState(false);
  const onChange_flg = (event) => {
    setFlag(event.target.checked);
  };

  return (
    <div className="py-4">
      <Header className="mb-4" />
      <p>＊これは、UIコンポーネントを利用した表示です。</p>
      <Now />
      <hr />
      <Message title="結果の表示" value={msg} />
      <Form value="ok" onClick={onClick} />
      <hr />
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="check1" onChange={onChange_flg} />
        <label className="form-check-label" htmlFor="check1">
          表示の切り替えボックス
        </label>
      </div>
      {flag ? <AlertMessage title="チェックはON!" msg="チェックONのメッセージです！" /> : <BoxMessage title="チェックはOFF!" msg="チェックOFFのメッセージです！" />}
    </div>
  );
}

function Now() {
  return <p className="bg-secondary text-dark bg-opaciry-25 p-3 my-3">現在は、{new Date().getHours()}時です。</p>;
}

function AlertMessage(props) {
  return (
    <div className="alert alert-primary">
      <h3>{props.title}</h3>
      {props.msg}
    </div>
  );
}

function BoxMessage(props) {
  return (
    <div className="card">
      <div className="card-header">{props.title}</div>
      <div className="card-body">{props.msg}</div>
    </div>
  );
}

function Message(props) {
  return (
    <div className="alert alert-primary">
      <h6>{props.title}</h6>
      <p>{props.value}</p>
    </div>
  );
}

function Form(props) {
  const [value, setValue] = useState(props.value);
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onClick = (evnt) => {
    props.onClick(value);
  };
  return (
    <div className="alert alert-info">
      <input type="text" className="form-control" onChange={onChange} value={value} />
      <button className="btn btn-primary" onClick={onClick}>
        Click
      </button>
    </div>
  );
}

// サインインしていたらAppをexport, 未サインインならサインインに必要なフォームをexport
export default withAuthenticator(App);
