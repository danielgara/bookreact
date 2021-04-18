import React, {useState, useEffect } from 'react';

interface GreetingProps {
  name? : string
}

//with parameter deconstruction
function Greeting({name}: GreetingProps){
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (name) {
      setMessage(`Hello from, ${name}`);
    }
  }, [name]);

  if (!name) {
    return <div>no name given</div>;
  }

  return <div>
    {message}
  </div>;
}

/* //without parameter deconstruction
function Greeting(props: GreetingProps){
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (props.name) {
      setMessage(`Hello from, ${props.name}`);
    }
  }, [props.name]);

  if (!props.name) {
    return <div>no name given</div>;
  }

  return <div>
    {message}
  </div>;
}*/

export default Greeting;