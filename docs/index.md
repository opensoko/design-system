import {
Flex, Box, Border, BackgroundImage,
Lead, Title, Heading, Text, Large, Normal, Small, Blockquote,
Icon, Image, Avatar
} from '../src'

# Opensoko Design System
---
## Installation
From the root of the project run the command below to install from package.json file
```sh
yarn install
```

## Components
---

## Flex & Box

Flex & Box components shares the same construct but Flex have flexbox container related properties
compare to Box with flexbox item related properties.

Both components purpose is to create structure and shouldn't be used to visually be representative.
Their properties intent is instead to influence contained elements.

<Flex flexWrap="wrap">
  <Box w={1} py={16}>
    <Border bg="#0083FF" p={1} borderRadius={2} />
  </Box>

  <Box w={1/2} py={16} pr={8}>
    <Border bg="#56CCF2" p={1} borderRadius={2} />
  </Box>
  <Box w={1/2} py={16} pl={8}>
    <Border bg="#56CCF2" p={1} borderRadius={2} />
  </Box>

  <Box w={1/3} py={16} pr={8}>
    <Border bg="#0083FF" p={1} borderRadius={2} />
  </Box>
  <Box w={1/3} py={16} px={8}>
    <Border bg="#0083FF" p={1} borderRadius={2} />
  </Box>
  <Box w={1/3} py={16} pl={8}>
    <Border bg="#0083FF" p={1} borderRadius={2} />
  </Box>

  <Box w={1/4} py={16} pr={8}>
    <Border bg="#56CCF2" p={1} borderRadius={2} />
  </Box>
  <Box w={1/4} py={16} px={8}>
    <Border bg="#56CCF2" p={1} borderRadius={2} />
  </Box>
  <Box w={1/4} py={16} px={8}>
    <Border bg="#56CCF2" p={1} borderRadius={2} />
  </Box>
  <Box w={1/4} py={16} pl={8}>
    <Border bg="#56CCF2" p={1} borderRadius={2} />
  </Box>
</Flex>


## Border
Border is a component which visually is representing visually using background color or other
visual effects like shadow. Border inherits from Box component properties.

<Flex>
  <Box w={1/2} pr={8}>
    <Border w={1} p={128} bg="#0083FF" borderRadius={8} boxShadow={[
              "0 4px 4px rgba(0, 0, 0, .1)", 
              "0 8px 8px rgba(0, 0, 0, .1)", 
              "0 16px 16px rgba(0, 0, 0, .1)", 
              "0 32px 32px rgba(0, 0, 0, .15)", 
              "0 64px 64px rgba(0, 0, 0, .15)"]} />
  </Box>
  <Box w={1/2} pl={8}>
    <Border w={1} p={128} bg="#56CCF2" borderRadius={8} />
  </Box>
</Flex>


## BackgroundImage
BackgroundImage component is also a visual representation of a division with a background picture.
Since BackgroundImage inherits from Border we have access to all Borders properties.

<Flex>
  <Box w={1/2} pr={8}>
    <BackgroundImage
      borderRadius={8}
      src="https://images.unsplash.com/photo-1521279106736-79df8ae0c183" />
  </Box>
  <Box w={1/2} pl={8}>
    <BackgroundImage
      borderRadius={8}
      boxShadow={["0 4px 4px rgba(0, 0, 0, .1)", 
                   "0 8px 8px rgba(0, 0, 0, .1)", 
                   "0 16px 16px rgba(0, 0, 0, .1)", 
                   "0 32px 32px rgba(0, 0, 0, .15)", 
                   "0 64px 64px rgba(0, 0, 0, .15)"]}
      src="https://images.unsplash.com/photo-1506269421513-e7dc9a2003af" />
  </Box>
</Flex>

## Typography
In html there are six heading we have create only 3 components and 3 paragraph related documents

<Flex>
  <Box w={3/12}><Lead>Lead</Lead></Box>
  <Box w={9/12}><Lead>This is the heading</Lead></Box>
</Flex>

---

<Flex>
  <Box w={3/12}><Title>Title</Title></Box>
  <Box w={9/12}><Title>This is the heading</Title></Box>
</Flex>

---

<Flex>
  <Box w={3/12}><Heading>Heading</Heading></Box>
  <Box w={9/12}><Heading>This is the heading</Heading></Box>
