import logo from "./logo.svg";
import "./App.css";
// スタイルシートをインポート
import "@aws-amplify/ui-react/styles.css";
//  Amplify本体のオブジェクト、サインアウト用のAuthオブジェクト
import { Amplify, Auth } from "aws-amplify";
// 認証機能組み込みで使う
import { Authenticator } from "@aws-amplify/ui-react";
// UI関係のモジュールからwithAuthenticator関数をインポート
import { withAuthenticator } from "@aws-amplify/ui-react";
// 自動生成される情報をインポート
import aws_exports from "./aws-exports";
import { Header } from "./ui-components";

// 設定情報を反映（バックエンドとうまくやり取りするためのもの）
Amplify.configure(aws_exports);

function App() {
  return (
    <div className="py-4">
      <Header className="mb-4" />
      <p>＊これは、UIコンポーネントを利用した表示です。</p>
      <Hello message="サンプルのメッセージです。" type="primary" />
      <Hello message="表示タイプの変更" type="dark" />
      <Now />
      <button className="btn btn-primary" onClick={onClick}>
        Click me!
      </button>
    </div>
  );
}

function Hello(props) {
  return <p className={"alert alert-" + props.type}>{props.message}</p>;
}

function Now() {
  return <p className="bg-secondary text-dark bg-opaciry-25 p-3 my-3">現在は、{new Date().getHours()}時です。</p>;
}

function onClick() {
  alert("クリック！！");
}

// サインインしていたらAppをexport, 未サインインならサインインに必要なフォームをexport
export default withAuthenticator(App);
