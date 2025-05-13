// src/components/Tarefa.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

function Tarefa({ tarefa, index, onToggle, onRemove }) {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span onClick={() => onToggle(index)} style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}>
        {tarefa.texto}
      </span>
      <button onClick={() => onRemove(index)}>🗑</button>
    </motion.li>
  );
}

export default Tarefa;
