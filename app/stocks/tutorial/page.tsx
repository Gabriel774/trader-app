"use client";
import {
  CardContainer,
  Card,
  CardIconWrapper,
  TutorialContainer,
  WelcomeMessage,
  WelcomeMessageIconContainer,
  CardIconContainer,
  CardText,
} from "../layoutStyles";
import { BsGraphUpArrow } from "react-icons/bs";
import { cards } from "./cards";

export default function Tutorial() {
  return (
    <TutorialContainer>
      <WelcomeMessage>
        <WelcomeMessageIconContainer>
          <BsGraphUpArrow fontSize={35} />
        </WelcomeMessageIconContainer>
        Seja bem-vindo ao Trader
      </WelcomeMessage>

      <CardContainer>
        {cards.map((card, i) => (
          <Card key={i} $delay={i + 5}>
            <CardIconContainer>
              <CardIconWrapper>
                <card.icon fontSize={35} />
              </CardIconWrapper>
            </CardIconContainer>
            <CardText>{card.text}</CardText>
          </Card>
        ))}
      </CardContainer>
    </TutorialContainer>
  );
}
