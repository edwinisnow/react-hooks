import React, { useContext } from 'react'
import { UserContext } from '../App'
function ComponentA() {
    const user = useContext(UserContext)

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
