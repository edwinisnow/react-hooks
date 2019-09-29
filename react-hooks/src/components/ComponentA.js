import React from 'react'
import { UserContext } from '../App'
function ComponentA() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <div>
                                ComponentA {user}
                            </div>
                        )
                    }
                }
            </UserContext.Consumer>

        </div >
    )
}

export default ComponentA
