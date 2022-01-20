const validationOptions = {
    abortEarly: false, 
    allowUnknown: false
};

module.exports =  function validateSchema(schema) {
    return (req, res, next) => {
        let validationResult = schema.validate(req.body, validationOptions);
        let invalid = validationResult.error != null;
        
        if (invalid) {
            let errors = [];
            validationResult.error.details.forEach(element => {
                errors.push( { path: element.path[0], message: element.message });
            });;
            res.status(400).json(errors);
        } else {
            next();
        }
    }
};