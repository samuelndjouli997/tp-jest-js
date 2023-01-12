function testHealtcheck(url) {
	return fetch(url).then((response) => {
		expect(response.status).toBe(200);
	});
}

function testHealtCheckStatus(url) {
	return fetch(url).then((response) => {
		expect(response.status).not.toBeGreaterThanOrEqual(400);
	});
}

test("Status : Request fullfiled", () => {
	return testHealtcheck("https://api-test-jest.up.railway.app/healthcheck");
});

test("Status : Not Greater Or Equal to 400", () => {
	return testHealtCheckStatus("https://api-test-jest.up.railway.app/healthcheck");
});