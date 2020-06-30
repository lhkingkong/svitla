import React, { Component } from 'react';
import api from '../../services/api';

class MyInfiniteList extends Component {
    pageSize = 10;
    page = 0;
    isLoading = false;

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        };
        this.fetchInformation = this.fetchInformation.bind(this);
    }

    fetchInformation() {
        if (!this.isLoading) {
            this.isLoading = true;
            api(this.page, this.pageSize).then((response) => {
                this.page++;
                let newList = [...this.state.list, ...response];
                console.log('newList', newList);
                this.setState({
                    list: newList
                }
                )
                this.isLoading = false;
            })
        }

    }

    isInViewport(offset = 0) {
        if (!this.yourElement) return false;
        const top = this.yourElement.getBoundingClientRect().top;
        return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
    }

    checkIfIsVisibleLoading() {
        if (this.isInViewport) {
            this.fetchInformation();
        }
    }

    render() {
        return (
            <div className="myInfiniteList">
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={item.id + '' + index}>
                                <img src={item.thumbnailUrl} />
                                {item.title}
                            </li>
                        })
                    }
                </ul>
                <div className="loading" onClick={this.fetchInformation} ref={(el) => this.yourElement = el}>Loading...</div>
            </div>
        )
    }
}

export default MyInfiniteList;