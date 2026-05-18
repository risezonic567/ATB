import React from 'react'
import JetBlueAirlineContent from '../../components/JetBlueAirlines/JetBlueAirlineContent'
import JetBlueAirlinePolicies from '../../components/JetBlueAirlines/JetBlueAirlinePolicies'
import JetBlueAirlineComparisonCTA from '../../components/JetBlueAirlines/JetBlueAirlineComparisonCTA'
import { Helmet } from 'react-helmet'

function JetBlueAirlines() {
  return (
    <div>
      <Helmet>
        <title>JetBlue Cancellation & Change Policy | Fees & Refund Rules</title>
        <meta name="description" content="Learn JetBlue cancellation and flight change policy, refund rules, and baggage guidelines. Get clear travel information before booking your next flight." />

      </Helmet>
      <h1>JetBlue Airlines Policies: Complete Travel Booking Guide</h1>
      {/* <JetBlueAirlineContent/>
      <JetBlueAirlinePolicies/>
      <JetBlueAirlineComparisonCTA/> */}
    </div>
  )
}

export default JetBlueAirlines