import React, { useState } from "react";
import SnackOrBoozeApi from "./Api";
import "./AddToMenu.css";

const AddToMenu = () => {

    //add snacks

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [recipe, setRecipe] = useState('');
    const [serve, setServe] = useState('');


    const [snackMsg, setSnackMsg] = useState('');
   
    //handle change for snacks
    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleDesChange = (e) => {
        setDescription(e.target.value);
    }

    const handleRecipeChange = (e) => {
        setRecipe(e.target.value);
    }

    const handleServeChange = (e) => {
        setServe(e.target.value);
    }

    let id = name.toLowerCase();
    
    //new snack object for post
    let newSnack = {
        id,
        name,
        description,
        recipe,
        serve
    }

    // sends post using static method for snacks
    const handleSnackSubmit = (e) => {
        e.preventDefault();
        async function addSnack() {
            let addSnack = await SnackOrBoozeApi.addSnacks(newSnack);
        }
        addSnack()
        // will add snack, for some reason have to refresh page after navigating
        //to snack menu for it to show up. Need to save time so will document here
        //fix as a further study

        setSnackMsg('Snack Added!');  
    }


    //Add Drinks

    const [drinkName, setDrinkName] = useState('');
    const [drinkDescription, setDrinkDescription] = useState('');
    const [drinkRecipe, setDrinkRecipe] = useState('');
    const [drinkServe, setDrinkServe] = useState('');


    const [drinkMsg, setDrinkMsg] = useState('');

    //handle change for drinks
    const handleDrNameChange = (e) => {
        setDrinkName(e.target.value);
    }

    const handleDrDesChange = (e) => {
        setDrinkDescription(e.target.value);
    }

    const handleDrRecipeChange = (e) => {
        setDrinkRecipe(e.target.value);
    }

    const handleDrServeChange = (e) => {
        setDrinkServe(e.target.value);
    }

    let drinkId = drinkName.toLowerCase();


    let newDrink = {
        description: drinkDescription,
        id: drinkId,
        name: drinkName,
        recipe: drinkRecipe,
        serve: drinkServe
    }

    // sends post using static method for snacks
    const handleDrinkSubmit = (e) => {
        e.preventDefault();
        async function addDrink() {
            let addDrink = await SnackOrBoozeApi.addDrinks(newDrink);
        }
        addDrink()
        // will add drink, for some reason have to refresh page after navigating
        //to drink menu for it to show up. Need to save time so will document here
        //fix as a further study

        setDrinkMsg('Drink Added!');
        
    }

    return <div>
        <h1>Add Snack</h1>
        <form onSubmit={handleSnackSubmit}>
           
            <label className="lbl" for="addName">Enter Name</label>
            <input 
            id="addName" 
            value={name}
            onChange={handleNameChange}
            placeholder="Enter Name"
            />

            <label className="lbl" for="addDes">Enter Description</label>

            <input 
            id="addDes" 
            value={description}
            onChange={handleDesChange}
            placeholder="Enter Description"
            />

            <label className="lbl" for="addRecipe">Enter Recipe</label>

            <input 
            id="addRecipe" 
            value={recipe}
            onChange={handleRecipeChange}
            placeholder="Enter Recipe"
            />

            <label className="lbl" for="addServe">Enter Serve</label>

            <input 
            id="addServe" 
            value={serve}
            onChange={handleServeChange}
            placeholder="Enter Serve"
            />

            <button>Add Snack</button>
        </form>

        <h3 className="msg">{snackMsg}</h3>


        <h1>Add Drink</h1>
        <form onSubmit={handleDrinkSubmit}>
           
            <label className="lbl" for="addDrName">Enter Name</label>
            <input 
            id="addDrName" 
            value={drinkName}
            onChange={handleDrNameChange}
            placeholder="Enter Name"
            />

            <label className="lbl" for="addDrDes">Enter Description</label>

            <input 
            id="addDrDes" 
            value={drinkDescription}
            onChange={handleDrDesChange}
            placeholder="Enter Description"
            />

            <label className="lbl" for="addDrRecipe">Enter Recipe</label>

            <input 
            id="addDrRecipe" 
            value={drinkRecipe}
            onChange={handleDrRecipeChange}
            placeholder="Enter Recipe"
            />

            <label className="lbl" for="addDrServe">Enter Serve</label>

            <input 
            id="addDrServe" 
            value={drinkServe}
            onChange={handleDrServeChange}
            placeholder="Enter Serve"
            />

            <button>Add Drink</button>
        </form>

        <h3 className="msg">{drinkMsg}</h3>
        
    </div>
}

export default AddToMenu;