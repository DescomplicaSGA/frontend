import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Student from './pages/Student';
import Teacher from './pages/Teacher';
import Classes from './pages/Classes';
import SignUpStudent from './pages/SignUpStudent';
import SignUpTeacher from './pages/Teacher/SignUpTeacher';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Classes} />
        <Route path="/professores" component={Teacher}/>
        <Route path="/alunos" component={Student} />
        <Route path="/cadastrar-estudante" component={SignUpStudent} />
        <Route path="/cadastrar-professor" component={SignUpTeacher} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;