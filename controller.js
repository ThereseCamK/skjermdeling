function leggTilBok() {

    let nybokObjekt = {
        forfatter: model.inputs.nybok.forfatter,
        tittel: model.inputs.nybok.tittel,
        årstall: parseInt(model.inputs.nybok.årstall),
        sjanger: model.inputs.nybok.sjanger,
    }

    model.bøker.push(nybokObjekt)



    bokKnapp()
}

function endreBok(index) {
    model.inputsView = `
    Forfatter: <input type="text" onchange="model.inputs.nybok.forfatter = this.value">
    Tittel: <input type="text" onchange="model.inputs.nybok.tittel = this.value">
    Årstall: <input type="text" onchange="model.inputs.nybok.årstall = this.value">
    Sjanger: <input type="text" onchange="model.inputs.nybok.sjanger = this.value">
    <button onclick="changeThisBook(${index})">lagre</button>`;
    
    // // bokObjekt.forfatter = model.inputs.nybok.forfatter;
    // // console.log(bokObjekt);
    // bokObjekt.tittel = model.inputs.nybok.forfatter

    // let oppdatertBokTittel = model.inputs.nybok.for  fatter
    // model.bøker[bokIndex].tittel.splice(1,oppdatertBokTittel )
    bokKnapp()
}

function changeThisBook(index) {
    let bokObjekt = model.bøker[index];
    let test = {
        forfatter: model.inputs.nybok.forfatter,
        tittel: model.inputs.nybok.tittel,
        årstall: parseInt(model.inputs.nybok.årstall),
        sjanger: model.inputs.nybok.sjanger,
    }
    model.bøker.splice(index, 1, test);
    // model.bøker.insert(index, test); 
    bokKnapp();
}

