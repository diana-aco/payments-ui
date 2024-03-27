import './transactions.css';
import { PaymentType, getAllPayments } from '../../data/DataFunctions';
import { useState } from 'react';

const Transactions = () => {

    const initialPayments: PaymentType[] = getAllPayments();

    const [payments, setPayments] = useState<PaymentType[]> (initialPayments)
    
    const countries : string[] = payments.map(payment => payment.country)

    const uniqueCountries : string[] = Array.from(new Set(countries));

    return (
        <div>
        <select id= "countries" className="dropdown">
        {uniqueCountries.map(country => <option key={country} value={country}>{country}</option>)}
        </select> 
      <table className="transactionsTable">
          <thead>
                <tr><th>Id</th><th>Date</th><th>Country</th><th>Currency</th><th>Amount</th></tr>
          </thead>
          <tbody>
	          {}
          </tbody>
      </table>
      </div>
    );
}

export default Transactions
