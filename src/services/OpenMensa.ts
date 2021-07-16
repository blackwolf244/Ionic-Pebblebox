import http from "../http-common";

class MensaDataService {
    // noch nicht verwendet
    getDates() {
        return http.get("https://openmensa.org/api/v2/canteens/198/days/meals");
    }
    // verwendete Abfrage mit HTTP GET
    getMealsByDate(data: string) {
        return http.get("https://openmensa.org/api/v2/canteens/198/days/${data}/meals");
    }
}

export default new MensaDataService();