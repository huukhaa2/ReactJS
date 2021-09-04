import React, {Component} from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = { count: 0 };
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            });
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        // trả về các con trong thẻ Counter. Con đó chính là một hàm
        return <div>{ this.props.children(this.state.count) }</div>
    }
}