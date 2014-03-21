/**
 * Customer
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

// Employee.js
var Employee = {
    attributes: {
        firstName: 'STRING',
        lastName: 'STRING',
        phoneNumber: {
            type: 'STRING',
            defaultsTo: '111-222-3333'
        }
    }
};

module.exports = Employee;

/**
 * Created by cprodigy29 on 3/20/14.
 */
