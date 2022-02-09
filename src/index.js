import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
// import {
//   HashRouter as Router,
//   Route,
//   Redirect,
//   Switch,
// } from "react-router-dom";
// import { mainRoute } from "./routes";

// ReactDOM.render(
//   <Router>
//     <Switch>
//       {/* admin主页面的路由 进入到App组件 */}
//       <Route path="/admin" component={App} /> 
//       {/* 遍历login 404 的路由 */}
//       {mainRoute.map((route) => {
//         return <Route path={route.pathname} component={route.component} />;
//       })}{" "}
//       {/* 重定向 首页为admin */}
//       <Redirect to="/admin" from="/" exact /> 
//       {/* 如果路径与之前都不匹配,则返回404页面 */}
//       <Redirect to="/404" /> 
//     </Switch>
//   </Router>,
//   document.getElementById("root")
// );

// function Square(props){
//     return(
//       <button className="square" onClick={props.onClick}>
//         {props.value}
//       </button>
//     )
//   }
  
//   function calculateWinner(squares) {
//     const lines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];
//     for (let i = 0; i < lines.length; i++) {
//       const [a, b, c] = lines[i];
//       if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//         return squares[a];
//       }
//     }
//     return null;
//   }
//   class Board extends React.Component {
//     constructor(props){
//       super(props);
//       this.state = {
//         squares : Array(9).fill(null),
//         xIsNext: true,
//       }
//     }
//     handleClick(i){
//       const squares = this.state.squares.slice();
//       if (calculateWinner(squares) || squares[i]) {
//         return;
//       }
//       squares[i] = this.state.xIsNext ? 'X' : 'O';
//       this.setState({squares:squares,xIsNext:!this.state.xIsNext});
//     }
//     renderSquare(i) {
//       return  ( <Square 
//                 value={this.state.squares[i]} 
//                 onClick={()=>{ this.handleClick(i) } }
//               />
//       );
//     }
    
    
//     render() {
//       // const status ='Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//       const winner = calculateWinner(this.state.squares);
//       let status;
//       if (winner) {
//         status = 'Winner: ' + winner;
//       } else {
//         status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//       }
  
//       return (
//         <div>
//           <div className="status">{status}</div>
//           <div className="board-row">
//             {this.renderSquare(0)}
//             {this.renderSquare(1)}
//             {this.renderSquare(2)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(3)}
//             {this.renderSquare(4)}
//             {this.renderSquare(5)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(6)}
//             {this.renderSquare(7)}
//             {this.renderSquare(8)}
//           </div>
//         </div>
//       );
//     }
//   }
  
//   class Game extends React.Component {
//     render() {
//       return (
//         <div className="game">
//           <div className="game-board">
//             <Board />
//           </div>
//           <div className="game-info">
//             <div>{/* status */}</div>
//             <ol>{/* TODO */}</ol>
//           </div>
//           <Test/>
//         </div>
//       );
//     }
//   }
  
class Test extends React.Component{
  render(){
    /* jsx语法规则
    1.标签中引入js表达式时 用{} 
    2.类名className
    3.内联样式，style={{ key: value}} 的形式
    4.标签首字母大写，渲染对应的组件
    */
    const id = 'game';
    const type = "Test组件"
    const data = [{name:'angular',key:0},{name:'vue',key:1},{name:'ract',key:2}]
    return(
      <div className={id}> 
        <span style={{color:'skyblue',fontSize:'30px'}}>{type}</span>
        <p>{this.props.name}</p>
        <p>{this.props.title}</p>
        <ul>
          { 
            data.map( item =>{
              return <li key={ item.key }> { item.name } </li>
            })
          }
        </ul>
      </div>
    );
  }
}

function Dmeo(props){
  let type = "这是个函数声明组件"
  return (
    <div>
        <h3>----------Demo组件内容--------------</h3>
        <h2>{props.name}</h2>
        <h3>{type}</h3>
        
        <h3>----------Demo组件中的Test组件--------------</h3>
        <Test name='test传值name' title='test组件的title'/>
    </div>
  )
}
const Diy = <Dmeo name='Diy组件'/>
  // ========================================
  // 渲染节点
  ReactDOM.render(
    Diy,
    document.getElementById('root')
  );


