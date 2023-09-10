import React from "react";
import { useQuery } from "react-query";
import { getPost } from "./ApiMock";

export const App = () => {
  const result = useQuery('getPost', getPost);
  console.log("result", result);
  return <div>Learn React</div>;
}

export default App;
