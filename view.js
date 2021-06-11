let AppDiv = document.getElementById('app');
show();
function show(){
// let html = `<button onclick="${model.navBar[0].funkjsonsNavn}()"> ${model.navBar[0].knappNavn}</button> 
// <button onclick="${model.navBar[1].funkjsonsNavn}()"> ${model.navBar[1].knappNavn}</button>`;
let html =``;
for(let i = 0; i < model.navBar.length; i++){
     html +=`<button onclick="${model.navBar[i].funkjsonsNavn}()"> ${model.navBar[i].knappNavn}</button>`;
}
// html += `${bokKnapp()}`


AppDiv.innerHTML = html;
}

function bokKnapp(){
  
    let html = `<button> Tilbake til oversikt </button>`;;
    for(let i = 0; i < model.bøker.length; i ++){
        html += `
            <div onclick="endreBok(${i})" style="border: solid 2px black;">
            <h3>tittel: ${model.bøker[i].tittel}</h3>
            <h6>forfatter: ${model.bøker[i].forfatter}</h6>
            <tt>årstall: ${model.bøker[i].årstall}</tt>
            <h4>sjanger: ${model.bøker[i].sjanger}</h4>
            </div>
        `
    };
    html += `${model.inputsView}<br><br><button onclick="leggTilBokInputs()">Legg til ny Bok</button>`

    AppDiv.innerHTML = html;

    // AppDiv.innerHTML = `
    
    // her kan jeg skrive hva som helst .. lage  tabell. Er du her ? 
    // `;s
}
function leggTilBokInputs(){
    model.inputsView = `
    Tittel: <input type="text" oninput="model.inputs.nybok.tittel = this.value" value="${model.inputs.nybok.tittel}" > </input>
    forfatter: <input type="text" oninput="model.inputs.nybok.forfatter = this.value" value="${model.inputs.nybok.forfatter}"> </input>
    årstall: <input type="number" oninput="model.inputs.nybok.årstall = this.value" value="${model.inputs.nybok.årstall}"> </input>
    sjanger: <input type="text" oninput="model.inputs.nybok.sjanger = this.value" value="${model.inputs.nybok.sjanger}"> </input><br>
    <button onclick="leggTilBok()"> submit </button>
    `
    bokKnapp()
}



function musikkKnapp(){
    let html = `<button onclick="show()"> Tilbake til oversikt </button>`;;
    for(let i = 0; i < model.musikk.length; i ++){
        html += `
            <div style="border: solid 2px black;">
            <h3>tittel: ${model.musikk[i].tittel}</h3>
            <h6>artist: ${model.musikk[i].artist}</h6>
            <tt>album: ${model.musikk[i].album}</tt>
            <h4>årstall: ${model.musikk[i].årstall}</h4>
            <h2>sanger: ${model.musikk[i].sanger}</h2>
            </div>
        `
    };
    AppDiv.innerHTML = html;

}