</Flex>

---

<Flex>
  <Box w={3/12}><Large>Large</Large></Box>
  <Box w={9/12}><Large>This is a large text for paragraphs</Large></Box>
</Flex>

---

<Flex>
  <Box w={3/12}><Normal>Normal</Normal></Box>
  <Box w={9/12}><Normal>This is a normal text used in paragraphs and mostly used</Normal></Box>
</Flex>

---

<Flex>
  <Box w={3/12}><Small>Small</Small></Box>
  <Box w={9/12}><Small>
    This is a small text for paragraphs which will represent mostly captions and some elements titles
  </Small></Box>
</Flex>

## Blockquote
Blockquote are meant to show and emphasize a book or article passage

<Flex>
  <Box w={8/12}>
    <Blockquote cite="Brene Brown">
      The irony is that we attempt to disown our difficult stories to appear more whole
      or more acceptable, but our wholeness - even our wholeheartedness - actually depends on
      the integration of all our experiences, incuding the falls.
    </Blockquote>
  </Box>
</Flex>

## Image
Image is a representation of a traditional image tag with display block

<Image src="https://images.unsplash.com/photo-1470114888332-5bcd36dd1940" />

## Icon
Icons are svg paths designed to represent a given identity an a pictorial style.
All icons are stored on a single .svg file and each Icon is given an id.

<Flex>
  <Box mr="auto">
    <Icon name="arrow_up" />
    <Icon name="arrow_up" filled />
    <Icon name="arrow_down" />
    <Icon name="arrow_down" filled />
  </Box>
  <Box ml="auto">
    <Icon name="arrow_left" height={16} />
    <Icon name="arrow_left" height={16} filled />
    <Icon name="arrow_right" height={16} />
    <Icon name="arrow_right" height={16} filled />
  </Box>
</Flex>


## Avatar
An avatar is an image relatively small in many cases representing a personality of an individual on any entity worth of representation.

<Flex>
  <Box w={4/12}><Heading pt={1}>Avatar with text</Heading></Box>
  <Box ml="auto" w={1/12}><Avatar borderRadius={4}>A</Avatar></Box>
  <Box w={1/12}><Avatar bg="#56CCF2" borderRadius={8}>V</Avatar></Box>
  <Box w={1/12}><Avatar borderRadius={16}>A</Avatar></Box>
  <Box w={1/12}><Avatar bg="#56CCF2">T</Avatar></Box>
</Flex>

---

<Flex>
  <Box w={4/12}><Heading pt={1}>Avatar with image</Heading></Box>
  <Box ml="auto" w={1/12}>
    <Avatar>
      <img height="100%"
        src="https://images.unsplash.com/photo-1521279106736-79df8ae0c183?fit=crop&w=48&h=48&q=100" />
    </Avatar>
  </Box>
  <Box w={1/12}>
    <Avatar borderRadius={16}>
      <img height="100%"
        src="https://images.unsplash.com/photo-1521279106736-79df8ae0c183?fit=crop&w=48&h=48&q=100" />
    </Avatar>
  </Box>
  <Box w={1/12}>
    <Avatar borderRadius={8}>
      <img height="100%"
        src="https://images.unsplash.com/photo-1521279106736-79df8ae0c183?fit=crop&w=48&h=48&q=100" />
    </Avatar>
  </Box>
  <Box w={1/12}>
    <Avatar borderRadius={4}>
      <img height="100%"
        src="https://images.unsplash.com/photo-1521279106736-79df8ae0c183?fit=crop&w=48&h=48&q=100" />
    </Avatar>
  </Box>
</Flex>

---

<Flex>
  <Box w={4/12}><Heading pt={1}>Avatar with icon</Heading></Box>
  <Box ml="auto" w={1/12}><Avatar bg="#56CCF2"><Icon name="user" height={16} /></Avatar></Box>
  <Box w={1/12}><Avatar borderRadius={16}><Icon name="user" height={16} filled /></Avatar></Box>
  <Box w={1/12}><Avatar bg="#56CCF2" borderRadius={8}>
    <Icon name="user" height={16} filled />
  </Avatar></Box>
  <Box w={1/12}><Avatar borderRadius={4}><Icon name="user" height={16} /></Avatar></Box>
</Flex>
