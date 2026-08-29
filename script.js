const publicFiles = document.getElementById("public-files")
const usersContainer = document.getElementById("usersContainer")
// const fileDetails = document.getElementById("file-details")
const fileModal = document.getElementById("file-modal")
const closeModal = document.getElementById("close-modal")
const modalFileDetails = document.getElementById("modal-file-details")

console.log(publicFiles)
console.log(usersContainer)

const publicFilesData = [
    {
        id: 1,
        name: "company-rules.pdf",
        type: "pdf",
        size: "2 MB"
    },
    {
        id: 2,
        name: "company-logo.png",
        type: "image",
        size: "500 KB"
    },
    {
        id: 3,
        name: "welcome.docx",
        type: "document",
        size: "1 MB"
    }
];
const usersContainerData =[
    {
        id: 1,
        name : "ali",
         files: [
            { id: 1, name: "report.pdf", type: "pdf", size: "2 MB" },
            { id: 2, name: "image.png", type: "image", size: "500 KB" }
        ]
    },
    {
        id: 2,
        name: "Sara",
        files: [
            { id: 3, name: "project.docx", type: "document", size: "1 MB" }
        ]
    },
    {
        id: 3,
        name: "Reza",
        files: [
            { id: 4, name: "presentation.pptx", type: "presentation", size: "4 MB" }
        ]
    },
    {
        id: 4,
        name: "Mina",
        files: [
            { id: 5, name: "design.fig", type: "design", size: "6 MB" }
        ]
    },
    {
        id: 5,
        name: "Amir",
        files: [
            { id: 6, name: "data.xlsx", type: "spreadsheet", size: "3 MB" }
        ]
    },
    {
        id: 6,
        name: "Neda",
        files: [
            { id: 7, name: "contract.pdf", type: "pdf", size: "2 MB" }
        ]
    },
    {
        id: 7,
        name: "Hassan",
        files: [
            { id: 8, name: "photo.jpg", type: "image", size: "1.5 MB" }
        ]
    },
    {
        id: 8,
        name: "Maryam",
        files: [
            { id: 9, name: "notes.txt", type: "text", size: "20 KB" }
        ]
    }
];

console.log(usersContainerData)
console.log(publicFilesData)

publicFilesData.forEach(function(file){
const fileElement = document.createElement("div")
fileElement.className= "file-card"
fileElement.innerHTML= ` 
        <div class="file-name">${file.name}</div>
        <div class="file-info">${file.type} - ${file.size}</div>
        `;
        fileElement.addEventListener("click", function(){
            modalFileDetails.innerHTML= `
            <h3> File Details </h3>
            <p> Name: ${file.name} </p>
            <p> Type: ${file.type} </p>
            <p> Size: ${file.size} </p>
            `

            fileModal.style.display = "block"
        })  
publicFiles.appendChild(fileElement)
})


usersContainerData.forEach(function(user){
const userElement = document.createElement("div")
userElement.className = "user-card"
userElement.textContent = user.name;

 usersContainer.appendChild(userElement);

user.files.forEach(function(file){
const fileElement = document.createElement("div")

    fileElement.className = "file-card"

    fileElement.innerHTML = `
        <div class="file-name">${file.name}</div>
        <div class="file-info">${file.type} - ${file.size}</div>
    `

    fileElement.addEventListener("click", function(){
    modalFileDetails.innerHTML = `
        <p>Name: ${file.name}</p>
        <p>Type: ${file.type}</p>
        <p>Size: ${file.size}</p>
    `

    fileModal.style.display = "block"
})
userElement.appendChild(fileElement)
})

});

closeModal.addEventListener("click", function(){
    fileModal.style.display = "none"
})

fileModal.addEventListener("click", function(event){

    if(event.target === fileModal){
        fileModal.style.display = "none"}
    })

 
