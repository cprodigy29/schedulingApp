/**
 * Customer
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

// Customer.js
var Customer = {
    attributes: {
        firstName: 'STRING',
        lastName: 'STRING',
        birthDate: 'DATE',
        phoneNumber: {
            type: 'STRING',
            defaultsTo: '111-222-3333'
        },
        emailAddress: {
            type: 'email' // Email type will get validated by the ORM
            //required: true
        }
    }
};

module.exports = Customer;

/**
 * Created by cprodigy29 on 3/20/14.
 */
