const Campus = require('../models/Campus');

//@desc     Obtener todos los campus (Descripción controlador)
//@route    /api/v1/campus (Ruta que la llama)
//@access   público (Tipo de acceso)
exports.getCampus = async (req, res, next) => {
    try {
        const campus = await Campus.find();
        res.status(200).json({success: true, msg: 'Listado de todos los campus', data: campus});
    } catch (err) {
        res.status(400).json({success: false, error: err.message});
    }
}

//@desc     Crear nuevo elemento -- alta de campus
//@route    /api/v1/campus 
//@access   público
exports.createCampus = async (req, res, next) => {
    try{
        const campus = await Campus.create(req.body);
        res.status(201).json({success: true, msg: "Elemento creado", data: campus});
    } catch(err){
        res.status(400).json({success: false, error: err.message});
    }
}

//@desc     Obtener un campus por su id
//@route    /api/v1/campus/:id
//@access   público 
exports.getCampusId = async (req, res, next) => {
    try {
        const campus = await Campus.findById(req.params.id);

        //Evaluar si no se ha encontrado la búsqueda
        if(!campus) {
            return res.status(404).json({success: false, msg: `No se encontro el campus ${req.params.id}`});
        }
        res.status(200).json({success: true, msg: `Info del campus ${req.params.id}`,data: campus});
    } catch (err) {
        res.status(400).json({success: false, error: err.message});
    }
}

//@desc     Modificar un campus por su id
//@route    /api/v1/campus/:id
//@access   público 
exports.modifyCampus = async (req, res, next) => {
    try {
        const campus = await Campus.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        //Evaluar si no se ha encontrado la búsqueda
        if(!campus) {
            return res.status(404).json({success: false, msg: `No se encontro el campus ${req.params.id}`});
        }
        res.status(201).json({success: true, msg: `Modificado el campus ${req.params.id}`,data: campus});
    } catch (err) {
        res.status(400).json({success: false, error: err.message});
    }
}

//@desc     Eliminar un campus por su id
//@route    /api/v1/campus/:id
//@access   público 
exports.deleteCampus = async (req, res, next) => {
    try {
        const campus = await Campus.findByIdAndDelete(req.params.id);
        //Evaluar si no se ha encontrado la búsqueda
        if(!campus) {
            return res.status(404).json({success: false, msg: `No se encontro el campus ${req.params.id}`});
        }
        res.status(200).json({success: true, msg: `Eliminado el campus ${req.params.id}`,data: campus});
        
    } catch (err) {
        res.status(400).json({success: false, error: err.message});
    }
    // res.status(200).json({success: true, msg: `Elemento eliminado ${req.params.id}`});
}