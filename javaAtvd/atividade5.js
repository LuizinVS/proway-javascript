function att5(){
    dsNome = window.prompt("Digite seu nome");
    dsIdade = window.prompt("Informe sua idade");
    dsCity = window.prompt("Digite sua cidade");
    if((dsCity == '' || dsCity == null) && (dsIdade == '' || dsIdade == null)){
        document.getElementById('pa').innerHTML = `Seu nome é ${dsNome}.`;
    }else if((dsNome == '' || dsNome == null) && (dsCity == '' || dsCity == null)){
        document.getElementById('pa').innerHTML = `Sua idade é ${dsIdade}.`;
    }else if((dsNome == '' || dsNome == null) && (dsIdade == '' || dsIdade == null)){
        document.getElementById('pa').innerHTML = `Você mora em ${dsCity}`;
    }else if (dsNome == '' || dsNome == null){
        document.getElementById('pa').innerHTML = `Sua idade é ${dsIdade} e você mora em ${dsCity}.`;
    }else if(dsCity == '' || dsCity == null){
        document.getElementById('pa').innerHTML = `Seu nome é ${dsNome} e sua idade é ${dsIdade}.`;
    }else if(dsIdade == '' || dsIdade == null){
        document.getElementById('pa').innerHTML = `seu nome é ${dsNome} e você mora em ${dsCity}.`;
    }else{
        document.getElementById('pa').innerHTML = `Seu nome é ${dsNome}, sua idade é ${dsIdade} e você mora em ${dsCity}.`;
    }

}