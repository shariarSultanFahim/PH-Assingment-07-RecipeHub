import PropTypes from "prop-types";


const CurrentRecipe = ({cook,cnt}) => {
    const {recipe_name,preparing_time,calories} =cook;
    return (
        <tr>
            <th>{cnt++}</th>
            <td>{recipe_name}</td>
            <td>{preparing_time}<br></br>Minutes</td>
            <td>{calories}<br></br>Calories</td>
       </tr>
       
    );
};


CurrentRecipe.propTypes={
    cook: PropTypes.object,
    cnt: PropTypes.number,
};
export default CurrentRecipe;