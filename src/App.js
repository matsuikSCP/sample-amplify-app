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

//コピペだとサインアウトしてくれなかった（リロードが必要らしい？）
const click = () => {
  Auth.signOut();
  window.location.reload();
};

function App() {
  return (
    <Authenticator>
      <div classNAme="py-4">
        <Header className="mb-4" />
        <p>＊これは、UIコンポーネントを利用した表示です。</p>
      </div>
      {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Sample React Native</h1>
        <h2>
          <a className="App-link" href="." onClick={click}>
            SignOut
          </a>
        </h2>
      </header>
    </div> */}
    </Authenticator>
  );
}

export default App;
// サインインしていたらAppをexport, 未サインインならサインインに必要なフォームをexport
// export default withAuthenticator(App);
