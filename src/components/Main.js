import React, { Component } from 'react'
import BuyForm from './BuyForm'
import SellForm from './SellForm'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentForm: 'buy'
    }
  }

  render() {
    let content
    if(this.state.currentForm === 'buy') {
      content = <BuyForm
        ethBalance={this.props.ethBalance}
        tokenBalance={this.props.tokenBalance}
        buyTokens={this.props.buyTokens}
      />
    } else {
      content = <SellForm
        ethBalance={this.props.ethBalance}
        tokenBalance={this.props.tokenBalance}
        sellTokens={this.props.sellTokens}
      />
    }

    return (
      <div id="content" className="mt-3">
         {/* <!--Buy Modal --> */}
        <div className="modal fade" id="buyModal" role="dialog">
          <div className="modal-dialog">
          
            {/* <!-- Modal content--> */}
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Buy AzkalCoin</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">
                <BuyForm
                  ethBalance={this.props.ethBalance}
                  tokenBalance={this.props.tokenBalance}
                  buyTokens={this.props.buyTokens}
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
            
          </div>
        </div>

         {/* <!-- Sell Modal --> */}
         <div className="modal fade" id="sellModal" role="dialog">
          <div className="modal-dialog">
          
            {/* <!-- Modal content--> */}
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Sell AzkalCoin</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">
                <SellForm
                  ethBalance={this.props.ethBalance}
                  tokenBalance={this.props.tokenBalance}
                  sellTokens={this.props.sellTokens}
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
            
          </div>
        </div>

        <div className="d-flex justify-content-between mb-3">
          <button
              className="btn btn-light"
              // onClick={(event) => {
                // this.setState({ currentForm: 'buy' })
              // }}
              data-toggle="modal" data-target="#buyModal"
            >
            Buy
          </button>

          <span className="text-muted">&lt; &nbsp; &gt;</span>
          <button
              className="btn btn-light"
              onClick={(event) => {
                this.setState({ currentForm: 'sell' })
              }}
              data-toggle="modal" data-target="#sellModal"
            >
            Sell
          </button>
        </div>

        <div className="card mb-4" >

          <div className="card-body">

            {content}

          </div>

        </div>

      </div>
    );
  }
}

export default Main;
