import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";

export default function Home(props: any) {
  const getAllTodos = gql`
    query getAllTodos {
      getTodos {
        id
      }
    }
  `;
  const { loading, error, data } = useQuery(getAllTodos);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.log(error);
    return <div>Something Bad Happened</div>;
  }

  return (
    <ul>
      {data.getTodos.map(({ id }:any) => (
        <li key={id}>{id}</li>
      ))}
    </ul>
  );
}
