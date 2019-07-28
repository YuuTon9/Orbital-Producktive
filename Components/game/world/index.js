import React from 'react'
import { Redirect } from 'react-router-dom'
import { auth } from 'firebase';
import { connect } from 'react-redux'
import Map from '../map'
import Shop from '../shop'
import BuyList from '../ani/buyList'


class World extends React.Component {
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div
        style={{
          position: 'relative',
          width: '1408px',
          height: '832px',
          margin: '20px auto',
        }}
      >
        <Shop />
        <Map />

      </div>
    )
  }
}

const mapStatetoProps = (state) => {
    return {
        auth: state.firebase.auth
    }
  }

export default connect(mapStatetoProps)(World)
