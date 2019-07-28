import React from 'react'
import { SPRITE_SIZE } from '../constants'

class Ani extends React.Component {
	constructor(props) {
		super(props) 
		this.state = { ...props.item, tick: 0, spriteIndex: 0, }
		this.getAni = this.getAni.bind(this)
		this.move = this.move.bind(this)
		this.getSpriteIndex = this.getSpriteIndex.bind(this)
		this.getxLocation = this.getxLocation.bind(this)
		this.componentDidMount = this.componentDidMount.bind(this)
	}


	componentDidMount() {
		this.getAni()
	}

	getAni() {
		const update = this.state.tick + 1
		this.setState({tick: update })
		if (this.state.tick < 25) {
      		window.requestAnimationFrame(this.getAni)
      		return
    	}
    	
    	this.setState({tick: 0})
    	this.move()
    	window.requestAnimationFrame(this.getAni)

	}

	getSpriteIndex() {
    	const spriteIndex = this.state.spriteIndex
    	return spriteIndex >= 1 ? 0 : spriteIndex + 1 
	}

	getxLocation(spriteIndex) {
    	const xLocate = this.state.xLocation
    	let x
    	if (spriteIndex === 0) {
      		x = xLocate + SPRITE_SIZE[0]
    	} else {
      		x = xLocate - SPRITE_SIZE[0]
    	}

    	return x
  	}

	move() {
		const spriteIndex = this.getSpriteIndex()
		const x = this.getxLocation(spriteIndex)

		this.setState({
			spriteIndex: spriteIndex,
			xLocation: x,

		})
  	}

  	render() {
  		return (
  			<div
      			style = {{
			        position: 'absolute',
			        top: this.state.top,
			        left: this.state.left,
			        backgroundImage: `url('${this.state.pic}')`,
			        backgroundPosition: `${this.state.xLocation}px ${this.state.yLocation}px`,
			        width: '128px',
			        height: '256px',
      			}}
      />)
  	}

}

export default Ani
