import axios from "axios";

const todoApi = {
  add: (data) => axios.post(`${process.env.REACT_APP_API_BASE}/todos`, data),

  fetch: () => axios.get(`${process.env.REACT_APP_API_BASE}/todos`),

  fetchPaging: (page, size) =>
    axios.get(
      `${process.env.REACT_APP_API_BASE}/todos/paging?page=${page}&size=${size}`
    ),

  remove: (id) => axios.delete(`${process.env.REACT_APP_API_BASE}/todos/${id}`),
  modify: (data) =>
    axios.put(`${process.env.REACT_APP_API_BASE}/todos/${data.id}`, data),
  search: (page, size, keyword) =>
    axios.get(
      `${process.env.REACT_APP_API_BASE}/todos/search?page=${page}&size=${size}&keyword=${keyword}`
    ),
};

export default todoApi;