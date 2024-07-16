
const mySelf = {

    name:'chama',
    age:'unknown',
    country:'SL',
    school:'rc',
    favSweet:'choco',
    favFood:'kottu',
    favFruit:['avacado', 'dragon fruit'],

    changeFavFood: function(newFood){
        this.favFood = newFood;
        console.log("Updated the Favourite food.")
    }
    
}

export default mySelf;