import mongoose from 'mongoose';

const Photo = mongoose.model('Photo', {
    name: String,
    date: String,
    time: String,
    activities: Array,
    userauth: String
})

export default Itinerary;
