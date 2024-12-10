import { useState, useEffect } from 'react';
import './pet.css';

const VirtualPet = () => {
  const [hunger, setHunger] = useState(50);
  const [happiness, setHappiness] = useState(50);
  const [health, setHealth] = useState(100);
  const [age, setAge] = useState(0);
  const [isAlive, setIsAlive] = useState(true);

  // Load saved pet state from localStorage when the page loads
  useEffect(() => {
    const savedPetState = JSON.parse(localStorage.getItem('petState'));
    if (savedPetState) {
      setHunger(savedPetState.hunger);
      setHappiness(savedPetState.happiness);
      setHealth(savedPetState.health);
      setAge(savedPetState.age);
      setIsAlive(savedPetState.isAlive);
    }
  }, []);

  // Save pet state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(
      'petState',
      JSON.stringify({ hunger, happiness, health, age, isAlive })
    );
  }, [hunger, happiness, health, age, isAlive]);

  // Simulate time passing by decreasing the pet's attributes over time
  useEffect(() => {
    if (isAlive) {
      const interval = setInterval(() => {
        setHunger((prev) => Math.min(100, prev + 1)); // Hunger increases over time
        setHappiness((prev) => Math.max(0, prev - 1)); // Happiness decreases
        setHealth((prev) => Math.max(0, prev - 0.5)); // Health decreases
        setAge((prev) => prev + 1); // Age increases over time

        // If hunger reaches 100 or health reaches 0, the pet dies
        if (hunger >= 100 || health <= 0) {
          setIsAlive(false);
          clearInterval(interval);
        }
      }, 5000); // Simulate 5 seconds as one "day" in pet time

      return () => clearInterval(interval);
    }
  }, [hunger, happiness, health, isAlive]);

  // Pet interactions (feeding, playing)
  const feedPet = () => {
    if (isAlive) {
      setHunger((prev) => Math.max(0, prev - 30)); // Feeding reduces hunger
    }
  };

  const playWithPet = () => {
    if (isAlive) {
      setHappiness((prev) => Math.min(100, prev + 20)); // Playing increases happiness
    }
  };

  // Display health status based on pet's current health
  const checkHealth = () => {
    if (isAlive) {
      if (health < 30) return 'Your pet is sick!';
      return 'Your pet is healthy!';
    }
    return 'Your pet is no longer with you.';
  };

  return (
    <div className="pet-container">
      <h1>Virtual Pet</h1>
      {isAlive ? (
        <>
          <div className="pet-status">
            <p>Age: {Math.floor(age)} days</p>
            <p>Hunger: {hunger}%</p>
            <p>Happiness: {happiness}%</p>
            <p>Health: {Math.round(health)}%</p>
            <p>Status: {checkHealth()}</p>
          </div>

          <div className="pet-actions">
            <button onClick={feedPet}>Feed Pet</button>
            <button onClick={playWithPet}>Play with Pet</button>
          </div>
        </>
      ) : (
        <p>Sadly, your pet has passed away...</p>
      )}
    </div>
  );
};

export default VirtualPet;
