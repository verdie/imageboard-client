import React from 'react'

export default class CreateForm extends React.Component{
    render(){
        return <div className="add-image">
        <form onSubmit={this.props.onSubmit}>
        <label>
            Title: 
            <input type="text" value={this.props.title} name='title'placeholder='Your image title' onChange={this.props.onChange}/>
        </label>
        <label>
            Url: 
            <input type="text" value={this.props.url} name='url' placeholder='Your image URL' onChange={this.props.onChange}/>
        </label>
            <button type="submit">add image</button>
        </form>
        </div>
    }
}