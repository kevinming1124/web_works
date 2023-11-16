import React from "react";
import Features from "./components/Features";
import Form from "./components/Form";
import "./App.css";




var features = [
  { id: "feature-basic", title: "簡介"  ,content: "   從台北來的程式小白，雖然現在在資工系已經三年，但大多數的程式技能都是自己學的(誰不是，以前大一大二有參加過流舞社，發現自己真的很不會跳舞，所以大三很安分地在家當阿宅，我自己覺得我算外向的人，希望往後的日子大家可以互助合作，很高興認識大家~~"},
  { id: "feature-hobby", title: "興趣"  ,content1: "打電動( LOL, APEX, MonsterHunter....)"},
  { id: "feature-experience", title: "經歷"  ,content1: "沒有正式的參加過專案開發QQ", content2: "擔任過HITCON的工人"}
];

function App() {
  
  const featureList = features.map((feature) => 
  <Features 
    id={feature.id}
    title={feature.title}
    content={feature.content}
    content1={feature.content1}
    content2={feature.content2}
    key={feature.id}
  />);
 
 
  return (
    <div className="app">
      <h1 className="header">Ming's Profile</h1>
      <Form />
      <ul>{featureList}</ul>
    </div>
  );
}

export default App;
