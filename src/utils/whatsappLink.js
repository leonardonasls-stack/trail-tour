import { companyData } from '../data/company';

/**
 * Gera o link direto para o WhatsApp com mensagem contextualizada
 * @param {string} routeName - Nome opcional do roteiro clicado
 * @returns {string} URL formatada do WhatsApp
 */
export function getWhatsAppUrl(routeName = '') {
  let message = `Olá! Encontrei a ${companyData.name} pelo site.`;

  if (routeName) {
    message += ` Gostaria de consultar a disponibilidade e informações sobre o *${routeName}*. Poderia me passar os horários disponíveis e como funciona a reserva?`;
  } else {
    message += ` Gostaria de saber mais sobre os passeios de quadriciclo e verificar os horários disponíveis para agendamento!`;
  }

  return `https://wa.me/${companyData.phoneClean}?text=${encodeURIComponent(message)}`;
}
