import React from 'react'
import SouthWestComparisonCTA from '../../components/SouthWest/SouthWestComparisonCTA'
import SouthWestContent from '../../components/SouthWest/SouthWestContent'
import SouthWestPolicies from '../../components/SouthWest/SouthWestPolicies'
import { Helmet } from 'react-helmet'

function SouthWest() {
  return (
    <div>
      <SouthWestContent/>
      <SouthWestPolicies/>
      <SouthWestComparisonCTA/>
    </div>
  )
}

export default SouthWest