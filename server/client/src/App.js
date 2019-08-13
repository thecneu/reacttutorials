import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from 'components/Header'

function App() {
  return (
    <main className="container">
      <Header />

      <Router>
        <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/surveys" exact render={() => <h1>Surveys</h1>} />
        <Route path="/surveys/new" render={() => <h2>New Survey</h2>} />
      </Router>
    </main>
  );
}

export default App;
