import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";

export const store = createStore(reducer);
//npm install redux react-redux
//작업하는 위치에서 다운로드
//PS D:\suu\react_workspace\myapp01_basic> npm install redux react-redux
