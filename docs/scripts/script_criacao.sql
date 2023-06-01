CREATE TABLE "unidade" (
  "id_unidade" varchar PRIMARY KEY,
  "descricao_unidade" varchar NOT NULL,
  "carga_horaria_unidade" integer NOT NULL,
  "ordem" int NOT NULL,
  "fk_curso" varchar
);

CREATE TABLE "curso" (
  "id_curso" varchar PRIMARY KEY,
  "descricao_curso" varchar NOT NULL,
  "carga_horaria_curso" integer NOT NULL,
  "modalidade" varchar NOT NULL,
  "eixo" varchar
);

CREATE TABLE "turma" (
  "id_turma" varchar PRIMARY KEY,
  "data_inicio" date NOT NULL,
  "data_fim" date,
  "horas_aula_dia" integer NOT NULL DEFAULT 10,
  "fk_curso" varchar
);

CREATE TABLE "aula" (
  "id_aula" varchar PRIMARY KEY,
  "data_aula" date NOT NULL DEFAULT 'now()',
  "status_aula" varchar NOT NULL DEFAULT 'pendente',
  "fk_turma" varchar,
  "fk_unidade" varchar
);

ALTER TABLE "turma" ADD FOREIGN KEY ("fk_curso") REFERENCES "curso" ("id_curso");

ALTER TABLE "unidade" ADD FOREIGN KEY ("fk_curso") REFERENCES "curso" ("id_curso");

ALTER TABLE "aula" ADD FOREIGN KEY ("fk_turma") REFERENCES "turma" ("id_turma");

ALTER TABLE "aula" ADD FOREIGN KEY ("fk_unidade") REFERENCES "unidade" ("id_unidade");
