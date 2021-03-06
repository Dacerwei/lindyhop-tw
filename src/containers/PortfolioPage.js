import React from 'react'
import PortfolioSection from '../components/PortfolioSection'
import PORTFOLIO_CONTENTS from '../contents/PortfolioContents'

const PortfolioPage = (props) => {
    return (
        <div className="page-wrapper" id="portfolio-page">
            <PortfolioSection src={PORTFOLIO_CONTENTS} columns={3} />
        </div>
    )
};

export default PortfolioPage;