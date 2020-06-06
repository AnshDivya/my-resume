import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            subject: '',
            body: '',
            status: ''
        }
    }
    
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = ev => {
        ev.preventDefault();
        this.setState({
            status: 'PROGRESS'
        })
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
        } else {
            this.setState({ status: "ERROR" });
        }
        };
        xhr.send(data);
    }

    handleClick = () => {
        this.setState({
            status: ''
        })
    }

    render() {
        return(
            <form 
                onSubmit = {this.handleSubmit}
                action="https://formspree.io/myynwpvj"
                method="POST"
            > 
            <input type = 'text' placeholder = 'Name' name = 'name' onChange = {this.handleChange} value = {this.state.name}/>
            <input type = 'email' placeholder = 'Email' name = 'email' onChange = {this.handleChange} value = {this.state.email}/>
            <input type = 'text' placeholder = 'Subject'  className = 'subject' name = 'subject' onChange = {this.handleChange} value = {this.state.subject}/>
            <textarea placeholder = 'Message' name = 'body' onChange = {this.handleChange} value = {this.state.body}/>
            {this.state.status === 'PROGRESS'?<div style = {{textAlign: 'center'}}><CircularProgress /></div>
            :this.state.status === 'SUCCESS'?
            <>
                <p style = {{textAlign: 'center',fontSize: '18px', fontWeight: 'bold'}}>Thanks! I will contact you shortly :)</p>
                <button  className= 'square-button' onClick = {this.handleClick}>Send another message</button>
            </>
            :this.state.status === 'ERROR'?
            <>
                <p style = {{textAlign: 'center',fontSize: '18px', fontWeight: 'bold'}}>Ooops! There was some error :(</p>
                <button  className= 'square-button' onClick = {this.handleClick}>Try Again</button>
            </>
            :<button className= 'square-button' type = 'submit'>Submit</button>
            }
        </form>
        )
        
    }
}

export default Form;