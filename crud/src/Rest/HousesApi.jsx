const HOUSES_ENDPOINT = 'https://65ef1bb5ead08fa78a4fcf13.mockapi.io/week15OJ/Houses';

class HousesApi {
    get = async () => {
        try {
            const resp = await fetch(HOUSES_ENDPOINT);
            const data = await resp.json();
            console.log(Response)
            return data;
        } catch(e) {
            console.log('Oops, looks like fetchHouses had an issue', e);
        }
    }

    put = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house.id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch(e) {
            console.log('Oops, looks like updating houses had an issue', e);
        }
        
    }
}

export const housesApi = new HousesApi();