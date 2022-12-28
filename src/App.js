import logo from "./logo.svg";
import "./App.css";
// スタイルシートをインポート
import "@aws-amplify/ui-react/styles.css";
//  Amplify本体のオブジェクト、サインアウト用のAuthオブジェクト
import { Amplify, Auth, DataStore } from "aws-amplify";
// UI関係のモジュールからwithAuthenticator関数をインポート
import { withAuthenticator } from "@aws-amplify/ui-react";
// 自動生成される情報をインポート
import aws_exports from "./aws-exports";
import { Header, BoardComponent, BoardComponentCollection } from "./ui-components";
import { useState, useEffect } from "react";
import { Board } from "./models";

// 設定情報を反映（バックエンドとうまくやり取りするためのもの）
Amplify.configure(aws_exports);

// const content1 = <BoardComponentCollection />;
const content2 = <p>タブ2のコンテンツ</p>;
const content3 = <p>タブ3のコンテンツ</p>;
const content4 = <p>タブ4のコンテンツ</p>;

function App() {
  const [content1, setContent1] = useState("Test");
  const [input, setInput] = useState("");
  const [find, setFind] = useState(input);
  const doChange = (event) => {
    setInput(event.target.value);
  };
  const doFilter = (event) => {
    setFind(input);
  };
  useEffect(() => {
    DataStore.query(Board, (ob) => ob.name("contains", find)).then((values) => {
      const data = [];
      for (let item of values) {
        data.push(<BoardComponent board={item} key={item.id} />);
      }
      setContent1(
        <div>
          <div className="mx-0 my-3 row">
            <input type="text" className="form-control col" onChange={doChange} />
            <button className="btn btn-primary col-2" onClick={doFilter}>
              Click
            </button>
          </div>
          {data}
        </div>
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, find]);

  return (
    <div className="py-4">
      <Header className="mb-4" />
      <p>＊これは、UIコンポーネントを利用した表示です。</p>
      <Now bg="red" />
      <hr />
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a href="#tab1" className="nav-link active" data-bs-toggle="tab">
            List
          </a>
        </li>
        <li className="nav-item">
          <a href="#tab2" className="nav-link" data-bs-toggle="tab">
            Create
          </a>
        </li>
        <li className="nav-item">
          <a href="#tab3" className="nav-link" data-bs-toggle="tab">
            Update
          </a>
        </li>
        <li className="nav-item">
          <a href="#tab4" className="nav-link" data-bs-toggle="tab">
            Delete
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div id="tab1" className="my-2 tab-pane active">
          {content1}
        </div>
        <div id="tab2" className="my-2 tab-pane">
          {content2}
        </div>
        <div id="tab3" className="my-2 tab-pane">
          {content3}
        </div>
        <div id="tab4" className="my-2 tab-pane">
          {content4}
        </div>
      </div>
      <p className="my-2">
        <a className="btn btn-primary" href="." onClick={Auth.signOut}>
          Sigh Out!
        </a>
      </p>
    </div>
  );
}

function Now() {
  return <p className="bg-secondary text-dark bg-opaciry-25 p-3 my-3">現在は、{new Date().getHours()}時です。</p>;
}

// サインインしていたらAppをexport, 未サインインならサインインに必要なフォームをexport
export default withAuthenticator(App);
