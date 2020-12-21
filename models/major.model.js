const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const { ObjectId } = require('mongoose').Schema;

const majorSchema = new Schema(
    {
        name: {
            type : String,
            required :true
        },
        department: {
            type : String,
            required : true
        },
        core: [
            {
                core_name:{
                    type : String,
                    required : true
                },
                core_department:{
                    type : String
                }
            }
        ]
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Major', majorSchema)