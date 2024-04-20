# Plano de Testes de Usabilidade

O teste de usabilidade permite avaliar a qualidade da interface com o usuário da aplicação interativa. O Plano de Testes de Software é gerado a partir da especificação do sistema e consiste em casos de testes que deverão ser executados quando a implementação estiver parcial ou totalmente pronta.

Os planos de teste foram projetados para abordar uma variedade de casos de uso e cenários possíveis, garantindo que as funcionalidades de registro e login se comportem conforme esperado em diferentes situações. Ao seguir esses planos de teste e realizar as verificações recomendadas, os desenvolvedores e testadores podem identificar e corrigir possíveis problemas antes do lançamento do aplicativo, melhorando assim a experiência do usuário e a segurança do sistema.

Abaixo serão apresentados como foram feitos os testes detalhados realizados para garantir a qualidade e confiabilidade das funcionalidades de registro e login do aplicativo. Os testes estão registrados no documento "Registro de Testes de Usabilidade".

# Testes de Registro
## Teste de Registro Básico
### Objetivo: Verificar se um usuário pode se registrar com sucesso fornecendo todas as informações necessárias.
Passos:<br>
1° Acessar a página de registro do aplicativo.<br>
2° Preencher o formulário de registro com informações válidas.<br>
3° Enviar o formulário.<br>

#### Resultado Esperado: O usuário é registrado com sucesso e redirecionado para a página de login.

## Teste de Registro com Campos Obrigatórios Vazios
### Objetivo: Verificar se o aplicativo valida corretamente os campos obrigatórios durante o registro.
Passos:<br>
1° Acessar a página de registro do aplicativo.<br>
2° Deixar um ou mais campos obrigatórios em branco.<br>
3° Tentar enviar o formulário.<br>

#### Resultado Esperado: O aplicativo exibe mensagens de erro indicando que os campos obrigatórios estão em branco e não permite o registro.

## Teste de Registro com E-mail Inválido
### Objetivo: Verificar se o aplicativo valida corretamente o formato do endereço de e-mail durante o registro.
Passos:<br>
1° Acessar a página de registro do aplicativo.<br>
2° Preencher o campo de e-mail com um endereço de e-mail inválido.<br>
3° Tentar enviar o formulário.<br>

#### Resultado Esperado: O aplicativo exibe uma mensagem de erro indicando que o formato do e-mail é inválido e não permite o registro.

## Teste de Registro com Senhas Diferentes
### Objetivo: Verificar se o aplicativo valida corretamente a confirmação de senha durante o registro.
Passos:<br>
1° Acessar a página de registro do aplicativo.<br>
2° Preencher o formulário de registro com senhas diferentes nos campos de senha e confirmação de senha.<br>
3°Tentar enviar o formulário.<br>

#### Resultado Esperado: O aplicativo exibe uma mensagem de erro indicando que as senhas não coincidem e não permite o registro


# Testes de Login
## Teste de Login Básico
### Objetivo: Verificar se um usuário pode fazer login com sucesso fornecendo credenciais válidas.
Passos:<br>
1° Acessar a página de login do aplicativo.<br>
2° Preencher o formulário de login com um nome de usuário/e-mail e senha válidos.<br>
3° Enviar o formulário.<br>

#### Resultado Esperado: O usuário é autenticado com sucesso e redirecionado para a página inicial do aplicativo.

## Teste de Login com Credenciais Inválidas
### Objetivo: Verificar se o aplicativo trata corretamente tentativas de login com credenciais inválidas.
Passos:<br>
1°Acessar a página de login do aplicativo.<br>
2°Preencher o formulário de login com um nome de usuário/e-mail e/ou senha inválidos.<br>
3°Tentar enviar o formulário.<br>

#### Resultado Esperado: O aplicativo exibe uma mensagem de erro indicando que as credenciais são inválidas e não permite o login.
