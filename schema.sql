CREATE DATABASE site_parceiro_db

CREATE TABLE leads (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    telefone VARCHAR(50),
    cargo VARCHAR(255),
    empresa VARCHAR(255),
    cnpj VARCHAR(14) UNIQUE,
    solucao_interesse VARCHAR(255),
    descricao_solucao_desired TEXT
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

CREATE TABLE subcategories (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    categoria_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    valor DECIMAL(10,2),
    imagem_video TEXT,
    requisitos TEXT,
    parametrizacao TEXT,
    funcionalidades TEXT,
    categoria_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
    subcategoria_id INTEGER REFERENCES subcategories(id) ON DELETE CASCADE
);










