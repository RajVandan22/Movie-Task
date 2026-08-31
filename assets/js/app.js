let cl = console.log;
const movieArr = [
    {
        movieName: "3 Idiots",
        movieDescription: "Three engineering students become close friends during college. The story explores friendship, education, pressure and following your passion. It delivers an inspiring message about success and happiness in life.",
        moviePath: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7951929_p_v8_aa.jpg",
        rating: 8.4,
        movieId: "111"
    },
    {
        movieName: "Dangal",
        movieDescription: "A former wrestler trains his daughters to become professional wrestlers. The movie shows their struggles, determination and journey towards success. It is an inspiring story about family, hard work and breaking stereotypes.",
        moviePath: "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_.jpg",
        rating: 8.3,
        movieId: "112"
    },
    {
        movieName: "Zindagi Na Milegi Dobara",
        movieDescription: "Three childhood friends go on a road trip across Spain before one of them gets married. During the journey, they face their fears and rediscover their friendship. The movie beautifully explores friendship, freedom and enjoying the present.",
        moviePath: "https://m.media-amazon.com/images/M/MV5BOGIzYzg5NzItNDRkYS00NmIzLTk3NzQtZWYwY2VlZDhiYWQ4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        rating: 8.2,
        movieId: "113"
    },
    {
        movieName: "Queen",
        movieDescription: "A young woman travels alone to Paris after her wedding is unexpectedly cancelled. Her journey helps her discover independence, confidence and her own identity. The movie is a beautiful story about self-discovery and personal growth.",
        moviePath: "https://macsendisk.com/wp-content/uploads/2024/08/Queen-Hindi-Movie-DVD.jpg",
        rating: 8.1,
        movieId: "114"
    },
    {
        movieName: "Taare Zameen Par",
        movieDescription: "A young boy struggles with studies because of an undiagnosed learning difficulty. A caring teacher recognizes his talent and helps him regain his confidence. The movie highlights education, creativity, childhood and understanding children.",
        moviePath: "https://m.media-amazon.com/images/M/MV5BZTI0ZGRiMDEtNGNjMS00MGU4LWI3OTktNzcxMDZmZTk3MTljXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        rating: 8.4,
        movieId: "115"
    },
    {
        movieName: "Andhadhun",
        movieDescription: "A talented pianist becomes involved in a mysterious crime after witnessing something unexpected. As the story develops, nothing is exactly what it appears to be. The movie combines dark comedy, suspense and unexpected twists.",
        moviePath: "https://akm-img-a-in.tosshub.com/indiatoday/images/photo_gallery/202409/andhadhun_imdb.jpg?VersionId=ANs0AW4ki.7zbJD_Blv94oGIqHJfRpwK&size=686:*",
        rating: 8.2,
        movieId: "116"
    },
    {
        movieName: "Stree",
        movieDescription: "A mysterious woman appears in a small town and strange incidents begin to happen. A group of friends tries to uncover the truth behind the supernatural mystery. The movie combines horror, comedy and an interesting social message.",
        moviePath: "https://preview.redd.it/watched-stree-2-today-for-the-first-time-and-it-is-a-very-v0-st1r9nzfpbtd1.jpeg?width=640&crop=smart&auto=webp&s=121effd1fad6f729a48801f6e5aed019b19e9356",
        rating: 7.5,
        movieId: "117"
    },

    {
        movieName: "RRR",
        movieDescription: "Two legendary revolutionaries form an unexpected friendship during British rule in India. Their journey is filled with action, emotion, sacrifice and powerful performances. The movie combines historical fiction with spectacular action sequences.",
        moviePath: "https://m.media-amazon.com/images/M/MV5BNWMwODYyMjQtMTczMi00NTQ1LWFkYjItMGJhMWRkY2E3NDAyXkEyXkFqcGc@._V1_.jpg",
        rating: 7.8,
        movieId: "118"
    },
    {
        movieName: "Baahubali 2: The Conclusion",
        movieDescription: "Mahendra Baahubali discovers the truth about his family and kingdom. He must face powerful enemies and fight to reclaim what belongs to his family. The movie is known for its grand visuals, action and emotional storytelling.",
        moviePath: "https://bollyspice.com/wp-content/uploads/2025/04/IMG_6968.webp",
        rating: 8.2,
        movieId: "119"
    },
    {
        movieName: "Pushpa: The Rise",
        movieDescription: "Pushpa rises from a poor labourer to a powerful figure in the red sandalwood smuggling world. His ambition and fearless attitude bring him into conflict with powerful enemies. The movie focuses on power, ambition, struggle and survival.",
        moviePath: "https://m.media-amazon.com/images/S/pv-target-images/8237984c186a0d27e334a5e9785a66d618515e9ef7406f687c3cdddc144e822e.jpg",
        rating: 7.6,
        movieId: "120"
    },
    {
        movieName: "Arjun Reddy",
        movieDescription: "Arjun Reddy is a brilliant but short-tempered medical student who falls deeply in love. His intense relationship changes his life and leads him through emotional struggles. The movie explores love, anger, heartbreak and personal transformation.",
        moviePath: "https://m.media-amazon.com/images/S/pv-target-images/9889f6b6903a6514bc946dfd5cb0995b02d0f2107faffdddc18a081fc3a81a08.jpg",
        rating: 8.1,
        movieId: "121"
    },
    {
        movieName: "Jersey",
        movieDescription: "A former cricketer decides to return to cricket after years away from the sport. He wants to fulfill his dream and make his son proud of him. The movie is an emotional story about ambition, fatherhood and never giving up.",
        moviePath: "https://cinemachaat.com/wp-content/uploads/2020/02/jersey-poster.jpeg?w=400",
        rating: 8.5,
        movieId: "122"
    },
    {
        movieName: "Makkhi",
        movieDescription: "A man is murdered by a jealous businessman and is mysteriously reborn as a housefly. The tiny creature decides to take revenge on the person responsible for his death. The movie combines fantasy, action, comedy and creative storytelling.",
        moviePath: "https://bollyspice.com/wp-content/uploads/2012/10/12oct_Makkhi-moviereview.jpeg",
        rating: 7.7,
        movieId: "123"
    },
    {
        movieName: "Sita Ramam",
        movieDescription: "A soldier receives an anonymous love letter from a woman named Sita. Their beautiful relationship develops through letters, but circumstances separate them. The movie combines romance, mystery, emotion and a compelling historical backdrop.",
        moviePath: "https://m.media-amazon.com/images/S/pv-target-images/b8a0537413009fe68f2cd20f2b7fbbc9caabc35d41c3f56ecbd8b233ec66f7ca.jpg",
        rating: 8.5,
        movieId: "124"
    }
];
//======================= local stroage =============================================
if(!localStorage.getItem('movieArray')){
    localStorage.setItem('movieArray',JSON.stringify(movieArr))
}
// localStorage.setItem('movieArray',JSON.stringify(movieArr))
let movieArrays = JSON.parse(localStorage.getItem('movieArray'));

