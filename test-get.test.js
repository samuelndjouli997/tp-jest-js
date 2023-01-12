async function testAPI(url) {
	await fetch(url).then(function(response) {
        return response.json();
      }).then(function(data) {
            expect(data.brand).toEqual('Ford');
            expect(data.model).toMatch('Mustang');
            expect(data.year).toBe(1969);
      })
}

test("Status : Keys matched", () => {
	return testAPI("https://api-test-jest.up.railway.app/test-get");
});

// test("Status : Keys matched", () => {
// 	return testHealtcheck("https://api-test-jest.up.railway.app/test-get");
// });

// test("Matching keys", () => {
//     expect(infoCar.brand).toMatch(/Ford/);
//     expect(infoCar.model).toEqual('Mustang');
//     expect(infoCar.year).toBe(1969);
// });

// test("Matching keys", () => {
//     expect(infoCar.brand).toMatch(/Ford/);
//     expect(infoCar.model).toEqual('Mustang');
//     expect(infoCar.year).toBe(1969);
// });


