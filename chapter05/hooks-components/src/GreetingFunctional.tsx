import React from "react";

interface GreetingProps {
  enteredName: string;
  message: string;
  greetingDispatcher: React.Dispatch<{
    type: string,
    payload: string
  }>;
}

export default function Greeting(props: GreetingProps) {
  console.log("rendering Greeting");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    props.greetingDispatcher({
      type: "enteredName",
      payload: name
    });
    props.greetingDispatcher({
      type: "message",
      payload: name
    });
  };

  return (<div>
    <input value={props.enteredName} onChange={onChangeName} />
    <div>{props.message}</div>
  </div>);
}

/*
//old version

import React from "react";

interface GreetingProps {
  message: string
}

export default function Greeting(props: GreetingProps) {
  console.log("rendering Greeting");
  return (<div>
    {props.message}
  </div>);
}
*/