import PropTypes from "prop-types";
import SideBarRecipe from "./SideBarRecipe";
import CurrentRecipes from "./CurrentRecipes";

const RecipeSidebar = ({recipes,handlePreparing,cooking}) => {
    let cnt=1;
    return (
        <div className="w-[98%] p-6 border border-stone-200 rounded-3xl shadow-2xl md:w-2/5">
            <h1 className="text-xl font-bold text-center border-b-2 pb-6">Want to cook: {recipes.length}</h1>
            <div className="overflow-x-auto ">
                <table className="table">
                {recipes.length>0 && (<thead>
                    <tr>
                    <td></td>
                    <td>Name</td>
                    <td>Time</td>
                    <td>Calories</td>
                    </tr>
                </thead>)}
                    {
                        recipes.map((recipe, idx) => 
                        <SideBarRecipe key={idx} cnt={cnt++} recipe={recipe} handlePreparing={handlePreparing}></SideBarRecipe>
                            
                        )
                    }
                </table>
                
            </div>

            <CurrentRecipes cooking={cooking}></CurrentRecipes>
        </div> 
    );
};
RecipeSidebar.propTypes={
    recipes: PropTypes.array.isRequired,
    duplicateRecipe: PropTypes.number,
    handlePreparing: PropTypes.func,
    cooking: PropTypes.array.isRequired
};
export default RecipeSidebar;