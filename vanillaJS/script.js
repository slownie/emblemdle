function fetchData() {
    fetch("./characters.json")
        .then((res) => {
            if(!res.ok) {
                throw new Error(`HTTP ERROR Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => 
            console.log(data))
        .catch((error) =>
            console.error("Unable to fetch data: ", error));
}

window.onload = () => {
    fetchData();
}