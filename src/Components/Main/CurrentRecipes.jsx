import PropTypes from "prop-types";
import CurrentRecipe from "./CurrentRecipe";

const CurrentRecipes = ({cooking}) => {

    let totalTime=0;
    let totalCalories=0;
    cooking.map((cook)=>{
        totalTime += cook.preparing_time;
        totalCalories += cook.calories;
    })
    
    let cnt = 1;
    return (
        <div className="pt-6">
            <h1 className="text-xl font-bold text-center border-b-2 pb-6">Currently Cooking: {cooking.length}</h1> 
            <div className="overflow-x-auto ">
                <table className="table">
                {cooking.length>0 && (<thead>
                    <tr>
                    <td></td>
                    <td>Name</td>
                    <td>Time</td>
                    <td>Calories</td>
                    </tr>
                </thead>)}
                <tbody>
                    {
                        cooking.map((cook, idx) => 
                        <CurrentRecipe key={idx} cnt={cnt++} cook={cook} ></CurrentRecipe>
                            
                        )
                    }
                   { cooking.length>0 && ( <tr>
                        <th></th>
                        <td></td>
                        <td className="font-bold">Total Time = {totalTime} Minutes </td>
                        <td className="font-bold">Total Calories = {totalCalories} Calories</td>
                    </tr>)}
                </tbody>
                </table>
                
            </div> 
        </div>
    );
};
CurrentRecipes.propTypes={
    cooking: PropTypes.array.isRequired
};
export default CurrentRecipes;