import request from "superagent";

const API_BASE = `https://hsdqgk1xj6.execute-api.us-east-1.amazonaws.com/production`;

export function fetchCovidStats(corpid) {
	return new Promise((resolve, reject) => {
		request.get(`${API_BASE}/mohfw`).end((err, res) => {
			if (err) {
				reject(res.body);
			} else {
				resolve(res.body);
			}
		});
	});
}
