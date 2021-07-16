import axios from "axios";

export default axios.create({
    // https://openmensa.org/api/v2/canteens/198/days/2021-04-22/meals
    headers: {
        "Content-type": "application/json"
    }
});
