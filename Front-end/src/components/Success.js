import React, {Component} from 'react';

import {Typography} from "@material-ui/core";

export class Success extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM //
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        return (

            <>
                <Typography variant={"h1"}>

                  Pedido Realizado

                </Typography>


            </>
        );
    }
}

export default Success;
