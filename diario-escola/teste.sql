/*
  1) Escreva comandos SQL para inserir os dados abaixo conforme o diagrama
  apresentado.
  a) Pablo é Pai de Lucas
  b) Brenda é Mãe de Lucas
  2) Escreva uma consulta SQL para retornar dados únicos conforme tabela abaixo.
  Caso o aluno tenha mais de dois responsáveis, traga apenas os dois primeiros
  responsáveis encontrados na tabela.
*/

  resposta 1:
    
    /*
     eu assumi que o banco de dados já estivesse com seus atributos pre definidos bem como suas chaves primaria e estrangeiras, então só mente escrevi os comandos de consulta     
    */
    
    a.
      INSERT INTO parentesco VALUES (
      (SELECT id FROM responsavel WHERE nome = "Pablo"), 
      (SELECT id FROM aluno WHERE nome = "Lucas"),
      "Pai"
      );
    b.
      INSERT INTO parentesco VALUES (
      (SELECT id FROM responsavel WHERE nome = "Brenda"), 
      (SELECT id FROM aluno WHERE nome = "Lucas"),
      "Mãe"
      );

  resposta 2:

    SELECT  aluno.nome, GROUP_CONCAT(CONCAT(responsavel.nome, '-', parentesco) SEPARATOR '; ') AS parentesco FROM (
      SELECT *,
            ROW_NUMBER() OVER (PARTITION BY idaluno ORDER BY idresponsavel) AS rn
      FROM parentesco
    ) AS subquery
    INNER JOIN responsavel ON responsavel.id = idresponsavel 
    INNER JOIN aluno ON aluno.id = idaluno 
    WHERE rn <= 2
    GROUP BY idaluno;


  BONUS: 

    SELECT aluno.*, parentesco.*, responsavel.* FROM parentesco 
    JOIN aluno ON aluno.id = idaluno
    JOIN responsavel ON responsavel.id = idresponsavel;
    ORDER BY aluno.id;