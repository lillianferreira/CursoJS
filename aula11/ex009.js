function validar() {
    var txp = document.getElementById('input#txpais')
    var res = document.getElementById('div#res')
    var nacio = Txt(txp.value)
    res.innerHTML = (`Vivendo no ${nacio}`)
    if (nacio == `Brasil`) {
        res.innerHTML += `<p>Você é Brasileiro</p>`
        } else {
            res.innerHTML += `<p>Você é Estrangeiro</p>`
        }
}

