import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:8080/",
    headers: {
        "Content-Type": "application/json",
    },
});

const getAll = () => {
    return http.get("/atendimentos");
};

const get = (id) => {
    return http.get(`/atendimentos/${id}`);
};

const create = (data) => {
    return http.post("/atendimentos", data);
};

const update = (id, data) => {
    return http.put(`/atendimentos/${id}`, data);
};

const remove = (id) => {
    return http.delete(`/atendimentos/${id}`);
};

const removeAll = () => {
    return http.delete("/atendimentos");
};

const findByNome = (nome) => {
    return http.get(`/atendimentos?nome=${nome}`);
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByNome,
};