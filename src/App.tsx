import React, {useState} from 'react';
import {UsersComponent} from "./components/userComponents/UsersComponent";
import {TodosComponent} from "./components/todoComponents/TodosComponent";

const App = () => {
    const [userId, setUserId] = useState<number>(0)
const chooseUser = (id: number)=>{
setUserId(id)
}
    return (
        <div>
            <UsersComponent chooseUser={chooseUser}/>
            { !!userId && <TodosComponent  userId={userId}/>}

        </div>
    );
};

export default App;
