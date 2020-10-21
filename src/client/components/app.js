import React from 'react';
import Header from './header';
import Products from './Products';
import NotFound from './NotFound';
import ProductDetail from './ProductDetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home';


const App = () => {

    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/products/">
                        <Products />
                    </Route>
                    <Route exact path="/product/:id" render={(props) => <ProductDetail {...props}/>}/>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;