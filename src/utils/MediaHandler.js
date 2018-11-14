export default class MediaHandler {
	getPermissions() {
		return new Promise((res, rej) => {
			console.log(navigator)
			navigator.mediaDevices.getUserMedia({video: true, audio: true})
				.then((stream) => {
					res(stream)
				})
				.catch(err => {
					alert(`Unable to fetch stream ${err}`)
				}) 
		})
	}
}