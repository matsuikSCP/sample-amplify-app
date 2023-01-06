import "@aws-amplify/ui-react/styles.css";
import { Storage, Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Header } from "./ui-components";
import { useState, useEffect } from "react";

function Other() {
  //投稿部分
  const [content1, setContent1] = useState("");
  const [fname, setFname] = useState("");
  const [msg, setMsg] = useState("");
  useEffect(() => {
    func1(setContent1, fname, setFname, msg, setMsg);
  }, [fname, msg]);

  // リスト表示
  const [content2, setContent2] = useState("");
  const [rmfname, setRmfname] = useState("");
  useEffect(() => {
    func2(setContent2, rmfname, setRmfname);
  }, [rmfname]);
  return (
    <div>
      {/* <Header className="my-4" /> */}
      <h3>S3と連携した機能</h3>
      <div className="border border-primary px-3 py-2 my-1">{content1}</div>
      <div className="border border-primary px-3 py-2 my-1">{content2}</div>
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

const func2 = (setContent, rmfname, setRmfname) => {
  const onSelChange = (event) => {
    setRmfname(event.target.value);
  };
  const onBtnClick = () => {
    const opt = {
      level: "protected",
    };
    Storage.remove(rmfname, opt).then((values) => {
      alert(rmfname + "を削除しました。");
    });
  };
  const opt = {
    level: "protected",
    download: true,
  };
  Storage.list("", opt).then((values) => {
    const data = [];
    for (let item of values.results) {
      data.push(
        <option key={item.eTag} value={item.key}>
          {item.key}
        </option>
      );
    }
    setContent(
      <div>
        <h5 className="text-center">「protected」のファイル</h5>
        <select className="form-control my-2" onChange={onSelChange}>
          {data}
        </select>
        <button className="btn btn-primary text-center" onClick={onBtnClick}>
          削除
        </button>
      </div>
    );
  });
};

export default withAuthenticator(Other);
