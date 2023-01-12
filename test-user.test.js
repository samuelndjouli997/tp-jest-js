let dict = [];
let dataList;

async function testAPI2(url) {
	await fetch(url).then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log(data)
        expect(data.id).toBeGreaterThan(100);
        expect(data.firstName).not.toBeNull();
        expect(data.lastName).not.toBeNull();
        expect(data.email).toMatch(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      })
}

function testUserDate(url) {
    const date = new Date("2021-01-01");
    return fetch(url, {
        method: "GET",
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        expect(data.registeredAt.split("T")[0]).toMatch(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/);
        expect(data.registeredAt.split("T")[0]).toBe > date;
    })
}

test("Test", () => {
    for(i = 0; i < 20; i++){
        return testAPI2("https://api-test-jest.up.railway.app/test-user");
    }
	
});

test("Test", () => {
    for(i = 0; i < 20; i++){
        return testUserDate("https://api-test-jest.up.railway.app/test-user");
    }
	
});