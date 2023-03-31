import React from 'react'

class SearchBar extends React.Component{
    state = {
        term: ''
    }

    onFormSubmit(e){
        e.preventDefault()
        this.props.onTermSubmit(this.state.term)
    }

    onInputChange(e){
        this.setState({term: e.target.value})
    }

    render(){
        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit={e => this.onFormSubmit(e)}>
                    <div className='field'>
                        <label htmlFor="">Image Search</label>
                        <input type="text" value={this.state.term} onChange={e => this.onInputChange(e)}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;