//====================== to get value in js ======================================================
const showform = document.getElementById('showform');
let showForm = document.getElementById('showForm');
let backDrop = document.getElementById('backDrop');
const closeForm = document.getElementById('closeForm');
const closeMark = document.getElementById('closeMark');
const movieForm = document.getElementById('movieForm');
const movieName = document.getElementById('movieName');
const movieImg = document.getElementById('movieImg');
const movieDesciption = document.getElementById('movieDesciption');
const movieRating = document.getElementById('movieRating');
const addMovie = document.getElementById('addMovie');
const moviesCard = document.getElementById('moviesCard');
const updateMovie = document.getElementById('updateMovie');




//========================== create moviecards =========================================================
function isRating(rating) {
    if (rating >= 4) {
        return 'badge-success'
    } else if (rating >= 3 && rating < 4) {
        return 'badge-warning'
    } else {
        return 'badge-danger'
    }
}
function createMovieCard(arr) {
    let result = '';
    arr.forEach(obj => {
        result += ` <div class="col-md-3 mb-5" >
                    <div class="card movieCardImg" id="${obj.movieId}" >
                        <div class="card-header d-flex justify-content-between">
                            <h4 class="text-white">${obj.movieName}</h4>
                            <span class="text-white badge ${isRating(obj.rating)}">${obj.rating}</span>
                        </div>
                        <div class="card-body movieCard">
                            <figure>
                                <img src= "${obj.moviePath}"
                                    alt="${obj.movieName}">

                                <figcaption class="text-white">
                                    <h5>${obj.movieName}</h5>
                                    <p>${obj.movieDescription}</p>
                                </figcaption>
                            </figure>
                        </div>
                        <div class="card-footer">
                            <div class=" d-flex justify-content-between">
                                <button type="button" class="editBtn" onclick="onEditMovie(this)">Edit</button>
                                <button type="button" class="primaryBtn" onclick="onRemoveMovie(this)">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>`
    })
    moviesCard.innerHTML = result;
}
createMovieCard(movieArrays);

//===============================================================================
function onToggle(eve) {
    showForm.classList.toggle('active');
    backDrop.classList.toggle('active');

}
// function onToggle1(eve){
//    showForm.classList.remove('active');
//    backDrop.classList.remove('active');
// }
// function onToggle2(){
//    showForm.classList.remove('active');
//    backDrop.classList.remove('active');
// }

