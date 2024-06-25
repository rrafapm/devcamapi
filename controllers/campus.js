//@desc     Obtener todos los campus (Descripción controlador)
//@route    /api/v1/campus (Ruta que la llama)
//@access   público (Tipo de acceso)
exports.getCampus = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Listado de todos los campus'});
}

//@desc     Crear nuevo elemento -- alta de campus
//@route    /api/v1/campus 
//@access   público
exports.createCampus = (req, res, next) => {
    res.status(201).json({success: true, msg: "Elemento creado"});
}

//@desc     Obtener un campus por su id
//@route    /api/v1/campus/:id
//@access   público 
exports.getCampusId = (req, res, next) => {
    res.status(200).json({success: true, msg: `Info del campus ${req.params.id}`});
}

//@desc     Modificar un campus por su id
//@route    /api/v1/campus/:id
//@access   público 
exports.modifyCampus = (req, res, next) => {
    res.status(201).json({success: true, msg: `Elemento modificado ${req.params.id}`});
}

//@desc     Eliminar un campus por su id
//@route    /api/v1/campus/:id
//@access   público 
exports.deleteCampus = (req, res, next) => {
    res.status(200).json({success: true, msg: `Elemento eliminado ${req.params.id}`});
}