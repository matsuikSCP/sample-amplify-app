import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Other from "./Other";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import reportWebVitals from "./reportWebVitals";
import { Amplify } from "aws-amplify";

// reactの仮想DOMを作成する（root要素はpublic/index.htmlで記述されている）
const root = ReactDOM.createRoot(document.getElementById("root"));
// 仮想DOMで、引数に渡した内容をレンダリングし指定されたエレメントに組み込む
root.render(
  <React.StrictMode>
    <AmplifyProvider>
      <App />
    </AmplifyProvider>
  </React.StrictMode>
);

// 計測ライブラリ、消しても問題ない
reportWebVitals();
