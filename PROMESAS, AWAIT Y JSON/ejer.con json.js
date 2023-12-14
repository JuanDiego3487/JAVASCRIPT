function getNombre(nomusu) {
    const url= `https://api.github.com/users/${nomusu}`;

    fetch (url)
        .then( respuesta => respuesta.json())
        .then (json => {
            console.log(json);
        })
}

getNombre("JuanDiego3487")


async function getNombre(nomusu) {
    const url= `https://api.github.com/users/${nomusu}`;

    const respuesta = await fetch(url);
    const json = await respuesta.json();

    console.log(json.name);
}
getNombre("JuanDiego3487");