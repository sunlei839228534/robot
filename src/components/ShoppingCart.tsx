import React from 'react'
import styles from './ShoppingCart.module.css'

interface Props {

}

interface State {
  isOpen: boolean
}

class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }
  render() {
    return (
      <div className={styles.cartContainer}>
        <button
          onClick={() => {
            this.setState({ isOpen: !this.state.isOpen })
          }}
          className={styles.button}>购物车 2(件)</button>
        <div
          style={{
            display: this.state.isOpen ? 'block' : 'none'
          }}
          className={styles.cartDropDown}>
          <ul>
            <li>robot 1</li>
            <li>robot 1</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ShoppingCart