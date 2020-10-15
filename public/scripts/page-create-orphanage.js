//Create map
const map = L.map("mapid").setView([-16.0085155,-48.0709786], 14); //lat, long, zoom

//Create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Create Icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg", //icone
    iconSize: [58, 68],                         //tamanho [larg Alt]
    iconAnchor: [29, 68] //onde ficará o icone                     
   
})

let marker; //let pode ser alterado

 //Create and add Marker

 map.on('click', (event) => {
     const lat = event.latlng.lat;
     const lng = event.latlng.lng;

     document.querySelector('[name=lat]').value = lat;
     document.querySelector('[name=lng]').value = lng;

     //remove icon que nao está sendo usado
     marker && map.removeLayer(marker) //Existe um marker? então remove

     //add icon layer
     marker = L.marker([lat, lng], {icon})
     .addTo(map)
 })

// //Create and marker
// L.marker([-16.0085155,-48.0709786], { icon })
// .addTo(map)
// .bindPopup(popup)


//Adicionar o campo de Fotos

function addPhotoField (){
    // Pegar o container de fotos #images
    const container = document.querySelector('#images')

    // Pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    // Realizar o clone da ultima imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)

    //Verifica se foi digitado algo no campo

   const input = newFieldContainer.children[0] //o children 0 é o input. o 1 é o span

   if(input.value ==""){
       return //aqui ele já para se for vazio
   }

    //Limpar o campo antes de adicionar al container de imagens
   input.value = "" 

    // Adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')
    if(fieldsContainer.length < 2 ){

        //limpar o valor do campo
        span.parentNode.children[0].value = ""

        return
    }

    //Deletar o campo
    span.parentNode.remove()
}

// Selecionar  Sim ou Não do Form

function toggleSelect(event) {
    
    //Retirar a class .active dos botões
    document.querySelectorAll('.button-select button')
    .forEach((button) => {
        button.classList.remove('active')
    })

    //colocar a class .active no botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    //Atualizar o input hidden com o valor selecionado
    const input = document.querySelector(' [name="open_on_weekends"]')
    
    // Verificar se Sim ou Nao
    input.value = button.dataset.value //o dataset é o data-VALUE, O VALUE pode ser qualquer nome 



}
