import React from 'react'

import { JSONEditor } from 'json-editor'
import 'json-editor/dist/index.css'


const exampeData = `{
  "theme": [
    "water"
  ],
  "keywords": [
    "Maria Mirage photography",
    "Water photography",
    "fairytale",
    "fairytale photoshoot",
    "fantasy photoshoot",
    "photograper hampshire",
    "photographer fleet",
    "photographer london",
    "pre-raphaelite"
  ],
  "featuresIn": {
    "mobile": false,
    "desktop": false
  },
  "description": {
    "title": "pre-raphaelite re-vival series",
    "collaborators": [
      {
        "role": "Model",
        "name": "Marine"
      },
      {
        "role": "Makeup",
        "name": "Naomi Barker"
      }
    ]
  }
}`;

const App = () => {
  return <JSONEditor value={exampeData} />
}

export default App
