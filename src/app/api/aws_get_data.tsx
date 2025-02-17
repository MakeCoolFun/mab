import CheckJWT from './check_JWT';

type GetType = 'GET' | 'SCAN';

export type GetData = {
    id: string;
    title: string;
    s_key: string;
    text: string;
};
const GetListData = async (type: GetType, id: string = '') => {
    let data_result: GetData[] = [];

    const check_jwt = await CheckJWT('mamanoongMa');
    if (check_jwt === null) return [];

    const payload = {
        s_key: process.env.NEXT_PUBLIC_CHECK_J,
        get_type: type,
        id: type.includes('GET') ? id : '',
    };

    //env.
    const data_url = process.env.NEXT_PUBLIC_AWS_PATH;

    // try {
    //     //
    //     await fetch(`${data_url}/data_GET`, {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(payload),
    //         mode: 'cors',
    //         cache: 'no-store',
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log('data', data);
    //             data_result = type.includes('SCAN') ? data : [data[0].response.Item];
    //         });
    // } catch (e) {
    //     console.log('GET DATA ERROR');
    // }

    try {
        //
        data_result = await (
            await fetch(`${data_url}/data_GET`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
                mode: 'cors',
                cache: 'no-store',
            })
        ).json();
    } catch (e) {
        console.log('GET DATA ERROR');
    }

    console.log('result ', data_result);
    if (data_result === null) return [];

    return data_result;
};
export default GetListData;
