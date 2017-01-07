import React from 'react'
import ReactDOM from 'react-dom'
import {List, Map} from 'immutable'

import ToDoneApp from './components/ToDoneApp'

const todone = List.of(
  Map({id: 1, text: 'React', status: 'active', editing: false})
  Map({id: 2, text: 'Redux', status: 'active', editing: false})
  Map({id: 3, text: 'Enzyme', status: 'completed', editing: false})
)

ReactDOM.render(
  <ToDoneApp todos={todos} />, document.getElementById('app')
)
