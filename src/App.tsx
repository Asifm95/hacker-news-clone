import * as React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import Home from './containers/Home';
import Navbar from './components/Navbar/Navbar';
export const App = () => (
    <ChakraProvider theme={theme}>
        <Box minH="100vh">
            <Navbar />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/new" component={Home} />
                </Switch>
            </BrowserRouter>
            {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        </Box>
    </ChakraProvider>
);
