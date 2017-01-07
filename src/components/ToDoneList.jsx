import React from 'react'

import ToDoneItem from './ToDoneItem'

export default class ToDoneList extends React.Component {
  render () {
    return (
      <section className='main'>
        <ul className='todo-list'>
          {this.props.todone.map(todo => {
            return (
              <ToDoneItem key={todo.get('id')}
                text={todo.get('text')} />
            )
          })}
        </ul>
      </section>
    )
  }
}
