
const typing = document.getElementById("typing")
const card = document.getElementById("card-frame")
const cardbase = document.getElementById("cardbase")

const cardname = document.getElementById("cardname")
const cardhealth = document.getElementById("cardhealth")
const cardart = document.getElementById("cardart")

const cardnameval = document.getElementById("cardnameval")
const cardhealthval = document.getElementById("cardhealthval")

const offsetx = document.getElementById("offsetx")
const offsety = document.getElementById("offsety")
const scale = document.getElementById("scale")
const artcheck = document.getElementById("artcheckbox")

let cardartSettings = [
    offsetx.value,
    offsety.value,
    scale.value,
]

cardart.style.backgroundPosition = `${cardartSettings[0]}px ${cardartSettings[1]}px`
cardbase.style.backgroundPosition = `${cardartSettings[0]}px ${cardartSettings[1]}px`
cardart.style.backgroundSize = `${cardartSettings[2]}%`
cardbase.style.backgroundSize = `${cardartSettings[2]}%`
document.getElementById("credit").innerText = document.getElementById("artcreditval").value
document.getElementById("flavour").innerText = document.getElementById("flavourval").value

for (let i = 0 ; i < 3;i++) {

    document.getElementById(`skill${i+1}setting`).style.display = "none"

}

cardname.innerText = cardnameval.value
cardhealth.innerText = cardhealthval.value + " HP"

if (artcheck.checked == true) {

    card.classList.add("full")

    card.classList.remove("corp")
    card.classList.remove("swge")
    card.classList.remove("soda")
    card.classList.remove("absr")
    card.classList.remove("minm")

    document.getElementById("typing-icon1").src = `assets/${typing.value}.png`
    document.getElementById("typing-icon2").src = `assets/${typing.value}.png`

} else {

    setCardType()

}

if (document.querySelector('input[type="file"]').files && document.querySelector('input[type="file"]').files[0]) {
    cardart.onload = () => {
        URL.revokeObjectURL(cardart.src);  // no longer needed, free memory
    }

    cardart.style.backgroundImage = `url('${URL.createObjectURL(document.querySelector('input[type="file"]').files[0])}')`; // set src to blob url
    cardbase.style.backgroundImage = `url('${URL.createObjectURL(document.querySelector('input[type="file"]').files[0])}')`
}


//typing.value = "corp"

function loadSkill(ind) {

    for (let i = 0 ; i < 3;i++) {

        document.getElementById(`skill${i+1}setting`).style.display = "none"
    
    }

    document.getElementById(`skill${ind}setting`).style.display = ""

}

loadSkill(1)

function saveImage() { // firee lifesaver

    domtoimage.toPng(document.getElementById("card")).then(imageData => {

        console.log(imageData)

        const downloadLink = document.createElement('a');
        downloadLink.href = imageData;
        downloadLink.download = 'mustardtcgcard.png' // file name here
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    })

}

function setCardType() {

    card.classList.remove("corp")
    card.classList.remove("swge")
    card.classList.remove("soda")
    card.classList.remove("absr")
    card.classList.remove("minm")

    card.classList.add(typing.value)

    document.getElementById("typing-icon1").src = `assets/${typing.value}.png`
    document.getElementById("typing-icon2").src = `assets/${typing.value}.png`

    let corpres = 0
    let swgeres = 0
    let sodares = 0
    let absrres = 0
    let minmres = 0

    if (typing.value == "corp") {
        corpres = 0
        swgeres = 10
        sodares = 5
        absrres = 10
        minmres = 5
    }
    if (typing.value == "swge") {
        corpres = 10
        swgeres = 0
        sodares = 5
        absrres = 5
        minmres = 10
    }
    if (typing.value == "soda") {
        corpres = 10
        swgeres = 10
        sodares = 0
        absrres = 5
        minmres = 5
    }
    if (typing.value == "absr") {
        corpres = 10
        swgeres = 5
        sodares = 5
        absrres = 0
        minmres = 10
    }
    if (typing.value == "minm") {
        corpres = 5
        swgeres = 10
        sodares = 5
        absrres = 10
        minmres = 0
    }

    document.getElementById("w1").innerText = `+${corpres}`
    document.getElementById("w2").innerText = `+${swgeres}`
    document.getElementById("w3").innerText = `+${sodares}`
    document.getElementById("w4").innerText = `+${absrres}`
    document.getElementById("w5").innerText = `+${minmres}`


    if (artcheck.checked == true) {

        card.classList.remove("corp")
        card.classList.remove("swge")
        card.classList.remove("soda")
        card.classList.remove("absr")
        card.classList.remove("minm")

    }

}

