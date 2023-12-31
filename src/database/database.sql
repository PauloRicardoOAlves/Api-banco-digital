create database estudo;

create table usuarios (
  id serial primary key,
  nome text,
  email text unique,
  senha text);
  
  create table categorias (
    id serial primary key,
    descricao text
    );

    