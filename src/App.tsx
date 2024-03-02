import React from 'react';
import dessert from './dessert.jpeg'
import './App.css';
import {Picture} from "./components/Picture/Picture.styled";
import {Box} from "./components/Box/Box.styled";
import {Headline} from "./components/Headline/Headline.styled";
import {Text} from "./components/Text/Text.styled";
import {ButtonLine} from "./components/Button/ButtonLine.styled";
import {Button} from "./components/Button/Button.styled";

function App() {
    return (
        <div className="App">
            <Box>
                <Picture src={dessert} alt="dessert"/>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Headline>Headline</Headline>
                <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
                <ButtonLine>
                    <Button>See more</Button>
                    <Button>Save</Button>
                </ButtonLine>

            </Box>
        </div>
    );
}


export default App;
