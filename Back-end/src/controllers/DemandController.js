const mongoose = require('mongoose');

const Pizza = mongoose.model('Pizza');

module.exports = {

    async index(req, res) {
        const {page = 1} = req.query;
        const pizza = await Pizza.paginate({}, {page, limit: 10});
        return res.json(pizza);
    },

    async show(req, res) {
        //Find pelo id
        const pizza = await Pizza.findById(req.params.id);
        return res.json(pizza);
    },

    async store(req, res) {
        //Criação do insert no banco
        const pizza = await Pizza.create(req.body);

        return res.json(pizza);
    },

    async update(req, res) {
        const pizza = await Pizza.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(pizza);
    },

    async destroy(req, res) {
        await Pizza.findByIdAndRemove(req.params.id);

        return res.send();
    }
};
