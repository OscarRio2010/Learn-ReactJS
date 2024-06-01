import React from "react";
import styled from "styled-components";

// const CardBody = styled.div`
//   display: flex;
//   justify-content: center;
//   justify-items: center;
//   padding-top: 1rem;
// `;
const StyledCard = styled.div`
  position: relative;
`;
const CardImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;
const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;
const CardContent = styled.div`
  position: absolute;
  width: calc(100% - 36px);
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  background-color: white;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
`;
const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
const CardUser = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;
const CardMeta = styled.div`
  display: flex;
  column-gap: 12px;
  align-items: center;
`;
const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  object-fit: cover;
  flex-shrink: 0;
`;
const UserName = styled.span`
  font-weight: 300;
  font-size: 16px;
  color: #333;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: black;
`;
const CardAmount = styled.span`
  font-size: 18px;
  font-weight: bold;
  background: linear-gradient(
    86.88deg,
    #7d6aff 1.38%,
    #ffb86c 64.35%,
    #fc2872 119.91%
  );
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

const Card = () => {
  return (
    // <CardBody>
    <StyledCard>
      <CardImage>
        <CardImg
          src="https://img.thuthuatphanmem.vn/uploads/2018/10/04/hinh-nen-xe-3d-cho-may-tinh_111411842.jpg"
          alt=""
        />
      </CardImage>
      <CardContent>
        <CardTop>
          <CardUser>
            <UserAvatar
              src="https://img.thuthuatphanmem.vn/uploads/2018/10/04/hinh-nen-xe-3d-cho-may-tinh_111411842.jpg"
              alt=""
            />
            <UserName>@zndrson</UserName>
          </CardUser>
          <CardMeta> 
            <img src="/icon-heart.svg" alt="heart" />
            <span>256</span>
          </CardMeta>
        </CardTop>
        <CardFooter>
          <CardTitle>Cosmic Perspective</CardTitle>
          <CardAmount>12,000 PSL</CardAmount>
        </CardFooter>
      </CardContent>
    </StyledCard>
    // </CardBody>
  );
};

export default Card;
