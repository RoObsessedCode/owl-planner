import React from 'react'

const BulletinBoard = (props) => {
  return (
    <div>
      <textarea name="bulletin_board" cols="30" rows="10" disabled>
        {props.mainFocusResult}
      </textarea>
    </div>
  )
}


export default BulletinBoard


 {/* <div className="MainFocus-DisplayDiv">
            <textarea className="MainFocus-Display textarea" disabled>
              {this.state.mainFocusResult}
            </textarea>
          </div> */}
