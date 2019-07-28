import React from 'react'
import Ani from './ani.js'
import { connect } from 'react-redux'

function BuyList(props) {
	return (
		<div style={{
			position: 'absolute'
		}}>
			{ props.bought.map(item =>{
				return (
					<Ani item={item} key={item.id} />
				)
			}) }
			
		</div>
	)
}


export default BuyList