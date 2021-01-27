import React, { Component, useState, useEffect } from 'react';

export default class MenuSystem extends Component{
    constructor() {
        super();
        this.option = "News";
    }

    setMenuOption(option){
        this.option = option
    }
    getMenuOption() {
        return this.option;
    }
}