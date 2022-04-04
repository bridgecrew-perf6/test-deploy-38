import * as React from "react";
import { useNavigate } from "react-router";
import InputTextReguler from "../components/inputs/InputTextReguler";

function AddCategory() {
    const navigate = useNavigate();
    const [category, setCategory] = React.useState();

    function goBack(idx) {
        navigate(idx);
    }

    function handleChange(e) {
        setCategory(e.target.value);
    }

    function handleSubmit(e) {
        alert("A name was submitted: " + category);
        e.preventDefault();
    }

    return (
        <div className="relative w-full h-screen">
            <header className="top-header">
                <button onClick={goBack(-1)}>back</button>
                <h1>Add Category</h1>
            </header>
            <main>
                <form className="px-5 mt-6" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <InputTextReguler
                            name="category"
                            label="Category Name"
                            value={category}
                            inputAction={handleChange}
                        />
                    </div>

                    <input type="submit" value="Submit" />
                </form>
            </main>
        </div>
    );
}

export default AddCategory;
