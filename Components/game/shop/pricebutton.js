import React from 'react';
import '../../../index.css'

function PriceButton(props) {
	return (
		<button className = 'priceButton' disabled={props.item.disabled} key={props.item.id} id = {props.item.id} onClick={props.buy}>
			{props.item.price}
		</button>
	)
} 

export default PriceButton