import React, { Component } from 'react';
import './App.css';

class App extends Component {
  showInfoProduct(product){
    if(product.status){
      return <h3>
        ID : {product.id}<br/>
        Name: {product.name}<br/>
        Price: {product.price}<br/>
        status: {product.status ? 'Active':'Pending'}
    </h3>
    }
  }
  render() {
    var a = 5;
    var name = "nhantt";
    var b = 7;
    var product = {
      id: 1,
      name: 'Iphone 7 Plus',
      price: '14.000.000 VND',
      status: true
    };
    var users = [
      {
        id: 1,
        name: 'Ti',
        age: 18
      },
      {
        id: 2,
        name: 'Teo',
        age: 15
      },
      {
        id: 3,
        name: 'Tun',
        age: 12
      }
    ];
    var elements = users.map((user, index)=>{
      return <div key={user.id}>
              <h2>Tên: {user.name}</h2>
              <p>Tuổi: {user.age}</p>
            </div>
    });
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand">Title</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a>Home</a>
            </li>
            <li>
              <a>Link</a>
            </li>
          </ul>
        </nav>
        <div className="ml-30">
          <h2>
            a:{a} <br/>
            b:{b} <br/>
            a+b = {a+b}
          </h2>
            {this.showInfoProduct(product)}
            <br/>
            <hr/>
            { elements }
          <h3>name:{name}</h3>
        </div>
      </div>
      
    );
  }
}

export default App;
