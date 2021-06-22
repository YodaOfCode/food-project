import React from "react";

import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Movie from "./pages/Movie";

function App() {
    return (
        <>
            <Router>
                <Header/>
                <main className='container content'>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/contacts' component={Contact}/>
                        <Route path='/about' component={About}/>
                        <Route path='/movies/:title' component={Movie}/>
                        <Route component={NotFound}/>
                    </Switch>

                </main>
                <Footer/>
            </Router>
        </>
    )
        ;
}

export default App;
