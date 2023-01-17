import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
    getStudentData = () => {
        axios.get('/ProductService/info').then(
            response => console.log('成功了', response.data),
            error => console.log('失败了', error)
        )
    }

    getCarttData = () => {
        axios.get('/OrderService/info').then(
            response => console.log('成功了', response.data),
            error => console.log('失败了', error)
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>点我获取产品数据</button>
                <button onClick={this.getCarttData}>点我获取订单数据</button>
            </div>
        )
    }
}