import React from "react";
import ReactDOM from "react-dom";
import App from "App";

declare global {
interface Window {
Example: string;
}
}
const SomeComponent = () = > {
  return <div>앰비언트 타입 선언은 .tsx 파일에서도 가능</div>;
};