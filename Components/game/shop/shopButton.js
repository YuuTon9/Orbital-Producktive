import React from 'react';

function ShopButton(props) {
	return (
		<button
			style={{
				backgroundColor: 'powderblue',
				position: 'absolute',
  				marginLeft: '1170px',
  				height: '40px',
  				width: '70px',
  				font: 'helvetica',
  				borderRadius:'5px'
			}}
			onClick={props.toggleShop}
		> SHOP 
		</button>
	)
}

export default ShopButton