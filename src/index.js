import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Movieavailable from './movie_available.js';
import Booktickets from './booktickrt.js';
import Error from './Error.js';
const routing = ( 
      <div>
      <Router>      
      <Routes>        
      <Route path="/" element={<Movieavailable />} />
      
      <Route path="/movie" element={<Movieavailable />}  />
      <Route path="/ticketbook" element={<Booktickets/>} />
      <Route path="/*" element={<Error/>} />
      </Routes>
      </Router>
    </div>  
);

ReactDOM.render(routing, document.getElementById('root'));
