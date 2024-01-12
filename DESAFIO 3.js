class meuHeroi{//classe e método construtor
    constructor(nomeHeroi, idadeHeroi, tipoHeroi){
        this.nomeHeroi = nomeHeroi
        this.idadeHeroi = idadeHeroi
        this.tipoHeroi = tipoHeroi
    }
    atacar(){//método de ação
        let ataque;
        switch(this.tipoHeroi){
            case "Mago":
                ataque = "magia"
                break;
            case "Guerreiro":
                ataque = "espada"
                break;
            case "Monge":
                ataque = "artes marciais"
                break;
            case "Ninja":
                ataque = "shuriken"
                break;

        }
        console.log(`O ${this.tipoHeroi} atacou usando ${ataque}`)
    }

    
}
let heroiGuerreiro = new meuHeroi("Alberto", "28 anos", "Guerreiro")
let heroiMago = new meuHeroi("Merlim", "1000 anos", "Mago")
let heroiMonge = new meuHeroi("Monja Coen", "60 anos", "Monge")
let heroiNinja = new meuHeroi("Naruto", "35 anos", "Ninja")

heroiGuerreiro.atacar()
heroiMago.atacar()
heroiMonge.atacar()
heroiNinja.atacar()