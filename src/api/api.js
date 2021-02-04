import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class FrienderApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    // const params = (method === "get")
    //   ? data
    //   : {};

    const headers = {
      'Content-Type': 'application/json'
    };

    try {
      return (await axios({ url, method, data, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get the current user. */

  static async getCurrentUser(user_id) {
    let data = { token: FrienderApi.token };
    let res = await this.request(`users/${user_id}`, data, "POST");
    return res.user;
    // let res = await axios({
    //   url: "http://localhost:5000/test",
    //   data: {token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InRlc3QifQ.o1sJL3jdWhf9LMqwubonW5FpJJdXhyMmBHQWaaZQ5_c"}, 
    //   method: "POST"});
    // console.log(res);
  }

  /** Get potential friends for a user */

  static async getPotentialFriends(user_id) {
    let data = { token: FrienderApi.token };
    let res = await this.request(`users/${user_id}/potentials`, data, "POST");
    return res.user_options
  }

  /** Get token for login from username, password. */

  static async login(data) {
    let res = await this.request(`login`, data, "post");
    return res.token;
    // let res = await axios.get("http://localhost:5000/test");
    // console.log(res);
  }

  /** Signup for site. */

  static async signup(data) {
    let res = await this.request(`signup`, data, "post");
    return res.token;
  }

}


export default FrienderApi;
