"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
exports.person = {
    id: 'SERIAL PRIMARY KEY',
    full_name: 'VARCHAR(255) NOT NULL',
    dob: 'DATE NOT NULL',
    photo: 'VARCHAR(255)',
    partner_id: 'INT',
    children: 'INT[]',
};
