const url = 'https://api.jikan.moe/v4/seasons/2025/winter?limit=6';

function getData(url) {
    const ajax = new XMLHttpRequest();
    ajax.onload = () => {
        const data = JSON.parse(ajax.responseText);
        processData(data);
    }
    ajax.open("GET", url);
    ajax.send();
}

processData = (data) => {
    const title = [];
    const dateAiring = [];
    const totalEpisode = [];
    const genre = [];
    console.log(data.data[0]);
    data.data.forEach((array, index) => {
        //Memasukkan data ke array title
        title.push(array.title);

        //Memasukkan data ke array dateAiring
        const date = array.aired.string;
        dateAiring.push(date);
        dateAiring[index] = dateAiring[index].replace("to ?", "");

        //Memasukkan data ke array totalEpisode
        const episode = array.episodes + ", " + array.duration;
        totalEpisode.push(episode);

        genre.push(array.genres)
    });
    console.log(genre);
}

getData(url);

