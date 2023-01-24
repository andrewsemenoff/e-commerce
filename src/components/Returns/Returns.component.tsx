import { Paragraph, Title, Wrapper } from "./Returns.sytle";

const contentText = `Orders can be returned within 30 days of purchase. We will gladly accept unworn, unwashed, unaltered or unused merchandise in sellable condition for a full refund within this time frame. Please allow 2 to 4 business days to process the return once it’s received. You will be notified via email once the refund has been issued!\n\n
We are not responsible for any lost returns. We recommend a shipping method with a proof of delivery or tracking number.\n\n
We currently do not generate return labels for international shipments, customers will be responsible for return shipments & cost.\n\n
We do not offer exchanges or price-matching at this time. Please follow the return policy steps for the items you wish to exchange and visit us to submit a new order for your new items.\n\n
All bodysuits, underwear, or items marked "Final Sale" are considered final sale and cannot be returned once purchased. Aloyoga.com does not accept returns for third-party retailers.`;

const paragraphs = contentText.split('\n\n');

const Returns = () => {
  return (
    <Wrapper>
      <Title>RETURNS & EXCHANGES</Title>
      {paragraphs.map((p, index)=><Paragraph key={index}>{p}</Paragraph>)}
    </Wrapper>
  );
};

export default Returns;
