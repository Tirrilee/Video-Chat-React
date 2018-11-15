export default class MediaHandler {
	getPermissions() {
		return new Promise((res, rej) => {
			navigator.mediaDevices.getUserMedia({video: true, audio:  { facingMode: "user" }})
				.then((stream) => {
					res(stream)
				})
				.catch(err => {
					alert(`Unable to fetch stream ${err}`)
				}) 
		})
	}
}