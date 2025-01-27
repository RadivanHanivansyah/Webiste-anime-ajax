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
    const titleEnglish = [];
    const dateAiring = [];
    const totalEpisode = [];
    const genre = [];
    const sinopsis = [];
    const studio = [];
    const source = [];
    const theme = [];
    const img = [];
    const type = [];
    const score = [];
    const member = [];
    data.data.forEach((array, index) => {
        //Memasukkan data ke array title
        title.push(array.title);
        titleEnglish.push(array.title_english);

        //Memasukkan data ke array dateAiring
        const date = array.aired.string;
        dateAiring.push(date);
        dateAiring[index] = dateAiring[index].replace("to ?", "");

        //Memasukkan data ke array totalEpisode
        const episode = array.episodes + " eps" + ", " + array.duration;
        totalEpisode.push(episode);
        const episodeType = array.type + "(" + array.episodes + ")";
        type.push(episodeType);


        // Memasukkan data ke array genre
        genre.push(array.genres);

        // Memasukkan data ke array sinposis
        sinopsis.push(array.synopsis);

        // Memasukkan data ke array studio
        studio.push(array.studios[0].name);

        // Memasukkan data ke array source
        source.push(array.source)

        // Memasukkan data ke array theme
        theme.push(array.themes);

        // Memasukkan data ke array img
        img.push(array.images.jpg.image_url);

        // Memasukkan data ke array img
        score.push(array.score);

        // Memasukkan data ke array member
        member.push(array.members);
        member[index] = member[index].toString();
        member[index] = member[index].slice(0, 3) + "k";

    });
    showData(title, titleEnglish, dateAiring, totalEpisode, genre,
        type, sinopsis, studio, source, theme, img, score, member);

}

showData = (title, titleEnglish, dateAiring, totalEpisode, genre,
    type, sinopsis, studio, source, theme, img, score, member) => {
    const titleJapan = document.querySelectorAll('.title.japan');
    const englishTitle = document.querySelectorAll('.title.english');
    const image = document.querySelectorAll('#image');
    const airing = document.querySelectorAll('.date');
    const episode = document.querySelectorAll('.total.episode');
    const synopsis = document.querySelectorAll('.Synopsis');
    titleJapan.forEach((element, index) => {
        element.textContent = title[index];
    })
    englishTitle.forEach((element, index) => {
        element.textContent = titleEnglish[index];
    })
    image.forEach((element, index) => {
        element.src = img[index];
    })
    airing.forEach((element, index) => {
        element.textContent = dateAiring[index];
    })
    episode.forEach((element, index) => {
        element.textContent = totalEpisode[index];
    })
    synopsis.forEach((element, index) => {
        element.textContent = sinopsis[index];
    })
}

getData(url);

