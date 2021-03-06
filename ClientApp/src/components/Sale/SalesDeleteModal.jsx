import axios from 'axios';
import React, { Component } from 'react';
import { Button, Modal,Icon } from 'semantic-ui-react';

export default class SalesDeleteModal extends Component {
   constructor(props) {
      super(props);
   }

   deleteSales = (id) => {
      axios
         .delete(`Sales/DeleteSales/${id}`)
         .then((res) => {
            this.props.reloadSales();
            this.props.openDeleteSalesModal(false);
            this.props.fetchSalesAgain(this.props.salesPerPage, false, false, false, false);
         })
         .catch((err) => {
            console.log(err);
         });
   };

   render() {
      return (
         <div className='modal'>
            <Modal open={this.props.open}>
               <Modal.Header>Delete Sale</Modal.Header>
               <Modal.Content>
                  <p>Are you sure?</p>
               </Modal.Content>
               <Modal.Actions>
                  
               <Button
                     color='black'
                     onClick={() => {
                        this.props.openDeleteSalesModal(false);
                     }}
                  >
                     Cancel
                  </Button>
                  <Button color='red' onClick={() => this.deleteSales(this.props.salesId)} icon labelPosition="right">
                     delete<Icon link name='times' />  
                  </Button>
               </Modal.Actions>
            </Modal>
         </div>
      );
   }
}
