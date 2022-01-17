
export const getGifs = async (category)=>{

    const url =`https://api.giphy.com/v1/gifs/search?limit=10&api_key=v6tOCqZ1lruf8Zt87TmOe2pWAmmv2fZQ&q=${ encodeURI(category)}`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();

    const gifts = data.map(img =>{

        return {
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
    });


    return gifts;
}