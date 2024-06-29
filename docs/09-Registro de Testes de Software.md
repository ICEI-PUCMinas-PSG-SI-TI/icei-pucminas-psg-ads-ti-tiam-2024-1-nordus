# Registro de Testes de Software

Ao documentar esses testes, nosso objetivo é fornecer uma visão abrangente da robustez e confiabilidade das funcionalidades de registro e login em nosso aplicativo, destacando tanto os pontos fortes quanto as áreas de melhoria identificadas durante o processo de teste.
Todos esses testes estão documentados em nosso Plano de Testes de Software, nessa documentação trarei somente os resultados e a conclusão

A seguir, apresentamos os detalhes de cada teste realizado, incluindo descrição, objetivos, passos executados, resultados esperados e observações adicionais.


## Teste de Registro Básico
### Objetivo: Verificar se um usuário pode se registrar com sucesso fornecendo todas as informações necessárias.
### Resultado Esperado: O usuário é registrado com sucesso e redirecionado para a página de login.

![image](https://github.com/ICEI-PUCMinas-PSG-SI-TI/icei-pucminas-psg-ads-ti-tiam-2024-1-nordus/assets/116689119/fdecb726-f584-4e01-8273-6ae4349e88c8)
![image](https://github.com/ICEI-PUCMinas-PSG-SI-TI/icei-pucminas-psg-ads-ti-tiam-2024-1-nordus/assets/116689119/c5e42e81-5a67-4d79-9c08-e82243cf1175)

### Conclusão
Após a realização dos testes, foi confirmado que o registro de usuário, fornecendo todas as informações necessárias, foi concluído com êxito. O sistema gerou um alerta de confirmação e redirecionou o usuário para a página de login conforme esperado. Esses resultados indicam que a funcionalidade de registro está operando conforme o esperado, proporcionando uma experiência consistente e satisfatória para os usuários.

## Teste de Registro com Campos Obrigatórios Vazios
### Objetivo: Verificar se o aplicativo valida corretamente os campos obrigatórios durante o registro.
### Resultado Esperado: O aplicativo exibe mensagens de erro indicando que os campos obrigatórios estão em branco e não permite o registro.
![image](https://github.com/ICEI-PUCMinas-PSG-SI-TI/icei-pucminas-psg-ads-ti-tiam-2024-1-nordus/assets/116689119/9b86daba-4ca2-4f37-9188-bb62df4c23da)

### Conclusão
Após a realização do teste, foi identificado que o aplicativo não realiza o cadastro do usuário conforme esperado. Porém não foi exibido nenhum alerta ou mensagem de erro para notificar o usuário sobre a falha no registro. Esses resultados indicam um problema na funcionalidade de cadastro, que precisa ser investigado e corrigido para garantir uma experiência consistente e satisfatória para os usuários.

## Teste de Registro com E-mail Inválido
### Objetivo: Verificar se o aplicativo valida corretamente o formato do endereço de e-mail durante o registro.
### Resultado Esperado: O aplicativo exibe uma mensagem de erro indicando que o formato do e-mail é inválido e não permite o registro.
![image](https://github.com/ICEI-PUCMinas-PSG-SI-TI/icei-pucminas-psg-ads-ti-tiam-2024-1-nordus/assets/116689119/d4f8a4bc-7c4e-4548-b042-e0d22eb42599)
![image](https://github.com/ICEI-PUCMinas-PSG-SI-TI/icei-pucminas-psg-ads-ti-tiam-2024-1-nordus/assets/116689119/37001b8c-f7f2-4fd7-aa20-3e1778435e46)

### Conclusão
Após a realização do teste, foi identificado que a funcionalidade para barrar o e-mail com formatação incorreta funciona conforme esperado, e exibe um alerta ao usuário. No entanto, o alerta apresentado é genérico e não fornece informações específicas sobre o motivo pelo qual o usuário não foi cadastrado. Esses resultados indicam uma oportunidade de melhoria na experiência do usuário, sugerindo a inclusão de mensagens mais descritivas que possam orientar o usuário sobre como corrigir o problema e concluir o registro com sucesso.

## Teste de Login Básico
### Objetivo: Verificar se um usuário pode fazer login com sucesso fornecendo credenciais válidas.
### Resultado Esperado: O usuário é autenticado com sucesso e redirecionado para a página inicial do aplicativo.
![image](https://github.com/ICEI-PUCMinas-PSG-SI-TI/icei-pucminas-psg-ads-ti-tiam-2024-1-nordus/assets/116689119/7d67bdca-85f3-4f1b-b6c8-bc6e0c9275f5)
![image](https://github.com/ICEI-PUCMinas-PSG-SI-TI/icei-pucminas-psg-ads-ti-tiam-2024-1-nordus/assets/116689119/195a35ff-a91f-4bb2-b5ae-a42e8c6cc616)


### Conclusão
Após a realização do teste, foi identificado que a funcionalidade de login opera corretamente. O usuário é capaz de fazer o login com sucesso, e após a autenticação, é redirecionado para a tela inicial (home) do aplicativo, conforme esperado. Esses resultados indicam que a funcionalidade de login está operando de acordo com as especificações e oferecendo uma experiência consistente para os usuários.

## Teste de Login com Credenciais Inválidas
### Objetivo: Verificar se o aplicativo trata corretamente tentativas de login com credenciais inválidas.
### Resultado Esperado: O aplicativo exibe uma mensagem de erro indicando que as credenciais são inválidas e não permite o login.
![image](https://github.com/ICEI-PUCMinas-PSG-SI-TI/icei-pucminas-psg-ads-ti-tiam-2024-1-nordus/assets/116689119/3478c543-88d3-44bc-b71a-2dc7f0b8fdcf)
![image](https://github.com/ICEI-PUCMinas-PSG-SI-TI/icei-pucminas-psg-ads-ti-tiam-2024-1-nordus/assets/116689119/2042be1d-0e92-43b5-b156-e7fee5ea13d2)

### Conclusão
Após a realização do teste, ao inserir a senha incorreta, o aplicativo demonstrou um comportamento adequado. O acesso foi bloqueado conforme esperado, e um alerta foi exibido informando que o login ou a senha está incorreta. Esses resultados indicam que a funcionalidade de autenticação está funcionando corretamente ao identificar e responder adequadamente a tentativas de login com informações incorretas.

## Teste de Agendamento em dias anteriores a data atual
### Objetivo: Verificar se o aplicativo permite o agendamento de dias anteriores
### Resultado Esperado: O aplicativo exibir uma mensagem ou não permitir a marcação

![image](https://github.com/ICEI-PUCMinas-PSG-SI-TI/icei-pucminas-psg-ads-ti-tiam-2024-1-nordus/assets/116689119/5842f3f0-c0e0-441e-b7ef-f8f006814ab9)

### Conclusão 
Após realizar o teste, foi concluido que o aplicativo não permitiu agendar uma data retroativa nem horários anteriores ao atual na data presente.


## Teste de Agendamento
### Objetivo: Permitir que o cliente realize um agendamento na barbearia direto pelo aplicativo
### Resultado Esperado: O aplicativo retornar uma mensagem mostrando ou sucesso ou fracasso no agendamento do cliente.

![image](https://github.com/ICEI-PUCMinas-PSG-SI-TI/icei-pucminas-psg-ads-ti-tiam-2024-1-nordus/assets/116689119/e9c8e1cd-a5f1-4453-a6a5-3570e05b3c42)
![image](https://github.com/ICEI-PUCMinas-PSG-SI-TI/icei-pucminas-psg-ads-ti-tiam-2024-1-nordus/assets/116689119/c8d0681b-6706-4cc5-9974-91af15328b53)



### Conclusão
Após seguir todos os passos propostos no teste, o cliente conseguiu com sucesso marcar seu agendamento e também foi possivel visualizar o agendamento que ele fez pelo acesso do barbeiro que foi selecionado


