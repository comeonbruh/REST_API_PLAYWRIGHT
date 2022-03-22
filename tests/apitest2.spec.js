const{ test, expect } = require('@playwright/test');

const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImYxZDU2YTI1MWU0ZGRhM2Y0NWM0MWZkNWQ0ZGEwMWQyYjlkNzJlMGQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdG9kby1saXN0LTg0NWRkIiwiYXVkIjoidG9kby1saXN0LTg0NWRkIiwiYXV0aF90aW1lIjoxNjQ0NDA0NzYwLCJ1c2VyX2lkIjoiZGRjRnRWNFlXS2hxRjVzOWxDeE1GdktpWVZkMiIsInN1YiI6ImRkY0Z0VjRZV0tocUY1czlsQ3hNRnZLaVlWZDIiLCJpYXQiOjE2NDc4NjczNjEsImV4cCI6MTY0Nzg3MDk2MSwiZW1haWwiOiJzdXJhakBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic3VyYWpAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.drDfyur2myUCNA8LeC1GHLK0Pc5v8yVrF0liIbCEk6relCTyEDrhjhwEQO7ojkPQnqfASQb1frvrX_0cHY1U_EJYx6NBGMlZwFM7gktcvrY6MowmN0V1sw-5cJ7aeWAD081fgssHT8RiqY6e40J-5jgy8Oyndbjbjb_BnXvqJP1qcGrlUs3xGOzY_OBYHF3yIvmaj1h2eiRli9oALA1lM8rryKWkrmLGQWmXe-dDEYSUXWhe6GLvWgsGY_w3aYAzOYPTnVMrlMv2wIVMpbhhh2019r-4nTmPJDlKeYcSMnA6Wy1HFhdjqV1xcYjKRnXmG9DFLEU2lJc6jnf0jLyEFA'

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
            //dummy data
            xyz : 'abc'
        }]
    })
})

//PUT
test('def', async({request}) => {
    const response  = await request.put(`${url}`, {
        //does not include param. Takes in request which is data.
        data: {
            //json body
            "" : ""
        }
    });
    console.log(await response.json());
})