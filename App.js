import React, { Component } from 'react';
import Amplify, { Interactions } from 'aws-amplify';
import { ChatBot, AmplifyTheme } from 'aws-amplify-react';
import awsconfig from './aws-exports';

Amplify.configure({
  Auth: {
    identityPoolId: 'us-east-1:a16a6ba9-3ae8-4fe0-904e-a75968cd060f',
    region: 'us-east-1'
  },
  Interactions: {
    bots: {
      "KnowMe": {
        "name": "KnowMe",
        "alias": "$LATEST",
        "region": "us-east-1",
      },
    }
  }
});

// Imported default theme can be customized by overloading attributes
const myTheme = {
  ...AmplifyTheme,
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: '#ff6600'
  }
};

class App extends Component {

  handleComplete(err, confirmation) {
    if (err) {
      alert('Bot conversation failed')
      return;
    }

    alert('Success: ' + JSON.stringify(confirmation, null, 2));
    return 'Thank You! Have a nice day ahead.';
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to ChatBot Demo</h1>
        </header>
        <ChatBot
          title="Mickey"
          theme={myTheme}
          botName="KnowMe"
          welcomeMessage="Welcome, how can I help you today?"
          onComplete={this.handleComplete.bind(this)}
          clearOnComplete={true}
          conversationModeOn={false}
        />
      </div>
    );
  }
}

export default App;