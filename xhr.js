const apiKey2 = "** REEMPLAZAR POR SU API KEY **";

const endpoint = `http://api.giphy.com/v1/gifs/random?api_key=${ apiKey2 }`;

const loadGif = (url) => {
    return new Promise( (resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open("GET", url);
        request.responseType = "json";
        request.onload = () => {
            if(request.status === 200)
                resolve(request.response);
            else
                reject(Error("Error al traer el gif: " + request.statusText));
        };

        request.onerror = () => {
            reject(Error("Problema de network"));
        };

        request.send();
    });
};

loadGif(endpoint)
    .then( response => {
        const { url } = response.data.images.original;
        const image = document.createElement("img");
        image.src = url;
        document.body.append(image);
    }).catch(reason => console.log(Error(reason)));