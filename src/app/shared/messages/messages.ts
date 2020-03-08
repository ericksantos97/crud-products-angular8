export class Messages {

  public static readonly OPERACAO_SUCESSO = 'Operação processada com sucesso!';
  public static readonly OPERACAO_ERRO = 'Ocorreu um erro ao processar a sua operação!';
  public static readonly FALHA_SERVIDOR = 'Falha na comunicação com o servidor. Por favor, tente mais tarde.';
  public static readonly ERRO_EXCLUSAO = 'Erro ao tentar excluir o registro. Por favor, tente mais tarde.';
  public static readonly CONFIRMAR_EXCLUSAO = 'Deseja realmente excluir este item ?';
  public static readonly USUARIO_NAO_ENCONTRADO = 'Usuário e Senha não encontrados, tente novamente!';
  public static readonly PREENCHER_CAMPOS_OBRIGATORIOS = 'Por favor preencha todos os campos do formulário.';
  public static ERRO_GENERICO_CARREGAMENTO: (value: string) => string = (value: string) => `Erro ao carregar a lista de ${value}`;

}
