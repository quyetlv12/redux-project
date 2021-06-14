import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeId, addNewHobby } from "../../actions/hobby";

import Card from "../../components/card";
const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000);
};

const HomePage = (props) => {
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeID = useSelector(state => state.hobby.activeId)
  const dispatch = useDispatch();
  console.log("Hobby list: ", hobbyList);
  const handleAddHobbyClick = () => {
    const newId = randomNumber();
    const newHobby = {
      id: newId,
      title: `Hobby ${newId}`,
    };
    // Dispatch action to add a new hobby to redux store
    const action = addNewHobby(newHobby);
    dispatch(action);
  };
  const handleClickHobbdy = (hobbdy) =>{
    const action = activeId(hobbdy);
    dispatch(action);
  }

  return (
    <div>
      <button onClick={handleAddHobbyClick}>Random</button>
      <Card list={hobbyList} activeID={activeID} onHobbdyClick={handleClickHobbdy}></Card>
    </div>
  );
};

export default HomePage;
