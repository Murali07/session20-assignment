document.body.innerHTML = `<h1>TV Shows</h1>
<section class ="shows-list">    
</section>`;

const url = "https://api.tvmaze.com/shows";

async function getAllShows() {
  const data = await fetch(
    url,

    { method: "GET" }
  ); // Return a Promise

  const shows = await data.json();

  const showContainer = document.querySelector(".shows-list");

  shows.forEach((show) => {
    showContainer.innerHTML += `
        <div class = "container">
            <div class ="show-container">
                <div>
                    <img class ="image" src = "${show.image.medium}" alt = "${show.id}" />  
                </div>                   
                <div class ="specs">
                    <p class ="show-name"> ${show.name}</p>
                    <p class ="show-network"> ${show.network.name}</p>
                    <p class ="show-summary"> ${show.summary}</p>                  
                </div>   
                
            </div> 
        </div>   
        `;
  });

  console.log(shows);
}
getAllShows();
