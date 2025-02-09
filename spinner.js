const hendleSearch = () => {
    console.log('hellow');
    document.getElementById('spinner').classList.remove('hidden');
    setTimeout(() => {
        loadAllPhones();
    }, 3000);
}

const loadAllPhones = async (status) => {
    console.log('wow 3 second after!');

    document.getElementById('spinner').classList.add('hidden');


    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();


    if (status) {
        displayPhohes(data.data);
    }
    else {
        displayPhohes(data.data.slice(0, 6));
    }

}

const displayPhohes = (phones) => {
    // console.log(phones);
    const displayHalfData = document.getElementById('display-half-data');
    

    for (const phone of phones) {

    const card = document.createElement('div');
    card.innerHTML = `
    <div class="card border-2">
    <figure class="h-[400px] px-2 py-2 shadow-lg">
        <img class="h-full w-full " src="${phone.image}" />
    </figure>
    <div class="card-body">
        <h2 class="text-3xl">${phone.brand}</h2>
        <p class="font-bold">${phone.phone_name}</p>
    </div>
    </div>
    
    `;
        displayHalfData.appendChild(card);
        card.value= '';
    }




}

const showAllPhones = () => {
    loadAllPhones(true);

}


