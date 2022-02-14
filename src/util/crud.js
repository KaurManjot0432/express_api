export const getOne = model => async (req, res) => {
    try{
        const doc = await model.findOne({id : req.params.id}).exec();
        if(!doc) {
            return res.status(404).end();
        }
        res.status(200).json({data : doc});
    } catch(err) {
        console.error(err);
        res.status(400).end();
    }
}

export const getAll = model => async (req, res) => {
    try{
        const doc = await model.find({}).exec();
        if(!doc) {
            return res.status(404).end();
        }
        res.status(200).json({data : doc});
    } catch(err) {
        console.error(err);
        res.status(400).end();
    }
}

export const createOne  = model => async (req, res) => {
    try{
        const doc = await model.create(req.body);
        if(!doc) {
            return res.status(404).end();
        }
        console.log(doc);
        res.status(200).json({data : doc});
    } catch (err){
        console.error(err);
        res.status(400).end();
    }
}

export const updateOne = model => async (req, res) => {
    try{
        const doc = await model.findOneAndUpdate({id : req.params.id}, req.body, {new : true}).exec();
        if(!doc) {
            return res.status(404).end();
        }
        console.log(doc);
        res.status(200).json({data : doc});
    } catch (err){
        console.error(err);
        res.status(400).end();
    }
}

export const deleteOne = model => async (req, res) => {
    try{
        const doc = await model.findOneAndRemove({id : req.params.id}).exec();
        if(!doc) {
            return res.status(404).end();
        }
        res.status(200).json({data : doc});
    } catch (err){
        console.error(err);
        res.status(400).end();
    }
}

export const crudControllers = model => ({
    deleteOne : deleteOne(model),
    updateOne : updateOne(model),
    createOne : createOne(model),
    getAll : getAll(model),
    getOne : getOne(model),
})