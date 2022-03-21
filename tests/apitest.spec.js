const{ test, expect } = require('@playwright/test');


// test('contxt fetch', async({page}) => {
//     //this does a get request on behalf of the page, but this does not allow for a stand alone request
//     const response = await page.request.get('https://www.wikipedia.org/');
// })

//Request in the {} is gonna handle api automation
test('Fetch wiki', async({request}) => {
    //line 11 allows the user to do a stand alone request from node.js to an api endpoint
    const response = await request.get('https://www.wikipedia.org/');
});

//POST
test('abc', async({request}) => {
    const response = await request.post(`${url}`,{
        data: {

        }, headers:{
            //authentication
            "" : ""
        }
    });
    expect(response.status()).toBe(201);
    expect(response.ok()).toBeTruthy();
    console.log(response.json())
    //output as xml
    /*console.log(await response.body()).toString(); */
})

//GET
//To run only this test then add test.only at the start
test('def', async({request}) => {
    const response  = await request.get(`${url}`, {
        params: {
            //json body
            "" : ""
        }
    });
    console.log(await response.json());
    expect(response.status().toBe(200));
    expect(await response.json()).toMatchObject({
        result:[{
            xyz : 'abc'
        }]
    })
})