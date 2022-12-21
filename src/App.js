import logo from "./logo.svg";
import "./App.css";
// スタイルシートをインポート
import "@aws-amplify/ui-react/styles.css";
//  amplify本体のオブジェクト
import { Amplify } from "aws-amplify";
// UI関係のモジュールからwithAuthenticator関数をインポート
import { withAuthenticator } from "@aws-amplify/ui-react";
// 自動生成される情報をインポート
import aws_exports from "./aws-exports";

// 設定情報を反映（バックエンドとうまくやり取りするためのもの）
Amplify.configure(aws_exports);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

// サインインしていたらAppをexport, 未サインインならサインインに必要なフォームをexport
export default withAuthenticator(App);
