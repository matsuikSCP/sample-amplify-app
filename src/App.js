import logo from "./logo.svg";
import "./App.css";
// スタイルシートをインポート
import "@aws-amplify/ui-react/styles.css";
//  Amplify本体のオブジェクト、サインアウト用のAuthオブジェクト
import { Amplify, Auth, DataStore, Predicates, SortDirection, API, graphqlOperation } from "aws-amplify";
// UI関係のモジュールからwithAuthenticator関数をインポート
import { withAuthenticator } from "@aws-amplify/ui-react";
// 自動生成される情報をインポート
import aws_exports from "./aws-exports";
import { Header, BoardComponent, BoardComponentCollection } from "./ui-components";
import { useState, useEffect } from "react";
import { Board, Person } from "./models";
import { listPeople, listBoards } from "./graphql/queries";

// 設定情報を反映（バックエンドとうまくやり取りするためのもの）
Amplify.configure(aws_exports);

function App() {
  // List表示用コンポーネント
  // const content1 = <BoardComponentCollection />;
  const [content1, setContent1] = useState("");
  const [input, setInput] = useState("");
  const [find, setFind] = useState(input);
  const doChange = (event) => {
    setInput(event.target.value);
  };
  useEffect(() => {
    ListBoard(input, setContent1, doChange);
  }, [input, find]);

  //作成用
  const [content2, setContent2] = useState("");
  const [fmsg, setFmsg] = useState("");
  const [femail, setFemail] = useState("");
  const [fimg, setFimg] = useState("");
  useEffect(() => {
    CreateBoard(setContent2, fmsg, femail, fimg, setFmsg, setFemail, setFimg);
  }, [fmsg, femail, fimg]);

  //更新用
  const [content3, setContent3] = useState("");
  const [umsg, setUmsg] = useState("");
  const [uimg, setUimg] = useState("");
  const [seldata, setSeldata] = useState([]);
  const [selbrd, setSelbrd] = useState(null);
  useEffect(() => {
    UpdateBoard(setContent3, seldata, setSeldata, umsg, uimg, setUmsg, setUimg, selbrd, setSelbrd);
  }, [content1, umsg, uimg, selbrd, seldata]);

  //削除用
  const [content4, setContent4] = useState("");
  const [deldata, setDeldata] = useState("");
  const [delbrd, setDelbrd] = useState("");
  useEffect(() => {
    DeleteBoard(setContent4, deldata, setDeldata, delbrd, setDelbrd);
  }, [content1, deldata, delbrd]);

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

function ListBoard(input, setContent1, doChange) {
  API.graphql(graphqlOperation(listBoards)).then((values) => {
    const data = values.data.listBoards.items;
    const arr = [];
    for (let item of data) {
      arr.push(<BoardComponent board={item} key={item.id} />);
    }
    setContent1(<div>{arr}</div>);
  });
}

function CreateBoard(setContent2, fmsg, femail, fimg, setFmsg, setFemail, setFimg) {
  const onEmailChange = (event) => {
    const v = event.target.value;
    setFemail(v);
  };
  const onMsgChange = (event) => {
    const v = event.target.value;
    setFmsg(v);
  };
  const onImgChange = (event) => {
    const v = event.target.value;
    setFimg(v);
  };
  const onClick = () => {
    DataStore.query(Person, (ob) => ob.email.eq(femail)).then((value) => {
      if (value.length != 1) {
        alert("アカウントが見つかりません。");
        return;
      }
      const bd = new Board({
        message: fmsg,
        name: value[0].name,
        image: fimg == "" ? null : fimg,
        personID: value[0].id,
      });
      DataStore.save(bd).then(() => {
        alert("メッセージを投稿しました。");
      });
    });
  };
  setContent2(
    <div>
      <h3>Create new Board</h3>
      <div className="alert alert-primary my-3">
        <div className="mb-2">
          <label htmlFor="add_message" className="col-form-label">
            Message
          </label>
          <input type="text" className="form-control" id="add_message" onChange={onMsgChange} />
        </div>
        <div className="mb-2">
          <label htmlFor="add_email" className="col-form-label">
            Email
          </label>
          <input type="text" className="form-control" id="add_email" onChange={onEmailChange} />
        </div>
        <div className="mb-2">
          <label htmlFor="add_image" className="col-form-label">
            Image(URL)
          </label>
          <input type="text" className="form-control" id="add_image" onChange={onImgChange} />
        </div>
        <div className="mb-2 text-center">
          <button className="btn btn-primary" onClick={onClick}>
            投稿
          </button>
        </div>
      </div>
    </div>
  );
}

function UpdateBoard(setContent3, seldata, setSeldata, umsg, uimg, setUmsg, setUimg, selbrd, setSelbrd) {
  const onUMsgChange = (event) => {
    const v = event.target.value;
    setUmsg(v);
  };
  const onUImgChange = (event) => {
    const v = event.target.value;
    setUimg(v);
  };
  const onSelChange = (event) => {
    const v = event.target.value;
    DataStore.query(Board, (ob) => ob.id.eq(v)).then((value) => {
      if (value.length != 1) {
        alert("見つかりませんでした。");
        return;
      }
      setSelbrd(value[0]);
      setUmsg(value[0].message);
      setUimg(value[0].image);
    });
  };

  const onUClick = () => {
    DataStore.save(
      Board.copyOf(selbrd, (updated) => {
        updated.message = umsg;
        updated.image = uimg == "" ? null : uimg;
      })
    ).then(() => {
      alert("メッセージを更新しました。");
    });
  };
  const data = [
    <option key="nodata" value="-">
      -
    </option>,
  ];
  DataStore.query(Board, Predicates.ALL, {
    sort: (ob) => ob.createdAt(SortDirection.DESCENDING),
    limit: 5,
  }).then((values) => {
    for (let item of values) {
      data.push(
        <option key={item.id} value={item.id}>
          {item.message}
        </option>
      );
    }
    setSeldata(data);
  });

  setContent3(
    <div>
      <h3>Update new Board</h3>
      <select className="form-select" onChange={onSelChange}>
        {seldata}
      </select>
      <div className="alert alert-primary my-3">
        <div className="mb-2">
          <label htmlFor="edit_message" className="col-form-label">
            Message
          </label>
          <input type="text" className="form-control" value={umsg} id="edit_message" onChange={onUMsgChange} />
        </div>
        <div className="mb-2">
          <label htmlFor="edit_image" className="col-form-label">
            Image(URL)
          </label>
          <input type="text" className="form-control" value={uimg} id="edit_image" onChange={onUImgChange} />
        </div>
        <div className="mb-2 text-center">
          <button className="btn btn-primary" onClick={onUClick}>
            更新
          </button>
        </div>
      </div>
    </div>
  );
}

function DeleteBoard(setContent4, deldata, setDeldata, delbrd, setDelbrd) {
  const onDelChange = (event) => {
    const v = event.target.value;
    DataStore.query(Board, (ob) => ob.id.eq(v)).then((value) => {
      if (value.length != 1) {
        alert("見つかりませんでした。");
        return;
      }
      setDelbrd(value[0]);
    });
  };
  const onDClick = () => {
    DataStore.delete(delbrd).then(() => {
      alert("データを削除しました。");
    });
  };

  const data = [
    <option key="nodata" value="-">
      -
    </option>,
  ];
  DataStore.query(Board, Predicates.ALL, {
    sort: (ob) => ob.createdAt(SortDirection.DESCENDING),
    limit: 10,
  }).then((values) => {
    for (let item of values) {
      data.push(
        <option key={item.id} value={item.id}>
          {item.message}
        </option>
      );
    }
    setDeldata(data);
  });
  setContent4(
    <div>
      <h3>Delete Board</h3>
      <select className="form-select" onChange={onDelChange}>
        {deldata}
      </select>
      <div className="my-2 text-center">
        <button className="btn btn-primary" onClick={onDClick}>
          削除
        </button>
      </div>
    </div>
  );
}

function Now() {
  return <p className="bg-secondary text-dark bg-opaciry-25 p-3 my-3">現在は、{new Date().getHours()}時です。</p>;
}

// サインインしていたらAppをexport, 未サインインならサインインに必要なフォームをexport
export default withAuthenticator(App);
