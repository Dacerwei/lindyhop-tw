import React from 'react'

import _ from 'lodash'
import PropTypes from 'prop-types'
import { Grid, Image } from 'semantic-ui-react'

const BrandSection = (props) => {
    return (
        <Grid doubling columns={props.columns} textAlign='center'>
            {
                _.map(props.src, (brand) => (
                    <Image key={brand.name} src={brand.src} />
                ))
            }
        </Grid>
    );
}

BrandSection.protoTypes = {
    src: PropTypes.object,
    columns: PropTypes.number
};

BrandSection.defaultProps = {
    src: [],
    columns: 5
};


export default BrandSection;