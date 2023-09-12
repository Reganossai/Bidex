import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import TransactionTable from '../components/TransactionTable'

const Transactions = () => {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <div className='ovrl'>
          <div className='ovrl-sub'>
          <h1 className="settings-header">Transactions</h1>
          <TransactionTable/>
        </div>
      </div>
    </div>
  )
}

export default Transactions