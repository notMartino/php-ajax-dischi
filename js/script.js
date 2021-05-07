function init() {

    new Vue({
        el: '#app',
        data: {
            filteredAlbums: [],
            genreList: [],
            selectedFilter: ''
        },
        mounted: function () {
            this.filteredCollection();
        },
        methods:{
            // Funzione filtro album / creazione album iniziale
            filteredCollection: function() {
                axios.get('../data.php',
                {
                    params: {
                        filter: this.selectedFilter
                    }
                })
                .then(data => {
                    this.filteredAlbums = data.data;
                    console.log('Album filtrati: ' , this.filteredAlbums);

                    // Se non ho ancora i generi
                    if(this.genreList.length == 0){
                        this.getGenreList();
                    }
                })
                .catch(() => {
                    console.log('Error');
                });
                console.log('Filtro: ', this.selectedFilter);
            },
            // Funzione per aquisire tutti i generi
            getGenreList: function () {
                for (let i = 0; i < this.filteredAlbums.length; i++) {
                    album = this.filteredAlbums[i];
                    if(!this.genreList.includes(album.genre)){
                        this.genreList.push(album.genre);
                    }
                }
                console.log(this.genreList);
            },
        }
    });
}

document.addEventListener("DOMContentLoaded", init);