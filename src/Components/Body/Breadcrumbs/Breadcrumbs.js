import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import {
  Breadcrumb,
  BreadcrumbItem,
} from 'styled-breadcrumb-component';
 



 class Breadcrumbs extends Component {

  render() {
    return (
      
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="#">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#">Library</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            Data
          </BreadcrumbItem>
        </Breadcrumb>
     
    )
  }
}


export default Breadcrumbs