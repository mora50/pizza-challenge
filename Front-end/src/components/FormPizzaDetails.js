import React, {Component} from 'react';

import {Box, Button, InputLabel, MenuItem, Select} from "@material-ui/core";

import Header from "./Header";

import axios from "axios";

export class FormPizzaDetails extends Component {

    state = {
        pizza: [],
        loading: false,
        error: false
    };

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    pizzaContent = async () => {

        try {

            await axios.get('http://localhost:3001/api/pizzaparts')
                .then(res => {

                    this.setState({pizza: res.data})
                })
        } catch (e) {
            alert(e);
            this.setState({error: true})
        }
    };

    componentDidMount() {
        this.pizzaContent();
    }

    render() {
        const {values, handleChange} = this.props;

        const {pizza} = this.state;


        return (

            <>


                <Box mx="auto" maxWidth={500} p={2}>

                    <Header/>

                    {
                        Object.keys(pizza).map(stuff => (

                            <Box mt={3}>

                                <InputLabel key={`${stuff}placeholder`} id="demo-simple-select-label">Selecione  {stuff} da pizza</InputLabel>

                                <Select fullWidth={true}
                                    labelId={stuff}
                                    id={stuff}
                                    defaultValue={`${values}.${stuff}`}
                                    onChange={handleChange(stuff)}
                            >

                                { Object.keys(pizza[stuff]).map( index => (


                                <MenuItem key={pizza[index]} value={pizza[stuff][index]}>{pizza[stuff][index]}</MenuItem>

                                ))}

                            </Select>


                            </Box>


                        ))
                    }

                    <Box display="flex" mt={3}>

                        <Box mr={2}>

                            <Button
                                color="primary"
                                variant="contained"
                                onClick={this.back}
                            >Voltar</Button>

                        </Box>

                        <Button
                            color="secondary"
                            variant="contained"
                            onClick={this.continue}
                        >Continuar</Button>

                    </Box>

                </Box>

            </>

        );
    }
}

export default FormPizzaDetails;
