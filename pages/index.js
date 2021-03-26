import React from 'react';

import {
  Container,
  Heading,
  Text,
  Code,
  Link,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

export default function Home() {
  return (
    <Container 
      maxW="container.md" p={8} pt={16}
      align="center"
    >
      <Heading as="h1" size="xl" my={2}>Welcome</Heading>
      <Heading as="h2" size="md" fontWeight="normal" my={2}>
        Made with <Link 
          href="https://github.com/linkai101/next-chakra-template" 
          fontWeight="semibold" color="blue.500"
          isExternal
        >
          Next.js Chakra Template v1
        </Link> by linkai101
      </Heading>

      <Text my={8} mt={12}>
        <Heading as="h3" size="md" my={2}>
          Things to note:
        </Heading>
        <UnorderedList px={16} align="left">
          <ListItem>
            The <Code>.gitkeep</Code> in <Code>/public</Code> is there to prevent GitHub from deleting the <Code>/public</Code> directory. Delete it when adding any files to it.
          </ListItem>
          <ListItem>
            Add a favicon by inserting an image named 'favicon.ico' into <Code>/public</Code> 
            (favicon import line is in <Code>/pages/_app.js</Code>)
          </ListItem>
          <ListItem>
            Update color theme in <Code>/lib/theme.js</Code>.
            Once finished, make sure to uncomment 'color' in
            the theme import on line 35.
          </ListItem>
          <ListItem>
            A ColorModeToggle component has been included
            in <Code>/components/ColorModeToggle.js</Code>
            for toggling color mode. <Link href="https://chakra-ui.com/docs/features/color-mode" isExternal>(see more details)</Link> Edit color mode options in <Code>/lib/theme.js</Code>
          </ListItem>
        </UnorderedList>
      </Text>

      <Heading as="h3" size="md">Happy hacking!</Heading>
    </Container>
  );
}
