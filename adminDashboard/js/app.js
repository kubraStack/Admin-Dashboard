const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu_btn");
const closeBtn = document.querySelector("#close_btn");
const themeToggler = document.querySelector(".theme-toggler");




menuBtn.addEventListener("click", ()=> {
    sideMenu.style.display = "block";
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

// change theme 
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('i:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('i:nth-child(2)').classList.toggle('active');
})


// fill orders in table 
document.addEventListener("DOMContentLoaded", function(){
    const table = document.querySelector('table');
    if (table) {
        const tbody = document.createElement('tbody');
        Orders.forEach(order => {
            const tr = document.createElement('tr');
            const trContent = `
                <td>${order.productName}</td>
                <td>${order.productNumber}</td>
                <td>${order.productStatus}</td>
                <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning':'primary'}">${order.shipping}</td>
                <td class="primary">Details</td>            
            `;

            tr.innerHTML = trContent;
            tbody.appendChild(tr);
        });

        if (table.querySelector('tbody')) {
            table.querySelector('tbody').innerHTML = '';
        }

        //Yeni tbody'yi ekle
        table.appendChild(tbody);
    } else {
        console.error("Table body not found.");
    }

});


