import React from 'react';
import questions from './questions'
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { Route, Switch } from 'react-router-dom';
import QuestionsPage from './Pages/QuestionsPage';
import Home from './Pages/Home';
import Final from './Pages/Final';
import { BatteryContext } from './contexts'

function App() {
  const [questionSet, setAnswers] = React.useState(questions)	
  return (
  <div className="App">
    <BatteryContext.Provider value={{questionSet, setAnswers}} >
    <Switch>
      <Route path={`/`} exact>
        <Home />
      </Route>
      <Route path={`/question/:id`} exact>
        <QuestionsPage />
      </Route>
      <Route path={`/results`} exact>
        <Final />
      </Route>
    </Switch>
    </BatteryContext.Provider>
  </div>
  );
}

export default App;
