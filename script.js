const main = document.getElementById("reports")

function readReport(){
        fetch('http://localhost:3000/all')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
   
                
                return response.json();
            })
            .then((data)=>{           
                if(data.length > 0){
                   
                    main.classList.add("main1")
                    main.innerHTML = ""
                    data.forEach((report)=>{
                        let div = document.createElement("div")
                        let divin
                        for(let key in report){
                            let text1 = document.createTextNode(key+":")
                            let text2 = document.createTextNode(report[key])
                            let p1 = document.createElement("p")
                            let p2 = document.createElement("p")
                            p1.appendChild(text1)
                            p2.appendChild(text2)
                            divin = document.createElement("div")
                            divin.appendChild(p1)
                            divin.appendChild(p2)
                            divin.classList.add("divin")
                            div.appendChild(divin)
                        }
                       
                        div.classList.add("report")
                        main.appendChild(div)
                    })
                }
            })
}
readReport()




