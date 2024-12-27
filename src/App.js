import './App.css';
import { closestCorners, defaultKeyboardCoordinateGetter, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor } from '@dnd-kit/core';
import { useState } from 'react';
import Column from './compo/Column';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import Input from './compo/Input/Input';

function App() {
  const [tasks, setTask] = useState([
    {id: 1, title: "Add task to Home 1"},
    {id: 2, title: "Add task to Home 2"},
    {id: 3, title: "Add task to Home 3"},
  ]);

const addTask = (title) => {
setTask((tasks) => [...tasks, {id: tasks.lenght + 1, title}]);
};

  const getTaskPos = id => tasks.findIndex(task => task.id === id)

const handleDragEnd = event => {
  const {active, over} = event
  if (active.id === over.id) return;
  setTask(tasks => {
    const originalPos = getTaskPos(active.id)
    const nowPow = getTaskPos(over.id)

      return arrayMove(tasks, originalPos, nowPow);
  })
};

  // const aasensors = useSensor(
  //   useSensor(PointerSensor),
  //   useSensor(TouchSensor),
  // );

  return (
    <div className="App">
      <h1>My Task</h1>
      <DndContext  onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <Input onSubmit={addTask}/>
        <Column tasks={tasks}/>
      </DndContext>
    </div>
  );
}

export default App;
