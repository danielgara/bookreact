import React, { FC, useEffect } from "react";
interface ScreenCProps {
  message: string;
  history: any;
  match: any;
}
const ScreenC: FC<ScreenCProps> = (props) => {
  /*useEffect(() => {
    setTimeout(() => {
      props.history.push("/");
    }, 3000);
  });*/

  const onClickGoback = () => {
    props.history.goBack();
  };

  return (
    <div>
      <div>{"Your id is " + props.match.params.userid}</div>
      <div>{props.message}</div>
      <div>
        <button onClick={onClickGoback}>Go back</button>
      </div>
    </div>
  );
};
export default ScreenC;
