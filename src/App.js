import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Dashboard from './components/Dashboard/Dashboard'
import BlogDetails from './components/Blog/BlogDetails'
import {Provider} from 'react-redux'
import configureStore from './store/store'

library.add(faTrash)

const store = configureStore()

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <Switch>
                    <Route exact path='/' component={Dashboard}/>
                    <Route path='/blog/:id' component={BlogDetails}/>
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
