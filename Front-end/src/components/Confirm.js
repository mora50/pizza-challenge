import React, { Component } from 'react';
import {Box, Button,List, ListItem, ListItemText }  from "@material-ui/core";

export class Confirm extends Component {

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
    const {
      values: {nome, telefone, endereco ,recheio, massa , tamanho, borda }
    } = this.props;

    console.log('oi');

    return (

        <>
          <List>
            <ListItem>
              <ListItemText primary="Nome" secondary={nome} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Telefone" secondary={telefone} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Endereco" secondary={endereco} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Recheio" secondary={recheio} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Massa" secondary={massa} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Tamanho" secondary={tamanho} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Borda" secondary={borda} />
            </ListItem>
          </List>
          <br />


          <Box display="flex" mt={3}>

            <Box mr={2}>


            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
          >Voltar</Button>

          </Box>

          <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
          >Confirmar</Button>

          </Box>

        </>

    );
  }
}

export default Confirm;
