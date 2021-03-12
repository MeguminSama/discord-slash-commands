export enum InteractionResponseType {
  /** ACK a ping */
  PONG = 1,
  /** Respond immediately */
  CHANNEL_MESSAGE_WITH_SOURCE = 4,
  /** ACK interaction and respond later */
  DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE = 5,
}
