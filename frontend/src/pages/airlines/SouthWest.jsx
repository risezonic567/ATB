import React from 'react'
import SouthWestComparisonCTA from '../../components/SouthWest/SouthWestComparisonCTA'
import SouthWestContent from '../../components/SouthWest/SouthWestContent'
import SouthWestPolicies from '../../components/SouthWest/SouthWestPolicies'
import { Helmet } from 'react-helmet'

function SouthWest() {
  return (
    <div>
      <Helmet>
        <title>Southwest Airlines Baggage Policies | Airlines ticket booking </title>
        <meta name="description" content="Discover Southwest Airlines baggage policy, free checked bags, refund policy, flight change rules, and flexible cancellation guidelines before booking your flight." />
      </Helmet>

      <h1>Southwest Airlines Baggage, Cancellation & Refund Policy </h1>
      <SouthWestContent/>
      <SouthWestPolicies/>
      <SouthWestComparisonCTA/>
    </div>
  )
}

export default SouthWest