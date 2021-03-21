const allData = async () => {
let response = await fetch("https://jsonplaceholder.typicode.com/posts/ ")
let data = await response.json()
let result = JSON.stringify(data.filter(user => user.userId == 1))
document.write(result.replaceAll(',', ', <br/>'))
}

allData()