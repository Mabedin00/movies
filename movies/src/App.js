import React from "react";

// Routing 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
import Actor from "./components/ActorPage";



//Styles
import {GlobalStyle} from "./GlobalStyle";

const App = () => (
    <Router>
        <Header />
        <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='/movie/:movieId' element = {<Movie />} />
            <Route path='/actor/:personId' element = {<Actor />} />
            <Route path='/*' element = {<NotFound />} />

        </Routes>
        <GlobalStyle />
    </Router>
);

export default App;
