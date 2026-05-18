import React from 'react'
import FrontierAirlinesFaq from '../../components/FrontierAirlines/FrontierAirlinesFaq'
import FrontierAirlinesContent from '../../components/FrontierAirlines/FrontierAirlinesContent'
import FrontierAirlinesPolicies from '../../components/FrontierAirlines/FrontierAirlinesPolicies'
import FrontierComparisonCTA from '../../components/FrontierAirlines/FrontierComparisonCTA'

function FrontierAirlines() {
  return (
    <div>
      <Helmet>
        <title> Frontier Airlines Baggage Policy & Cheap Frontier Flights</title>
        <meta name="description" content="Frontier Airlines baggage policy, reservation rules, and cheap Frontier flights. Check baggage fees and travel policies to avoid extra charges before you fly." />
        <link rel="canonical" href="https://www.airlinesticketbooking.com/airline/frontier" />
      </Helmet>
      
      <FrontierAirlinesContent/>
      <FrontierAirlinesPolicies/>
      <FrontierComparisonCTA/>
      <FrontierAirlinesFaq/>
    </div>
  )
}

export default FrontierAirlines