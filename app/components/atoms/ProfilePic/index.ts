import { styled } from "styled-components";

interface ProfilePicProps {
  $image: string;
  $size: number;
}

const ProfilePic = styled.div<ProfilePicProps>`
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${(props) => props.theme.secondaryColor600};
  min-width: ${(props) => props.$size}px;
  min-height: ${(props) => props.$size}px;
  border-radius: 100%;
`;

export default ProfilePic;
