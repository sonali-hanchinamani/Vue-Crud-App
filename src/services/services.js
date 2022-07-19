import http from '../router/httpCommons';

class UserEndpoint {
  getAll() {
    return http.get("/users");
  }

  create(data) {
    return http.post("/users", data);
  }

  getByID(id) {
    return http.get(`/users/${id}`);
  }

  delete(id) {
    return http.delete(`/users/${id}`);
  }
}

export default new UserEndpoint();