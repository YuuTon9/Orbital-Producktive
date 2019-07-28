import React from 'react'
import ShopButton from './shopButton'
import Container from './container'
import BuyList from '../ani/buyList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Shop extends React.Component {
	constructor(props) {
		super(props)
		this.state= {
			render: false,
		}
		this.checkData = this.checkData.bind(this)
	}
	
	componentDidMount() {
		this.checkData()
	}

	checkData() {	
		if (this.props.users == null ) {
			setTimeout(function() {
				this.checkData()
				return
			}.bind(this),200)
		} else { 
			if (this.props.users[0].game.shopList.length === 0) {
				this.setState({
					shopList: this.props.shop.shopList,
					bought: this.props.shop.bought,
					shopIndex: -1,
					render: true,
					coins: this.props.users[0].coins,
				})
			} else {
				this.setState({
					shopList:this.props.users[0].game.shopList,
					bought: this.props.users[0].game.bought,
					shopIndex: -1,
					render: true,
					coins: this.props.users[0].coins,
				})
			}
		}
		
	}

	toggleShop() {
		const ind = this.state.shopIndex === -1 ? 3 : -1
		this.setState({shopIndex: ind})
	}

	buy(e) {
		console.log(this.props)
		const id = e.target.id
		const bought = this.state.bought.slice()
		var all = this.state.shopList.slice()
		var cur_item = all[id]
		var left = this.state.coins - cur_item.price
		
		if (left < 0) {
			alert("need more coins")
			return
		} else {
			cur_item.disabled = true
			bought.push(cur_item)
			var left = this.state.coins - cur_item.price
			this.props.firestore.update(
      			{ collection: 'users', doc: this.props.auth.uid },
      			{	
      				game: {
      					bought: bought,
      					shopList: all,
      				},
      				coins: left,
      			}
      		)
			this.setState({shopList: all,
							bought,
							coins: left,})
		}
		

	}
	
	
	render() {
		let renderContainer = <div style={{position: 'absolute'}}> loading data... </div>
    	if(this.state.render) { 
    			renderContainer = 
    			<div style={{
				position: 'absolute'
				}}>
				
				<BuyList bought={this.state.bought} />
				
				<ShopButton toggleShop={()=>this.toggleShop()} />
			
			
				<Container shopIndex={this.state.shopIndex} shopList={this.state.shopList} buy={(e)=>this.buy(e)} />

				<div style={{
							 color:'#082842',
							 marginLeft:'1250px', 
							 height: '40px',
							 fontSize: '18px',
							 borderRadius:'3px',
							 font: 'helvetica'
							}}> C: {this.state.coins} </div>
				
				
			</div>

    		}
    	return (
      		renderContainer
			
		)
	}
}

const mapStatetoProps = (state) => {
	return {
    	shop: state.shop,
    	auth: state.firebase.auth,
    	users: state.firestore.ordered.users
	}
}
const mapDispatchToProps = {}

export default compose(
  connect(mapStatetoProps,mapDispatchToProps),
  firestoreConnect((props) => {
    if (!props.auth.uid) return []
    return [
      {
        collection: 'users',
        doc: props.auth.uid,
  
      }
    ]
  }
  )
)(Shop)
