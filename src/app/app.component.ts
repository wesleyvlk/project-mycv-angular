import { Component } from '@angular/core';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements Extracted {
  [x: string]: any;
  name = 'WESLEY MUNIZ DA SILVA BRITO';
  goal = 'Desenvolvedor Back-End Java';
  email = 'wesleymuniz20@gmail.com';
  phone = '+55 (11) 94813-5991';
  local = '06784-380, Taboão da Serra - SP';
  linkedin = 'linkedin.com/wesleybritovlk';
  github = 'github.com/wesleyvlk';
  aboutMe =
    'Desde que comecei a estudar programação, tenho dedicado muito tempo a aprender e me aperfeiçoar. Há 8 meses tenho realizado cursos, desafios e projetos simples, aplicando meus conhecimentos e acredito estar pronto para contribuir positivamente com a equipe de desenvolvedores. Sou uma pessoa sempre disposta a aprender e me desenvolver constantemente. Iniciei minha jornada de estudo com o Santander Bootcamp Fullstack Developer da DIO e, desde então, tenho aprendido muito, especialmente a linguagem Java.';
  skills = [
    'Java',
    ' Spring',
    ' SQL',
    ' Linux',
    ' HTML',
    ' CSS',
    ' JavaScript',
    ' TypeScript',
    ' Angular',
    ' Git e GitHub',
  ];
  objective = 'Em busca da primeira oportunidade como estagiário';
  objGoal = 'Back-End Java';
  education = [
    {
      institution: 'Universidade Cruzeiro do Sul (2022-2024)',
      course:
        'Análise e Desenvolvimento de Sistemas (Cursando segundo semestre)',
    },
  ];
  languages = ['Inglês - Básico'];
  projects = [
    {
      name1: 'stdyProject-joKenPOO-java',
      repository1: 'github.com/wesleyvlk/stdyProject-joKenPOO-java',
      description1:
        'Desenvolvi o projeto "JoKenPOO" em Java durante meus estudos. O projeto consiste em um jogo da velha simples, com a implementação de classes e objetos em POO. o jogo foi implementado seguindo os princípios de Orientação a Objetos. Foi um ótimo exercício para aplicar meus conhecimentos em Java e POO.',
      name2: 'stdyProject-contaTerminal-java',
      repository2: 'github.com/wesleyvlk/stdyProject-contaTerminal-java',
      description2:
        'Desenvolvi o projeto "ContaTerminal" durante meus estudos de Java. Ele consiste em um sistema de gerenciamento de contas bancárias, no qual é possível realizar registros, depósitos, e a consulta desses registros em lista. Utilizei conceitos de orientação a objetos para implementar a lógica do sistema. Além disso, utilizei a biblioteca Scanner para permitir a entrada de dados pelo usuário através do terminal. Este projeto me permitiu aplicar os conhecimentos adquiridos em aula e desenvolver habilidades na linguagem Java.',
      name3: 'learn-java-basic',
      repository3: 'github.com/wesleyvlk/learn-java-basic',
      description3:
        'O projeto "learn-java-basic" foi desenvolvido durante meus estudos iniciais em Java. Consiste em exercícios e projetos simples, como a criação de uma calculadora básica e uma simulação de tv e controle. A finalidade é fixar os conceitos de orientação a objetos, instancias e coleções, familiarizar-me com as principais bibliotecas e frameworks utilizados na linguagem.',
      name4: 'learn-spring-basic',
      repository4: 'github.com/wesleyvlk/learn-spring-basic',
      description4:
        'O projeto "learn-spring-basic" foi desenvolvido para adquirir conhecimentos básicos sobre o framework Spring e aprender a integrá-lo com o Java, utilizando também as dependências Maven. O projeto consiste em criar uma aplicação simples com um controller de rota para gerenciamento de requisições.',
      name5: 'project-mycv-angular',
      repository5: 'github.com/wesleyvlk/project-mycv-angular',
      description5:
        'Desenvolvi o projeto "mycv" como um desafio pessoal para desenvolver meu próprio currículo utilizando Angular como framework. O objetivo do projeto foi aplicar os conhecimentos adquiridos em Angular e também desenvolver minhas habilidades em programação. O projeto foi desenvolvido de forma inteiramente responsiva, permitindo a visualização correta em diferentes dispositivos.',
    },
  ];
  courses = [
    {
      course1: 'Santander Bootcamp Fullstack Developer (Cursando) - DIO',
      course2: 'Introdução a Java - Santander Coders (Setembro/2022) - Ada',
      course3: 'Formação Java Developer (Cursando) - DIO Pro',
      course4: 'Spring Framework Experience (Cursando) - DIO',
      course5: 'DIO Campus Expert - Turma Quatro (Setembro/2022) - DIO',
    },
  ];
}

interface Extracted {
  name: string;
  goal: string;
  linkedin: string;
  github: string;
  email: string;
  phone: string;
  local: string;
  aboutMe: string;
  education: {}[];
  skills: string[];
  languages: string[];
  courses: {
    course1: string;
    course2: string;
    course3: string;
    course4: string;
    course5: string;
  }[];
  projects: {
    name1: string;
    repository1: string;
    description1: string;
    name2: string;
    repository2: string;
    description2: string;
    name3: string;
    repository3: string;
    description3: string;
  }[];
}
