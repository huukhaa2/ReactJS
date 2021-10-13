import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItem.css';
import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/check-complete.svg';

// map(): de chuyen 1 array thanh 1 component thi co 2 tham so (va bat buoc phai co thang index => key(index))
class TodoItem extends Component
{
    render()
    {
        const {item, onClick} = this.props;
        let url = checkImg;
        if(item.isComplete)
            url = checkCompleteImg;
        return(
            <div className={classNames('TodoItem', {
                'TodoItem-complete': item.isComplete
            })}>
                <img onClick={onClick} src={url} width={32} height={32} />
                <p>{this.props.item.title}</p>
            </div>
        )
    }
}


export default TodoItem