import React from 'react';

export default function({ data, render }) {
    return <div>{ data.map(render) }</div>  // data.map(item => render(item)) như dòng dưới
}