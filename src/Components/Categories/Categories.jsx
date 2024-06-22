import "./Categories.css";
import foodTable from "../../../public/data";

const Categories = (props) => {

    const categories = [...new Set(foodTable.map(item => item.category))];

    const setCategory = (category) => {
        if(category === props.activeCategory) {
            props.setActiveCategory("") 
        } else {
            props.setActiveCategory(category)
        }
    };

    return (
        <section className="category-container">
            <div className="category-btn">
            {categories.map(category => (
                    <button onClick={() => setCategory(category)} className={`cate-btn ${category === props.activeCategory ? "cate-active" : ""}`} key={category}>{category}</button>
                ))}
            </div>
        </section>
    );
}
 
export default Categories;