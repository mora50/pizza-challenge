import React, {Component} from 'react';

import {Box, Button, TextField} from "@material-ui/core";

import Header from "./Header";

export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {

        const {values, handleChange} = this.props;


        return (

            <>

                <Box mx="auto" maxWidth={500} p={2}>

                    <Header/>

                    <TextField
                        placeholder="Digite seu nome"
                        label="Digite seu nome"
                        onChange={handleChange('nome')}
                        defaultValue={values.nome}
                        margin="normal"
                        fullWidth={true}
                    />

                    <TextField
                        placeholder="Digite seu telefone"
                        label="Digite seu telefone"
                        onChange={handleChange('telefone')}
                        defaultValue={values.telefone}
                        margin="normal"
                        fullWidth={true}
                    />

                    <TextField
                        placeholder="Digite seu endereço"
                        label="Digite seu endereço"
                        onChange={handleChange('endereco')}
                        defaultValue={values.endereco}
                        margin="normal"
                        fullWidth={true}
                    />

                    <br/>

                    <Box mt={2}>

                        <Button
                            color="secondary"
                            variant="contained"
                            onClick={this.continue}
                        >
                            Prosseguir</Button>

                    </Box>

                </Box>

            </>

        )
            ;
    }
}

export default FormUserDetails;
