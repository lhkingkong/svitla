import React, {Component} from 'react';

class MyList extends Component{
    constructor(props){

        super(props);
        this.state = {
            inputValue: '',
            list: []
        };
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onType = this.onType.bind(this);
    }

    addItem(){
        if(this.state.inputValue){
            let newList = [...this.state.list];
            newList.push(this.state.inputValue);
            this.setState({
                inputValue: '',
                list: newList
            })
        }
    }

    removeItem(index){
        let newList = [...this.state.list];
        newList.splice(index, 1);
        this.setState({
            list: newList
        })
    }

    onInputChange(e){
        this.setState({
            inputValue: e.target.value
        });
    }

    onType(e){
        console.log(e);
        if(e.charCode===13){
            this.addItem();
        }
    }

    render(){
        return (
            <div>
                <input type="text" value={this.state.inputValue} onChange={this.onInputChange} onKeyPress={this.onType}/>
                <button onClick={this.addItem}>Add</button>
                <ul>
                    {
                        this.state.list.map((item, index)=>{
                            return <li key={"listItem"+index}>{item}<button  onClick={()=>{this.removeItem(index)}}>X</button></li>
                        })
                    }
                    
                </ul>
            </div>
        )
    }
}

export default MyList;