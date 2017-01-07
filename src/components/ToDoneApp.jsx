import React from 'react'

import ToDoneList from './ToDoneList'

export default class ToDoneApp extends React.Component {
  render () {
    return (
      <div>
        <section className='todoapp'>
          <ToDoneList todone={this.props.todone} />
        </section>
      </div>
    )
  }
}
