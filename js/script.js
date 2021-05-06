function init() {

    new Vue({
        el: '#app',
        data: {
            filteredAlbums: [],
            genreList: [],
            selectedFilter: ''
        },
        mounted: function () {
            this.albumsCollection();
        },
        methods:{
            // Funzione creazione album iniziale
            albumsCollection: function () {
                axios.get('../data.php')
                .then(data => {
                    
                    this.filteredAlbums = data.data;
                    console.log(this.filteredAlbums);
                    
                    // Se non ho ancora i generi
                    if(this.genreList.length == 0){
                        this.getGenreList();
                    }
                })
                .catch(() => {
                    console.log('Error');
                })
                ; 
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
            // Funzione filtro album
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
                })
                .catch(() => {
                    console.log('Error');
                });
                console.log('Filtro: ', this.selectedFilter);
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", init);