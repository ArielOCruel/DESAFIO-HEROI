calcularResultados(120, 18)

function calcularResultados(v,d){
    console.log("O placar de vitórias é "+ v, "e as derrotas " + d)

    saldoRankeadas = v - d
    
    console.log("O saldo do jogador é:" + saldoRankeadas)

    if (saldoRankeadas < 10){
        nivel = "Rank do jogador é: Ferro"
    }
    else if(saldoRankeadas >= 11 && saldoRankeadas <= 20){
        nivel = "Rank do jogador é: Bronze"

    }else if(saldoRankeadas >= 21 && saldoRankeadas <= 50){
        nivel = "Rank do jogador é: Prata"  

    }else if(saldoRankeadas >= 51 && saldoRankeadas <= 80){
        nivel = "Rank do jogador é: Ouro"
    
    }else if(saldoRankeadas >= 81 && saldoRankeadas <= 90){
        nivel = "Rank do jogador é: Diamante"
    
    }else if(saldoRankeadas >= 91 && saldoRankeadas <= 100 ){
        nivel = "Rank do jogador é: Lendário"    
    }
    else{
        nivel = "RANK DO JOGADOR: IMORTAL"
        
    }

    console.log("O saldo do jogador é "+ saldoRankeadas, "e o nível do " + nivel)




}