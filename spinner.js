let currentSearchText = '';

const hendleSearch = () => {
    console.log('hellow')
    document.getElementById('spinner').classList.remove('hidden');
    const searchText = document.getElementById('search-input').value;
    currentSearchText = searchText;
    setTimeout(() => {
        loadAllPhones(false, searchText);
    }, 2000)
}



const loadAllPhones = async (status, searchText) => {
    console.log('wow 2 second after');
    document.getElementById('spinner').classList.add('hidden');

    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText ? searchText : "iphone"}`);

    const data = await response.json();

    displayAllPhones(data.data, status);



}



const displayAllPhones = (data, status) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML = '';

    if (status === true) {
        // console.log(data);
        data.forEach((phone) => {
            console.log(phone)
            const card = document.createElement('div');

            const { brand, phone_name, slug, image } = phone;

            card.innerHTML = `
            <div class="card border-2 p-2 shadow-md ">
            <figure>
                <img
                src="${image}" />
            </figure>
            <div class="card-body">
                <h2 class="text-3xl font-bold">${brand}</h2>
                <p>${phone_name}</p>

                <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
            `;
            phoneContainer.appendChild(card);
        });

    } else {
        data.slice(0, 6).forEach((phone) => {
            console.log(phone)
            const card = document.createElement('div');

            const { brand, phone_name, slug, image } = phone;

            card.innerHTML = `
            <div class="card border-2 p-2 shadow-md ">
            <figure>
                <img
                src="${image}" />
            </figure>
            <div class="card-body">
                <h2 class="text-3xl font-bold">${brand}</h2>
                <p>${phone_name}</p>

                <div class="card-actions justify-end">
                <button class="btn btn-primary">Details</button>
                </div>
            </div>
            </div>
            `;
            phoneContainer.appendChild(card);
        });
    }


}

const showAllButton = () => {
    loadAllPhones(true, currentSearchText);
}