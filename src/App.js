import React, { Component } from 'react';
import { getERCContractInstance } from './utils';
import web3 from './web3/web3';

class App extends Component {
  state = {
    erc20Address: '',
    spenderAddress: '',
    amount: 0,
    account: '',

    // allowance
    erc20AddressA: '',
    spenderAddressA: '',
    allowance: 0,
  }

  async componentDidMount() {
    const [account] = await web3.eth.getAccounts();
    if (!account) {
      await window.ethereum.enable();
    }
    this.setState({ account });
  }
  
  onApproveClick = async () => {
    const ercContract = await getERCContractInstance(web3, this.state.erc20Address);
    await ercContract.methods.approve(this.state.spenderAddress, this.state.amount).send({ from: this.state.account });
    alert('Approved Successfully!');
  }

  onCheckAllowanceClick = async () => {
    const ercContract = await getERCContractInstance(web3, this.state.erc20AddressA);
    const allowance = await ercContract.methods.allowance(this.state.account, this.state.spenderAddressA).call();
    this.setState({ allowance });
  }

  hanldeState = (state) => {
    this.setState(state);
  }

  render() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <h2>Approve</h2>
        <div>ERC20 address</div>
        <input type="text" onChange={event => this.hanldeState({ erc20Address: event.target.value })} />
        <div>Spender address</div>
        <input type="text" onChange={event => this.hanldeState({ spenderAddress: event.target.value })} />
        <div>Amount</div>
        <input type="text" onChange={event => this.hanldeState({ amount: event.target.value })} />
        <div>
          <button onClick={() => this.onApproveClick()}>Approve</button>
        </div>

        <h2>Allowance</h2>
        <div>ERC20 address</div>
        <input type="text" value={this.state.erc20AddressA} onChange={event => this.hanldeState({ erc20AddressA: event.target.value })} />
        <div>Spender address</div>
        <input type="text" onChange={event => this.hanldeState({ spenderAddressA: event.target.value })} />
        <div>
          <button onClick={() => this.onCheckAllowanceClick()}>Check Allowance</button>
        </div>
        <div>{`Allowance ${this.state.account} to ${this.state.spenderAddressA} is: ${this.state.allowance}`}</div>
      </div>
    )
  }
}

export default App;
