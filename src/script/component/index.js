/*const Index = 'yuzijia'

export default Index
//export {Index}
//export {Index as default}
*/


import React from 'react'

import {Link} from 'react-router'


class Index extends React.Component {
	constructor (props) {
		super(props)
		
	}
	render() {
		return (
			<div className="m-index">
				<header>
					<div className="yo-header">
						<div className="title">
							<span className="yo-ico search-icon">&#xe896;</span>
							<span className="search-txt">搜索商品名称或商品编号</span>
						</div>
						<span className="regret">星空购物</span>
						<span className="affirm">登录</span>
					</div>
				</header>
				<section>
					{this.props.children}
				</section>
				<footer>
					<ul>
						<Link to="/home">
							<li className="active">
								<i className="yo-ico">&#xe83d;</i>
								<b>首页</b>
							</li>
						</Link>
						<Link to="/kind">
							<li>
								<i className="yo-ico">&#xe601;</i>
								<b>分类</b>
							</li>
						</Link>
						<Link to="/cart">
							<li>
								<i className="yo-ico">&#xe616;</i>
								<b>购物车</b>
							</li>
						</Link>
						<Link to="/user">
							<li>
								<i className="yo-ico">&#xe6b7;</i>
								<b>我的</b>
							</li>
						</Link>
					</ul>
				</footer>
			</div>
		)
	}
	
	componentDidMount(){
		
	}
}

export default Index