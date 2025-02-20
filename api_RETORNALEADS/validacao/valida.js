export async function validaUsuario({ nome, email, telefone }) {
    const errors = {};

    const nomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ'’\s]{2,}$/;
    if (!nomeRegex.test(nome)) {
        errors.nome = 'Nome inválido. Use apenas letras e no mínimo 2 caracteres.';
    }

    const emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        errors.email = 'E-mail inválido.';
    }

    const telefoneRegex = /^\+?\d{0,2}\s?(\(?\d{2}\)?\s?)?\d{4,5}-?\d{4}$/;
    if (!telefoneRegex.test(telefone)) {
        errors.telefone = 'Telefone inválido.';
    }

    return Object.keys(errors).length ? errors : null;
}
