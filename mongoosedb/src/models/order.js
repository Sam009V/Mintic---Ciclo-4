const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
nombre:{type: String,
    required: true
},
ancho:{type: Number,
    required: true
},
alto:{type: Number,
    required: true
},
largo:{type: Number,
    required: true
},
direccionInicial:{type: String,
    required: true
},
password:{type: String,
    required: true
},
identificacion:{type: Number,
    required: true
},
direccionEnvio:{type: String,
    required: true
},
ciudadEnvio:{type: String,
    required: true
},
nombreReceptor:{type: String,
    required: true
},
identificacionReceptor:{type: Number,
    required: true
},

});

module.exports = mongoose.model('user', userSchema);