//============================ Add card ================================================
function onFormSubmit(eve) {
    eve.preventDefault();
    if (movieName.value === '' || movieDesciption.value === '' || movieImg.value === '' || movieRating.value === '') {
        Swal.fire("Please fill all fields");
        return;
    }
    let movieObj = {
        movieName: movieName.value,
        movieDescription: movieDesciption.value,
        moviePath: movieImg.value,
        rating: movieRating.value,
        movieId: Date.now().toString()
    }
    cl(movieObj);
    movieArrays.push(movieObj);
    // cl(movieArrays);
    localStorage.setItem('movieArray', JSON.stringify(movieArrays));
    let div = document.createElement('div');
    div.classList.add('col-md-3', 'mb-5');
    // cl(div);
    div.innerHTML = `<div class="card movieCardImg" id="${movieObj.movieId}">
                        <div class="card-header d-flex justify-content-between">
                            <h4 class="text-white">${movieObj.movieName}</h4>
                            <span class="text-white badge ${isRating(movieObj.rating)}"> ${movieObj.rating}</span>
                        </div>
                        <div class="card-body movieCard">
                            <figure>
                                <img src= "${movieObj.moviePath}"
                                    alt="${movieObj.movieName}">

                                <figcaption class="text-white">
                                    <h5>${movieObj.movieName}</h5>
                                    <p>${movieObj.movieDescription}</p>
                                </figcaption>
                            </figure>
                        </div>
                        <div class="card-footer">
                            <div class=" d-flex justify-content-between">
                                <button type="button" class="editBtn" onclick="onEditMovie(this)">Edit</button>
                                <button type="button" class="primaryBtn" onclick="onRemoveMovie(this)">Remove</button>
                            </div>
                        </div>
                    </div>`
    moviesCard.append(div);
    movieForm.reset();
    Swal.fire({
        title: "Added Movie Successfully!!!",
        icon: "success",
        draggable: true
    });
}
//=========================== Edit Card ==========================================================
function onEditMovie(ele) {
    let editId = ele.closest('.card').id;
    localStorage.setItem('editedId', editId);
    // cl(editId);
    let editMovieObj = movieArrays.find(obj => obj.movieId === editId);
    cl(editMovieObj);
    onToggle();
    movieName.value = editMovieObj.movieName;
    movieImg.value = editMovieObj.moviePath;
    movieDesciption.value = editMovieObj.movieDescription;
    movieRating.value = editMovieObj.rating;
    updateMovie.classList.remove('d-none');
    addMovie.classList.add('d-none');
}
//========================= Update card ===========================================================
function onUpdateMov() {
    let updateId = localStorage.getItem('editedId');
    localStorage.removeItem('editedId');
    cl(updateId);
    if (movieName.value === '' || movieDesciption.value === '' || movieImg.value === '' || movieRating.value === '') {
        Swal.fire("Please fill all fields");
        return;
    }
    let updatedObj = {
        movieName: movieName.value,
        movieDescription: movieDesciption.value,
        moviePath: movieImg.value,
        rating: movieRating.value,
        movieId: updateId
    }
    let findIndex = movieArrays.findIndex(obj => obj.movieId === updateId);
    cl(findIndex);
    movieArrays[findIndex] = updatedObj;
    localStorage.setItem('movieArray', JSON.stringify(movieArrays));
    let div = document.querySelector('.col-md-3');
    // cl(div);
    div.innerHTML = `<div class="card movieCardImg" id="${updatedObj.movieId}">
                        <div class="card-header d-flex justify-content-between">
                            <h4 class="text-white">${updatedObj.movieName}</h4>
                            <span class="text-white badge ${isRating(updatedObj.rating)}"> ${updatedObj.rating}</span>
                        </div>
                        <div class="card-body movieCard">
                            <figure>
                                <img src= "${updatedObj.moviePath}"
                                    alt="${updatedObj.movieName}">

                                <figcaption class="text-white">
                                    <h5>${updatedObj.movieName}</h5>
                                    <p>${updatedObj.movieDescription}</p>
                                </figcaption>
                            </figure>
                        </div>
                        <div class="card-footer">
                            <div class=" d-flex justify-content-between">
                                <button type="button" class="editBtn" onclick="onEditMovie(this)">Edit</button>
                                <button type="button" class="primaryBtn" onclick="onRemoveMovie(this)">Remove</button>
                            </div>
                        </div>
                    </div>`
    updateMovie.classList.add('d-none');
    addMovie.classList.remove('d-none');
    movieForm.reset();

    Swal.fire({
        title: "Movie Card Updated Successfully!!!",
        icon: "success",
        draggable: true
    });

}
//========================= Remove card ===========================================================
function onRemoveMovie(ele) {
    // cl((ele.parentElement.parentElement.parentElement).id);
    let removeId = ele.closest('.card').id;
    cl(removeId);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to Remove this Movie Card!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            let findIndex = movieArrays.findIndex(obj => obj.movieId === removeId);
            cl(findIndex);
            movieArrays.splice(findIndex, 1);
            localStorage.setItem('movieArray', JSON.stringify(movieArrays));
            ele.closest('.col-md-3').remove();

            Swal.fire({
                title: "Deleted!",
                text: "Your Movie card has been deleted.",
                icon: "success"
            });
        }
    });


}
movieForm.addEventListener('submit', onFormSubmit);
showform.addEventListener('click', onToggle);
closeForm.addEventListener('click', onToggle);
closeMark.addEventListener('click', onToggle);
updateMovie.addEventListener('click', onUpdateMov)