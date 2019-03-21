import React from 'react';


class SearchBar extends React.Component{

    state = {term:''};

    onInputChange = event =>{
        this.setState({term: event.target.value});
    }

    onFormSubmit = (e) =>{ 
        e.preventDefault();
        this.props.submit(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <input type="text" onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;