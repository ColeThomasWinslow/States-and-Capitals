import React, { useState } from "react";
import { SenateMembers } from "../Congress/Senate";
import styled from "styled-components";
import { Twitter } from "../Utils/twitter";
const States = SenateMembers.map((state) => state);

function Senate() {
  const [Search, setSearch] = useState("");
  const [SenatorsShow, setSenatorsShow] = useState(false);
  const [CapitalShow, setCapitalShow] = useState(false);
  const [PopSizeShow, setPopSizeShow] = useState(false);
  return (
    <Conatiner>
      <Check>
        <label className="control control-checkbox">Senators</label>
        <input
          type="checkbox"
          onChange={() => setSenatorsShow(!SenatorsShow)}
        />
        <label>Population Size</label>
        <input type="checkbox" onChange={() => setPopSizeShow(!PopSizeShow)} />
        <label>Capitals</label>
        <input type="checkbox" onChange={() => setCapitalShow(!CapitalShow)} />
      </Check>
      <SearchBox>
        <input
          placeholder="Search By State"
          onChange={(event) => setSearch(event.target.value)}
        />
      </SearchBox>
      {States[0].states
        .filter((value) => {
          if (Search === "") {
            return value;
          } else if (value.name.toLowerCase().includes(Search.toLowerCase())) {
            return value;
          }
        })
        .map((state) => {
          return (
            <Card key={state.S2Name}>
              {CapitalShow && <Capital>{state.capital}</Capital>}
              <Title>{state.name}</Title>
              <Wrap>
                <img src={state.flag} alt={state.name} />
              </Wrap>
              {SenatorsShow && (
                <SmCont>
                  {state.S1Party === "I" ? (
                    <Senator className="Independent">{state.S1Name}</Senator>
                  ) : (
                    <Senator
                      className={
                        state.S1Party === "D" ? "Democract" : "Republican"
                      }
                    >
                      {state.S1Name}
                    </Senator>
                  )}
                  {/* <ProfileWrap>
                    <img src={state.S1Photo} alt={state.S1Name} />
                  </ProfileWrap> */}
                  <a
                    target="blank"
                    href={`https://twitter.com/${Twitter(state.S1Name)}`}
                  >
                    @{Twitter(state.S1Name)}
                  </a>
                  {state.S2Party === "I" ? (
                    <Senator className="Independent">{state.S2Name}</Senator>
                  ) : (
                    <Senator
                      className={
                        state.S2Party === "D" ? "Democract" : "Republican"
                      }
                    >
                      {state.S2Name}
                    </Senator>
                  )}
                  {/* <ProfileWrap>
                    <img src={state.S2Photo} alt={state.S2Name} />
                  </ProfileWrap> */}
                  <a
                    target="blank"
                    href={`https://twitter.com/${Twitter(state.S2Name)}`}
                  >
                    @{Twitter(state.S2Name)}
                  </a>{" "}
                </SmCont>
              )}
              {PopSizeShow && <Population>{state.popSize}</Population>}
            </Card>
          );
        })}
    </Conatiner>
  );
}

export default Senate;
const Population = styled.p`
  background: white;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  padding-top: 5px;
  padding-bottom: 5px;
`;
const Capital = styled.p`
  background: rgba(33, 179, 33, 0.364);
  color: white;
  font-size: 14px;
  border-bottom: 4px solid white;
  margin: 0px;
  padding-bottom: 5px;
  padding-top: 5px;
  width: 100%;
`;
const Check = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
  background: white;
  font-size: 14px;
  color: rgb(23, 30, 49);
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 0px;
  padding: 10px;
`;
const SmCont = styled.div`
  width: 100%;
  display: flex;
  background: white;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
// const ProfileWrap = styled.div`
//   margin-top: 20px;
//   margin-bottom: 15px;
//   transition: all 0.5s;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 75px;
//   height: 75px;
//   img {
//     width: 120%;
//     height: 120%;
//     outline: 2px solid darkgrey;
//     object-fit: cover;
//     box-shadow: black 0px 0px 10px;
//     border-radius: 100%;
//   }
// `;
const Wrap = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  img {
    box-shadow: black 0px 0px 20px;
    outline: 3px solid black;
    height: 100px;
    width: 150px;
  }
`;
const Conatiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
`;
const SearchBox = styled.div`
  width: 100vw;
  display: flex;
  margin: 10px;
  text-align: center;
  justify-content: center;
  input {
    border: none;
    border: 3px solid white;
    font-size: 16px;
    padding: 10px;
    background: rgba(207, 207, 207, 0.404);
    color: white;
    text-align: center;
    margin-top: 25px;
    width: 50%;
  }
  input:placeholder {
    color: white;
  }
`;
const Card = styled.div`
  display: flex;
  box-shadow: white 0px 0px 5px;
  margin: 35px;
  transition: all 0.5s;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: rgb(207, 207, 207);
  border: 6px solid black;
  border-radius: 5px;
  width: 200px;
  @media only screen and (max-width: 600px) {
    width: 300px;
  }
  a {
    padding-top: 5px;
    padding-bottom: 5px;
    background: rgb(224, 224, 224);
    width: 100%;
    color: grey;
    margin-top: 0px;
    font-size: 12px;
  }
  &:hover {
    opacity: 90%;

    width: 220px;
    border-style: solid;
    border-width: 6px;
    border-image: linear-gradient(90deg, #771717, #1d3b50) 2;
    @media only screen and (max-width: 600px) {
      width: 300px;
    }
  }
`;
const Title = styled.h4`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 0px;
`;
const Senator = styled.p`
  color: white;
  font-size: 12px;
  width: 100%;
  font-weight: bold;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 0px;
`;
