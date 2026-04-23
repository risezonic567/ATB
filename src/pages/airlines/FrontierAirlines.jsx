import React from 'react'
import FrontierAirlinesFaq from '../../components/FrontierAirlines/FrontierAirlinesFaq'
import FrontierAirlinesContent from '../../components/FrontierAirlines/FrontierAirlinesContent'
import FrontierAirlinesPolicies from '../../components/FrontierAirlines/FrontierAirlinesPolicies'
import FrontierComparisonCTA from '../../components/FrontierAirlines/FrontierComparisonCTA'

function FrontierAirlines() {
  return (
    <div>
      <FrontierAirlinesContent/>
      <FrontierAirlinesPolicies/>
      <FrontierComparisonCTA/>
      <FrontierAirlinesFaq/>
    </div>
  )
}

export default FrontierAirlines