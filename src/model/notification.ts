/**
 * @author Eduardo Sganderla
 *
 * @since 1.0.0, 14/06/2022
 * @version 1.0.0
 */
export class Notification {

    ativo! : boolean
    classe!: string
    mensagem!: string

    /**
     *
     * @param ativo
     * @param classe
     * @param mensagem
     * @returns
     */
    public new(ativo: boolean, classe: string, mensagem: string): Notification {

        const notification : Notification = new Notification()

        notification.ativo = ativo
        notification.classe = classe
        notification.mensagem = mensagem

        return notification
    }
}