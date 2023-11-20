import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import GradingIcon from '@mui/icons-material/Grading';
import styled from "styled-components";
import {Wrapper, Title, TaskInput,
        TaskInputField, TaskList, DivInputImage,
        AddButton, ButtonContainer, TabButton,
        CheckboxContainer, Checkbox, ButtonsContainer,
        Task, TabButtonClear, EditField, Text }  from './styles';

 export default function TodoList() {
    const [tasks, setTasks] = useState([
      {text: 'Take out the garbage', completed: true},
      {text: 'Go to the supermarket', completed: false},
      {text: 'Read a book', completed: false}
    ]);
    const [newTask, setNewTask] = useState('');
    const [editValue, setEditValue] = useState('');
    const [editIndex, setEditIndex] = useState(-1);
    const [activeTab, setActiveTab] = useState("All");

    const handleAddTask = () => {
      if(newTask.trim() !== '') {
        const updateList = [...tasks, {text: newTask, completed: false}];
        setTasks(updateList);
        setNewTask('');
      }
    }

    const handleDelete = (index) => {
      const updateList = [...tasks];
      const removeItem = updateList.filter((_, i) => i !== index)
      setTasks(removeItem);
    }

    const handleUpdate = (index, task) => {
      setEditValue(task.text);
      setEditIndex(index);
    }

    const handleSave = (index) => {
      const updateList = [...tasks];
      updateList[index].text = editValue;
      setTasks(updateList);
      setEditValue('');
      setEditIndex(-1);
    }
  
    const handleDragEnd = (result) => {
      if (!result.destination) return;
      const items = Array.from(tasks);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      setTasks(items);
    };
  
    const handleCheckBox = (index) => {
      const updateTasks = [...tasks];
      updateTasks[index].completed = !updateTasks[index].completed;
      setTasks(updateTasks);
     }

     const handleClearAll = () => {
      setTasks([]);
     }

     const filterTasks = () => {
      switch(activeTab) {
        case "Pending":
          return tasks.filter((task) => task.completed === false);
        case "Completed": 
          return tasks.filter((task) => task.completed === true);
        default:
          return tasks;
      }
     }

     const IconButton = styled(Button)`
     background-color: transparent;
     border: none;
     margin-left: 8px;
     & .MuiButtonBase-root {
      min-width: 40px;
     }
     `;

    return (
      <DragDropContext onDragEnd={handleDragEnd}>
      <Wrapper>
        <Title>Get things done!</Title>
        <TaskInput>
          <DivInputImage> 
            <GradingIcon color="action"/>
          </DivInputImage>
          <TaskInputField
            type="text"
            placeholder="Add a new task"
            onChange={(e) => setNewTask(e.target.value)}
            />
          <AddButton onClick={handleAddTask}>+</AddButton>
          </TaskInput>
        <ButtonsContainer>
          <TabButton
            onClick={() => setActiveTab("All")}
            active={activeTab === "All"}
            >All</TabButton >
          <TabButton
            onClick={() => setActiveTab("Pending")}
            active={activeTab === "Pending"}
            >Pending</TabButton >
          <TabButton  
          onClick={() => setActiveTab("Completed")}
          active={activeTab === "Completed"}
          >Completed</TabButton >
          <TabButtonClear onClick={handleClearAll}>Clear All</TabButtonClear>
        </ButtonsContainer>
        <Droppable droppableId="tasks">
          {(provided) => (
            <TaskList  ref={provided.innerRef} {...provided.droppableProps}>
              {filterTasks().map((task, index) => (
                <Draggable key={index} draggableId={`task-${index}`} index={index}>
                  {(provided) => (
                  <>
                    {editIndex === index ? (
                      <> 
                      <EditField 
                      value={editValue}
                      type="text"
                      placeholder="edit"
                      onChange={(e) => setEditValue(e.target.value)}
                      />
                      <IconButton onClick={() => handleSave(index)}><CheckIcon /></IconButton>
                      </>
                    ) : (
                  <>
                  <Task
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <CheckboxContainer>
                      <Checkbox 
                      checked={task.completed}
                      onChange={()=> handleCheckBox(index)}
                      type="checkbox"
                      />
                      <Text>
                         {task.text}
                       </Text>
                    </CheckboxContainer>

                     <ButtonContainer>
                      <IconButton onClick={() => handleDelete(index)}><DeleteIcon/></IconButton>
                      <IconButton onClick={() => handleUpdate(index, task)}><EditIcon/></IconButton>
                    </ButtonContainer>
                 
                  </Task>
                  </>
                    )}
                  </>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </TaskList >
          )}
        </Droppable>
      </Wrapper>
      </DragDropContext>
    );
  };

