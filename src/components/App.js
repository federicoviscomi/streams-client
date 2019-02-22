import React from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";
import Header from "./Header";


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route to="/" exact component={StreamList}/>
                    <Route to="/streams/new" exact component={StreamCreate}/>
                    <Route to="/streams/edit" exact component={StreamEdit}/>
                    <Route to="/streams/delete" exact component={StreamDelete}/>
                    <Route to="/streams/show" exact component={StreamShow}/>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;