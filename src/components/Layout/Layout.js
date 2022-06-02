import React from 'react'
import Aux from '../../hoc/Aux'
import classes from './Layout.scss'

function Layout(props) {
  return (
    <Aux>
        <div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </div>
    </Aux>
  )
}

export default Layout