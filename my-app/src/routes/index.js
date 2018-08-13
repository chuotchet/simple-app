import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import CoinChart from './CoinChart';
import CoinTable from './CoinTable';

export default () => (
    <Router>
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/chart" exact component={CoinChart} />
            <Route path="/table" exact component={CoinTable} />
        </div>
    </Router>
);
