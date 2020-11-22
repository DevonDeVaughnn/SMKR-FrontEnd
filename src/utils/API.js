import axios from "axios";

export default {
  // Gets all strains
  getStrains: function () {
    return axios.get("/api/strain");
  },
  // Gets the book with the given id
  getStrain: function (id) {
    return axios.get("/api/strain/" + id);
  },
  // Deletes the Strain with the given id
  deleteStrain: function (id) {
    return axios.delete("/api/strain/" + id);
  },
  // Saves a Strain to the database
  saveStrain: function () {
    return axios.post("strain/store");
  },
};
