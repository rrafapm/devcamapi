const mongoose = require('mongoose');

const CampusSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre del campus es requerido'],
        trim: true,
        maxleng: [50, 'El nombre del campus no puede tener más de 50 carácteres'] 
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'El campo descripción es requerido'],
        maxleng: [500, 'El tamaño máximo de cáracters son 500']
    },
    website: {
        type: String
    },
    phone: {
        type: String,
        maxleng: [20, 'El tamaño máximo son 20 dígitos']
    },
    email: {
        type: String
    },
    address: {
        type: String,
        required: [true, 'Por favor añade una dirección']
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: false
        },
        coordinates: {
            type: [Number],
            required: false,
            index: '2dsphere'
        },
        formatedAddress: String,
        street: String,
        city: String,
        zipcode: String,
        country: String
    },
    careers: {
        type: [String],
        enum: [
            'Web Development',
            'Mobile Development',
            'UI/UX',
            'Data Science',
            'Business',
            'Other'
        ]
    },
    averageRating:{
        type: Number,
        min: [1, 'El valor tiene que estar entre 1 y 10'],
        max: [10, 'El valor tiene que estar entre 1 y 10']
    },
    averageCost: Number,
    photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    housing: {
        type: Boolean,
        default: false
    },
    jobAssistance: {
        type: Boolean,
        default: false
    },
    jobGuarantee: {
        type: Boolean,
        default: false
    },
    acceptGi: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Campus', CampusSchema);