setCardType()

for (let i = 0 ; i < 3;i++) {

    let skillnum = i+1
    let skillthing = document.getElementById(`skill${skillnum}setting`)
    

        document.getElementById(`skill${skillnum}`).querySelector(".title").innerText = document.getElementById(`skill${skillnum}name`).value


        document.getElementById(`skill${skillnum}`).querySelector(".dmg").innerText = document.getElementById(`skill${skillnum}dmg`).value

        if (document.getElementById(`skill${skillnum}name`).value.length <= 0) {

            document.getElementById(`skill${skillnum}`).style.display = "none"

        } else {

            document.getElementById(`skill${skillnum}`).style.display = ""

        }


        document.getElementById(`skill${skillnum}`).querySelector(".revs").innerHTML = `<img src="assets/bullet.png" alt="">x` + document.getElementById(`skill${skillnum}revs`).value


        document.getElementById(`skill${skillnum}`).querySelector(".desc").innerText = document.getElementById(`skill${skillnum}desc`).value


}

window.addEventListener('load', function() {

    for (let i = 0 ; i < 3;i++) {

        let skillnum = i+1
        let skillthing = document.getElementById(`skill${skillnum}setting`)
        
        document.getElementById(`skill${skillnum}name`).addEventListener('input', function() {

            document.getElementById(`skill${skillnum}`).querySelector(".title").innerText = document.getElementById(`skill${skillnum}name`).value

            if (document.getElementById(`skill${skillnum}name`).value.length <= 0) {

                document.getElementById(`skill${skillnum}`).style.display = "none"

            } else {

                document.getElementById(`skill${skillnum}`).style.display = ""

            }

        })
        document.getElementById(`skill${skillnum}dmg`).addEventListener('input', function() {

            document.getElementById(`skill${skillnum}`).querySelector(".dmg").innerText = document.getElementById(`skill${skillnum}dmg`).value

        })
        document.getElementById(`skill${skillnum}revs`).addEventListener('input', function() {

            document.getElementById(`skill${skillnum}`).querySelector(".revs").innerHTML = `<img src="assets/bullet.png" alt="">x` + document.getElementById(`skill${skillnum}revs`).value

        })
        document.getElementById(`skill${skillnum}desc`).addEventListener('input', function() {

            document.getElementById(`skill${skillnum}`).querySelector(".desc").innerText = document.getElementById(`skill${skillnum}desc`).value

        })
    
    }

    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            cardart.onload = () => {
                URL.revokeObjectURL(cardart.src);  // no longer needed, free memory
            }
  
            cardart.style.backgroundImage = `url('${URL.createObjectURL(this.files[0])}')`; // set src to blob url
            cardbase.style.backgroundImage = `url('${URL.createObjectURL(this.files[0])}')`
        }
    });

    document.getElementById("artcreditval").addEventListener('input', function() {

        document.getElementById("credit").innerText = document.getElementById("artcreditval").value

    })

    document.getElementById("flavourval").addEventListener('input', function() {

        document.getElementById("flavour").innerText = document.getElementById("flavourval").value

    })

    artcheck.addEventListener('change', function() {

        card.classList.remove("full")

        if (artcheck.checked == true) {

            card.classList.add("full")

            card.classList.remove("corp")
            card.classList.remove("swge")
            card.classList.remove("soda")
            card.classList.remove("absr")
            card.classList.remove("minm")

        } else {

            card.classList.add(typing.value)

        }

    })

    typing.addEventListener('input', function() {
        setCardType()
    })

    cardnameval.addEventListener('input', function() {
        cardname.innerText = cardnameval.value
    })
    cardhealthval.addEventListener('input', function() {
        cardhealth.innerText = cardhealthval.value + " HP"
    })

    offsetx.addEventListener('input', function() {
        cardartSettings[0] = offsetx.value
        cardart.style.backgroundPosition = `${cardartSettings[0]}px ${cardartSettings[1]}px`
        cardbase.style.backgroundPosition = `${cardartSettings[0]}px ${cardartSettings[1]}px`
    })
    offsety.addEventListener('input', function() {
        cardartSettings[1] = offsety.value
        cardart.style.backgroundPosition = `${cardartSettings[0]}px ${cardartSettings[1]}px`
        cardbase.style.backgroundPosition = `${cardartSettings[0]}px ${cardartSettings[1]}px`
    })
    scale.addEventListener('input', function() {
        cardartSettings[2] = scale.value
        cardart.style.backgroundSize = `${cardartSettings[2]}%`
        cardbase.style.backgroundSize = `${cardartSettings[2]}%`
    })


});