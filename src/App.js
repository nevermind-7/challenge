import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


import Layout from './Hoc/Layout/Layout';
import AccountContainer from './Containers/AccountContainer/AccountContainer';
import Details from './Components/Details/Details';


import './Assets/Bootstrap/css/bootstrap.min.css';
import './Sass/app.css';
import axios from 'axios';


class App extends Component {
  state = {
    accountsList: [],
    accountsTypeList: []
  };

  ProcessResponse(data) {

    let accountsTypeList = data.tipos
    let accountsList = []

    accountsTypeList.forEach(item => {
      accountsList = accountsList.concat(data.cuentas.filter(s => s.type === item.id))
    });

    this.setState({ accountsList: accountsList, accountsTypeList: accountsTypeList })
  }

  sendGetRequest = async () => {
    try {

      const response = await axios.get('https://api.npoint.io/e9cb7acc6095dff4004a');

      this.ProcessResponse(response.data)

    } catch (err) {

      console.error(err);
    }
  }

  componentDidMount() {

    this.sendGetRequest()

  }

  render() {

    const collections = this.state

    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/details/:accountNumber" exact render={
              (props) => (<Layout><Details {...collections} {...props} /> </Layout>)}
            />
            <Route path="/" exact render={
              () => (<Layout><AccountContainer {...collections} /> </Layout>)}
            />
            <Redirect from="*" to="/" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;