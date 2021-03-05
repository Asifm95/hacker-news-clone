import * as React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TopStories from './containers/TopStories';
import Navbar from './components/Navbar/Navbar';
import NewStories from './containers/NewStories';
import { theme } from './theme';
import JobStories from './containers/JobStories';
export const App = () => (
    <ChakraProvider theme={theme}>
        <Box minH="100vh">
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={TopStories} />
                    <Route exact path="/new" component={NewStories} />
                    <Route exact path="/jobs" component={JobStories} />
                </Switch>
            </BrowserRouter>
        </Box>
    </ChakraProvider>
);
