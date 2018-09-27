import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/theme/sqlserver';
import 'brace/mode/mysql';

import './App.css';

class App extends Component {

  onChange(newValue) {
    console.log('change', newValue);
  }

  render() {
    return (
      <div>
        <AceEditor
          mode="mysql"
          theme="sqlserver"
          onChange={this.onChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{$blockScrolling: true}}
          width='100vw'
          showPrintMargin={80}
        />
      </div>
    );
  }
}

export default App;
