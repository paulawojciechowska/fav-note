import React from 'react';
import styled from 'styled-components';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import ButtonIcon from './ButtonIcon';

export default {
  title: 'ButtonIcon',
  component: ButtonIcon,
  decorators: [
    (Story) => (
      <YellowBackground>
        <Story />
      </YellowBackground>
    ),
  ],
};
const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.note};
`;
export const ButtonIcon1 = () => <ButtonIcon icon={bulbIcon} />;
export const ButtonIcon2 = () => <ButtonIcon icon={logoutIcon} />;
export const ButtonIcon3 = () => <ButtonIcon icon={penIcon} />;
export const ButtonIcon4 = () => <ButtonIcon icon={plusIcon} />;
export const ButtonIcon5 = () => <ButtonIcon icon={twitterIcon} />;
export const ButtonIcon5Active = () => <ButtonIcon icon={twitterIcon} active />;
