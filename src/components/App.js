import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";

const Menu = () => {
    return (
        <div className="row">
            <div className="col-sm-6">
                <a href="/">
                    page one
                </a>
            </div>
            <div className="col-sm-6">
                <a href="/pagetwo">
                    page two
                </a>
            </div>
        </div>
    );
};

const PageOne = () => {
    return (
        <div>
            <Menu/>
            <div>
                Page One
            </div>
        </div>
    );
};


const PageTwo = () => {
    return (
        <div>
            <Menu/>
            <div>
                Page Two
                <button>
                    Click
                </button>
            </div>
        </div>
    );
};


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne}>
                    </Route>
                    <Route path="/pagetwo" component={PageTwo}>
                    </Route>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;