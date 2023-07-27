import React, { Component } from "react";
import css from '../../styles.css';

export class Modal extends Component {
    render() {
        
        return (
             <div className={css.overlay}>
              <div className={css.modal}>{this.props.children}</div> 
            </div>
    
        )
    }
 }