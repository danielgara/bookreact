import React, { FC, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

interface ScreenCProps {
  message: string;
  history: any;
  match: any;
}

const ScreenC: FC<ScreenCProps> = (props) => {
  const history = useHistory();
  const { userid } = useParams<{ userid: string }>();

  const onClickGoback = () => {
    history.goBack();
  };

  return (
    <div>
      <div>{"Your id is " + userid}</div>
      <div>{props.message}</div>
      <div>
        <button onClick={onClickGoback}>Go back</button>
      </div>
    </div>
  );
};
export default ScreenC;
