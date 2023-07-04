const input1 = document.getElementById("birinciInput");
const input2 = document.getElementById("ikinciInput");
const input3 = document.getElementById("ucuncuInput");
const input4 = document.getElementById("dorduncuInput");

const h5Kismi = document.getElementById("h5degeri");

const rightDiv1 = document.getElementById("birinciKisim");
const rightDiv2 = document.getElementById("ikinciKisim");
const rightDiv3= document.getElementById("ucuncuKisim");






// const dropdown = document.querySelector('.dropdown');
// const selectedText = dropdown.options[dropdown.selectedIndex].text;


input1.addEventListener("input", function() {
  h5Kismi.innerHTML = input1.value;
});

input2.addEventListener("input", function() {
  rightDiv1.innerHTML = input2.value;
});
// input3.addEventListener("input", function() {
//   rightDiv2.innerHTML = input3.value;
// });
input4.addEventListener("input", function() {
  rightDiv3.innerHTML = input4.value;
});


                                // BURADA SEÇİLENLER AYNI ANDA MI YAZSIN YOKSA DİREKT YAZSIN MI
                                // ÖYLEYSE EĞER inputu yeniden açmalıyız.input3.lı olanı....



const dropdown = document.querySelector('.dropdown');
const selectedValue = dropdown.options[dropdown.selectedIndex].value;

dropdown.addEventListener("change", function() {
  let selectedText = dropdown.options[dropdown.selectedIndex].text;
  rightDiv2.innerHTML = input3.value + " " + selectedText;
});




                                  //OLUŞTURMA KISMI

                                  
                                  
const kaydetButton = document.getElementById("functionRunner"); // "Kaydet" düğmesine ulaş

kaydetButton.addEventListener("click", createCard); // "Kaydet" düğmesine tıklandığında "createCard" fonksiyonunu çağır

                                  function createCard() {
                                    // get input value
                                    const inputFonksiyon1 = document.getElementById("birinciInput").value;
                                    const inputFonksiyon2 = document.getElementById("ikinciInput").value;
                                    const inputFonksiyon3 = document.getElementById("ucuncuInput").value;
                                    const inputFonksiyon4 = document.getElementById("dorduncuInput").value;
                                    
                                    // create new card
                                    var cardContainer = document.getElementById("cardContainer");
                                    var newCard = document.createElement("div");
                                    newCard.classList.add("card");
                                    newCard.style.width = "18rem";
                                    newCard.innerHTML = `
                                    <img src="https://picsum.photos/200" alt="">
                                      <div class="card-body">
                                        <h5 class="card-title">${inputFonksiyon1}</h5>
                                      </div>
                                      <ul class="list-group list-group-flush">
                                        <li class="list-group-item">${inputFonksiyon2}</li>
                                        <li class="list-group-item">${inputFonksiyon3}</li>
                                        <li class="list-group-item">${inputFonksiyon4}</li>
                                      </ul>
                                      <div class="card-body">
                                        <a href="#" class="card-link">Sepete Ekle</a>
                                        <a href="#" class="card-link">Sipariş Ver</a>
                                      </div>
                                    `;
                                    
                                    // add new card to container
                                    cardContainer.appendChild(newCard);
                                    
                                    // clear input value
                                    document.getElementsByClassName("birinciBosluk").value = "";
                                    document.getElementsByClassName("ikinciBosluk").value = "";
                                    document.getElementsByClassName("ucuncuBosluk").value = "";
                                    document.getElementsByClassName("dorduncuBosluk").value = "";
                                  }
                            
                            
                                 









