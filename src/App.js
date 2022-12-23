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
  const data = [
    ["おやすみ", ",", "..."],
    ["おはよう", ",", "!"],
    ["こんにちは", ",", "さん。"],
    ["こんばんは", ",", "さん。"],
  ];
  const [input, setInput] = useState("");
  const [msg, setMsg] = useState(input);
  const [msgs, setMsgs] = useState(msg);
  const onChange = (event) => {
    setInput(event.target.value);
  };
  const onClick = () => {
    setMsg(input);
  };
  useEffect(() => {
    if (msg === "") {
      setMsgs("no message");
    } else {
      const h = Math.floor(new Date().getHours() / 6);
      setMsgs(data[h][0] + msg + data[h][1]);
    }
  }, [msg]);

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
      <div className="mx-0 my-3 row">
        <input type="text" className="form-control col" onChange={onChange} />
        <button className="btn btn-primary col-2" onClick={onClick}>
          Click
        </button>
      </div>
      <Hello message={msgs} type="primary" />
      <hr />
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="check1" onChange={onChange_flg} />
        <label className="form-check-label" htmlFor="check1">
          表示の切り替えボックス
        </label>
      </div>
      {flag ? <AlertMessage title="チェックはON!" msg="チェックONのメッセージです！" /> : <BoxMessage title="チェックはOFF!" msg="チェックOFFのメッセージです！" />}
      <hr />
      <Message type="dark">
        <p>タイトルです</p>
        <p>これはサンプルで作ったメッセージ</p>
        <p>これはコンテンツテキスト</p>
      </Message>
      <hr />
    </div>
  );
}

function Hello(props) {
  return <p className={"alert alert-" + props.type}>{props.message}</p>;
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

// 子要素を取得するコンポーネント
function Message(props) {
  let first = null;
  let data = null;
  if (Array.isArray(props.children)) {
    first = props.children[0];
    data = props.children.slice(1, props.children.length);
  } else {
    first = props.children;
    data = [<p>no data</p>];
  }
  return (
    <div className={"alert alert-primary"}>
      <ul className="list-group">
        <div className="text-center">{first}</div>
        {data.map((value) => (
          <li className="list-group-item">{value}</li>
        ))}
      </ul>
    </div>
  );
}

// サインインしていたらAppをexport, 未サインインならサインインに必要なフォームをexport
export default withAuthenticator(App);
