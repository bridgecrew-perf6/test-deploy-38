import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { db } from "../firebase-conf";
import { collection, getDoc, addDoc, onSnapshot } from "@firebase/firestore";

function HomePage() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    // const addUser = async () => {
    //     await addDoc(collection(db, "users"), { name: "user", age: 29 });
    // };
    // addUser();

    // onMounted
    useEffect(
        () =>
            onSnapshot(collection(db, "users"), (users) => {
                console.log(users.docs.map((doc) => doc.data()));
            }),
        []
    );

    return (
        <div className="relative w-full h-screen">
            <header>
                <h1>Todo App</h1>
            </header>
            <main>
                <div>
                    <button
                        className="absolute bottom-5 right-5 bg-blue-500 text-white p-2 rounded hover:bg-blue-800 m-2"
                        onClick={() => navigate("/add-category")}
                    >
                        ++
                    </button>
                </div>
                <div className="flex space-x-4">
                    <div className="bg-orange-400">01</div>
                    <div className="bg-orange-400">02</div>
                    <div className="bg-orange-400">03</div>
                </div>
            </main>
        </div>
    );
}

export default HomePage;
