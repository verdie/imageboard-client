import React from 'react'
import CreateFormContainer from './CreateFormContainer'
import LoginFormContainer from './LoginFormContainer'

export default class List extends React.Component{
    render(){
        console.log('MY PROPS IS:',this.props.images )
        return <div>
            <LoginFormContainer/>
            <CreateFormContainer/>
                { this.props.images.map(item => {
                    return <div key={item.id}>
                        <h3>{item.title}</h3>
                        <img src ={item.url} alt=''></img>
                    </div>
                }
                )}
            </div>
        }  
}