let cep = document.querySelector('#cep');
let message = document.querySelector('#erroMessage');
let rua = document.querySelector('#rua');
let complemento = document.querySelector('#complemento');
let bairro = document.querySelector('#bairro');
let cidade = document.querySelector('#cidade');
let estado = document.querySelector('#uf');

// focusout -- identifica quando o usuario clicar fora do campo de input
// async -- é uma função existente no javascript para executar funções multiplas (executar varias funções ao mesmo tempo)
cep, addEventListener('focusout', async () => {
    // sabemos que a api pode retornar sucesso e erro
    // try -- para tratar informações quando retornadas com sucesso
    // catch -- para tratar informações quando retornadas com erro
    // test -- faz a validação do valor de um campo com o regex 
    // throw -- para lançar mensagens de erro se necessario
    // await -- aguarda a consulta ser feita na API para continuar com o  fluxo do código 
    // json -- para transformar um objeto em JSON 
    // stringfy -- para transformar um JSON em OBJETO
    try{ 
        const onlyNumbers = /^[0-9]+$/;
        const cepValid = /^[0-9]{8}/;

        if(!onlyNumbers.test(cep.value) || !cepValid.test(cep.value))
            {
                console.log("CEP Invalido");
                throw {cep_error: 'CEP Invalido'}
            }

            let retornoAPI = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)

            console.log(retornoAPI);

            if(!retornoAPI.ok){
                throw await retornoAPI.json();
            }

            let response =  await retornoAPI.json();


            console.log(response);
            cep.value = response.cep;
            rua.value = response.logradouro;
            complemento.value = response.complemento;
            bairro.value = response.bairro;
            cidade.value = response.localidade;
            estado.value = response.uf;

    }catch (error){
        if (error?.cep_error) {
            message.textContent = error.cep_error;
            setTimeout(() => {
                message.textContent = '';
            }, 5000);
        }
        console.log(error);
    }
})