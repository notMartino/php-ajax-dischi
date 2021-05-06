<!DOCTYPE html>
<html lang="it" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Disk Collection</title>

    <!-- Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.x"></script>
    <!-- Axios -->
    <script src="https://cdn.jsdelivr.net/npm/axios@0.21.1/dist/axios.min.js"></script>

    <!-- Local links -->
    <script src="js/script.js"></script>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <main>
        <div id="app">
            <section>
                <select name="genres" id="genres" @change="filteredCollection()" v-model="selectedFilter">
                    <option value="" selected>All</option>
                    <option v-for="genre in genreList" :value="genre">
                        {{genre}}
                    </option>
                </select>
            </section>
            <section>
                <ul class="cover">
                    <li v-for="album in filteredAlbums">
                        <h3>{{album.title}}</h3>
                        <h4>{{album.author}}</h4>
                        <h5>{{album.year}}</h5>
                        <h5>{{album.genre}}</h5>
                        <img :src="album.poster" alt="Poster">
                    </li>
                </ul>
            <section>
        </div>
    </main>
</body>
</html>