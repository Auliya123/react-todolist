import React from "react";
import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Halo"
    },
    {
      text: "Jangan Ngantuk"
    },
    {
      text: "Banguun"
    },
    {
      text: "belajar react"
    },
    {
      text: "ayoo belajar"
    },
    {
      text: "Halo"
    },
    {
      text: "Jangan Ngantuk"
    },
    {
      text: "Banguun"
    },
    {
      text: "belajar react"
    },
    {
      text: "ayoo belajar"
    }
  ];
  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
