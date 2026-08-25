const publicFiles = document.getElementById("public-files")
const usersContainer = document.getElementById("usersContainer")

console.log(publicFiles)
console.log(usersContainer)


const usersData =[
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

console.log(usersData)

usersData.forEach(function(user){
const userElement = document.createElement("div")
userElement.textContent = user.name;
 usersContainer.appendChild(userElement);
user.files.forEach(function(file){
const fileElement = document.createElement("p")
fileElement.textContent = file.name
usersContainer.appendChild(fileElement)
})

});

