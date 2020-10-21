import express from 'express';
import axios from 'axios';
import path from 'path';
import {itemResponseModel, detailResponseModel} from './responseModel';

const app = express();

app.use('/static', express.static(path.join(__dirname, '..', '..', 'dist', 'static')));

const meliApi = axios.create({
    baseURL: `https://api.mercadolibre.com/`
})
const search = "sites/MLA/search";
const productsLimit = 4;

app.get('/api/items', async (req, res, next) => {
    try {
        const response = await meliApi.get(`${search}?q=${req.query.q}&limit=${productsLimit}`)

        if (response.data.length === 0) {
            res.json({});
            return;
        }

        const filters = response.data.filters;
        const data = {
            results: response.data.results,
            filters: filters.length ? filters[0].values[0].path_from_root : []
        }

        res.header("Access-Control-Allow-Origin", "*");
        res.send(itemResponseModel(data));
    } catch (e) {
        next(new Error(e));
    }
});

app.get('/api/items/:id', async (req, res, next) => {
    try {
        const [ item, itemDescription ] = await Promise.all([
            meliApi.get(`items/${req.params.id}`),
            meliApi.get(`items/${req.params.id}/description`)
        ])
        res.header("Access-Control-Allow-Origin", "*");
        res.send(detailResponseModel(item.data, itemDescription.data));
    } catch (e) {
        next(new Error(e));
    }
});

app.listen(3001, () => console.log('Server ready port: 3001'));