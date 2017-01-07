import React from 'react'

export default class ToDoneApp extends React.Component {
  getItems () {
    return this.props.todos || []
  }
  render () {
    return (
      <div>
        <section className='todoapp'>
          <section className='main'>
            <ul className='todo-list'>
              {this.getItems().map(todo => {
                return (
                  <li className='active' key={todo.get('id')}>
                    <div className='view'>
                      <input type='checkbox' className='toggle' />
                      <label htmlFor='todo'>
                        {todo.get('text')}
                      </label>
                    </div>
                  </li>
                )
              })}
            </ul>
          </section>
        </section>
      </div>
    )
  }
}
