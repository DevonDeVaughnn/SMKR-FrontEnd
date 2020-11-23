import axios from "axios";

export default {
  // Gets all strains
  getStrains: function () {
    return axios.get("/api/strain");
  },
  // Gets the strain with the given name
  getStrain: function (name) {
    return axios.get("/api/strain/" + name);
  },

  // Saves a Strain to the database
  saveStrain: function () {
    return axios.post("strain/store");
  },
};
