import React from 'react';
import PriceButton from './pricebutton'
import shopducks from './shopducks.png'

function Container(props) {
	return (
		<div 
			style={{
  				position: 'absolute',
  				marginLeft: '1000px',
  				marginTop: '60px',
  				height: '320px',
  				width: '386px',
  				overflowY: 'scroll',
  				backgroundImage: `url('${shopducks}')`,
  				zIndex: `${props.shopIndex}`,
			}}
		>
		{ props.shopList.map(item => {
			return (
				<PriceButton item={item} key={item.id} buy={props.buy} />
			) 	
		})}
		</div>
	) 
}

export default Container