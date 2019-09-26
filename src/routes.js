import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Student from './pages/Student';
import Teacher from './pages/Teacher';
import Classes from './pages/Classes';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Classes} />
        <Route path="/professores" component={Teacher}/>
        <Route path="/alunos" component={Student} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;