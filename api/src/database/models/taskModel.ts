import mongoose from 'mongoose';

const { Schema } = mongoose;

const tasksSchemaModel = new Schema({
    "Description": String,
    "Date": {
        type: Date,
        default: Date.now
    },
    "Status": Boolean
});
tasksSchemaModel.pre('save', function (next) {
    if (typeof this.Date === 'string') {
        this.Date = new Date(this.Date);
    }
    next();
});
const tasksModel = mongoose.model('Tasks', tasksSchemaModel);

export { tasksModel };
