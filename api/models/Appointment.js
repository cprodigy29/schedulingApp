/**
 * Appointment
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {

        appointment_start: "datetime",
        appointment_end: "datetime",
        employee_id: "integer",
        customer_id: "integer",
        status: "string"
    }

};

/**
 * Created by cprodigy29 on 3/20/14.
 */
