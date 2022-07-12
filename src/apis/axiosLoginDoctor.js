// import axios from 'axios';
// const Api_url = `https://enclave-encare.herokuapp.com/api/user`;

// export default  function callApi(method = 'post', body) {
//     return fetch('https://enclave-encare.herokuapp.com/api/user/login', {
//         method: method,
//         headers: {
//             'Accept': 'application/json, text/plain',
//             'Content-Type': 'application/json;charset=UTF-8'
//         },
//         body: JSON.stringify(body)
//       }).then((response) =>response.json());
// }
import axios from 'axios';
const Api_url = `https://enclave-encare.herokuapp.com/api`;

export default async function callApi(endpoit = '', method = 'post', body) {
    return await axios({
        baseURL: `${Api_url}/${endpoit}`,
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
    });
}