export const person = {
  id: 'SERIAL PRIMARY KEY',
  fullName: 'VARCHAR(255) NOT NULL',
  dob: 'DATE NOT NULL',
  photo: 'VARCHAR(255)',
  isAlive: 'BOOLEAN NOT NULL',
  generationNo: 'INT NOT NULL',
};

export const child = {
  id: 'SERIAL PRIMARY KEY',
  parentId: 'INT REFERENCES person(id)',
  childId: 'INT REFERENCES person(id)',
};
