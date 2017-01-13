/**
 * Created by alex.kozovski on 1/11/17.
 */

import React from 'react';
import cardCSS from '../Card/card.css';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';



const Cards = () => (

<div className={cardCSS.container}>
    <Card initiallyExpanded={true} >
      <CardHeader
        title="Without Avatar"
        subtitle="Subtitle"
        actAsExpander={true}
        showExpandableButton={true}
      />


      <CardText expandable={true}>
        <CardMedia>
          <img src="./app/assets/bkg.png" />
        </CardMedia>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
    </Card>
  </div>

);

export default Cards;
