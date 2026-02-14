           document.addEventListener('DOMContentLoaded', function() {
                const searchInput = document.getElementById('searchInput');
                const boxes = document.querySelectorAll('.container .box');
                const resultDiv = document.getElementById('result');
            
                searchInput.addEventListener('input', function() {
                    const query = searchInput.value.trim().toLowerCase();
                    let found = false;
            
                    boxes.forEach(box => {
                        const title = box.querySelector('h2').textContent.toLowerCase();
                        if(title.includes(query) && query !== "") {
                            box.style.display = 'block';
                            found = true;
                        } else if(query !== "") {
                            box.style.display = 'none';
                        } else {
                            box.style.display = 'block'; // shfaq të gjitha kur input bosh
                        }
                    });
            
                    if(query === "") {
                        resultDiv.textContent = "";
                    } else if(!found) {
                        resultDiv.textContent = `Nuk u gjet asnjë destinacion për "${query}"`;
                    } else {
                        resultDiv.textContent = `Shfaqet rezultati për "${query}"`;
                    }
                });
            });
            function goToBooking(destination, price) {
    localStorage.setItem("destination", destination);
    localStorage.setItem("price", price);
    window.location.href = "bileta.html";
}