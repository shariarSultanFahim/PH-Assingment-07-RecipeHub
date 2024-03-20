import PropTypes from "prop-types";

const SideBarRecipe = ({recipe,cnt,handlePreparing}) => {
    const {recipe_name,preparing_time,calories} =recipe;
    return (
            <tbody className="">
            <tr>
                <th>{cnt++}</th>
                <td>{recipe_name}</td>
                <td>{preparing_time}<br></br>Minutes</td>
                <td>{calories}<br></br>Calories</td>
                <td><button onClick={()=>handlePreparing(recipe)} className="btn text-sm font-thin py-1 px-2 border bg-[#0BE58A]  rounded-3xl text-black hover:bg-transparent hover:border-emerald-500 hover:text-emerald-500">Preparing</button></td>
            </tr>
        </tbody>      
    );
};
SideBarRecipe.propTypes={
    recipe: PropTypes.object,
    cnt: PropTypes.number,
    handlePreparing: PropTypes.func
};
export default SideBarRecipe;