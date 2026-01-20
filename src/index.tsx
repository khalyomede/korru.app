/* @refresh reload */
import { render } from 'solid-js/web';
import { Route, Router } from "@solidjs/router";
import 'solid-devtools';
import "./index.css";

import Home from './pages/Home';
import Search from './pages/Search';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
    );
}

render(
    () => (
        <Router>
            <Route path="/search" component={Search} />
            <Route path="*" component={Home} />
        </Router>
    ),
    root!
);
