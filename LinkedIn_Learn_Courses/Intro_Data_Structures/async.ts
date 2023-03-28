const axiosRequest = require("axios");

// let response = axiosRequest.get("https://www.boredapi.com/api/activity");

// console.log(
// 	response.then((data: any) => {
// 		console.log(data.data.activity);
// 	})
// );

// AXIOS .get .then

// let response = axiosRequest
// 	.get("https://www.boredapi.com/api/activity")
// 	.then((response: any) => [console.log(response.data.activity)])
// 	.catch((err: any) => {
// 		console.log(err);
// 	});

// console.log("what should I do?");

// ASYNC AWAIT, try/catch

// const getActivity = async () => {
// 	try {
// 		let awaitedResponse = await axiosRequest.get("https://www.boredapi.com/api/activity");
// 		console.log(`My activity from using async: ${awaitedResponse.data.activity}`);
// 	} catch (err) {
// 		console.log(err);
// 	}
// };

// getActivity();

// FETCH, which is based on async/await
// https://www.w3schools.com/jsref/api_fetch.asp

// prettier-ignore
// const fetchedPromise = fetch("https://www.boredapi.com/api/activity")
//     .then(res => {
//         if (res.ok) {
//             console.log('success')
//         } else {
//             console.log('error')
//         }
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
// console.log(fetchedPromise);

fetch("https://reqres.in/api/users", {
	method: "POST",
	headers: {
		"Content-Type": "application/json"
	},
	body: JSON.stringify({
		name: "User 1"
	})
})
	.then(res => {
		return res.json();
	})
	.then(data => console.log(data));
