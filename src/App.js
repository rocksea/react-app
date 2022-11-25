import './App.css';
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {BrowserRouter as Router,  Routes, Route, Link } from "react-router-dom"
import axios from "axios";

import Home from "./Home";
import About from "./About";
import Join from "./Join";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
        <Header />
        <QueryClientProvider client={queryClient}>
          <Body />
        </QueryClientProvider>
        <Footer />
    </div>
  );
}


function Header() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/join">Join</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </Router>
  );
}


function Body() {
  const { isLoading, error, data, isFetching } = useQuery(["repoData"], () =>
    axios
      .get("https://api.github.com/repos/tannerlinsley/react-query")
      .then((res) => res.data)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? "Updating..." : ""}</div>
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}

function Footer() {
    return (
        <footer>
            Hello Hello Mr.Monkey!!
        </footer>
    );
}


export default App;
