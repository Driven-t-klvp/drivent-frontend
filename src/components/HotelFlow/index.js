import { Typography } from '@material-ui/core';
import useTicket from '../../hooks/api/useTicket';
import { NoContentCard } from '../NoContentCard';
import HotelContainer from './HotelButton/HotelContainer';

export default function HotelFlow() {
  const { ticket } = useTicket();

  return (
    <>
      <Typography variant="h4">Escolha de quarto e hotel</Typography>
      {ticket?.status !== 'PAID' ? (
        <NoContentCard text={'Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem'} />
      ) : !ticket.TicketType?.includesHotel ? (
        <NoContentCard
          text={'Sua modalidade de ingresso não inclui hospedagem Prossiga para a escolha de atividades'}
        />
      ) : (
        <>
          <HotelContainer />
        </>
      )}
    </>
  );
}
