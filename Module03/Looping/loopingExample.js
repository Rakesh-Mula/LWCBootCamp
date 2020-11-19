import { LightningElement } from 'lwc';

export default class LoopingExample extends LightningElement {

    contacts = [{
                Index : 0, Id : 'C1', Name : 'John Abraham' , Email : 'ab@gmail.com',
              },
            {
                Index : 1, Id : 'C2', Name : 'Brad Pitt' , Email : 'bp@gmail.com',
            },
            {
                Index : 2, Id : 'C3', Name : 'Angelina Jole' , Email : 'jolie@gmail.com',
            },
            {
                Index : 3, Id : 'C4', Name : 'Peter Parker' , Email : 'pk@gmail.com',
            }];
}
