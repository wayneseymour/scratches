import fetch from "node-fetch";

const controller = new AbortController();
const { signal } = controller;

const fetchTodo = async (url) => {
  try {
    const response = await fetch(url, { signal });
    const todo = await response.json();
    console.log(todo);
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Operation timed out");
    } else {
      console.error(error);
    }
  }
};

fetchTodo("https://jsonplaceholder.typicode.com/todos/1");

controller.abort();
