# Plant Watering

## What does it do
A list of plants, given a specific date, tell us how long ago were they watered

## Data

```jsx
  plant:{
    id: String,
    type:String,
    name:String,
    lastWateredDate:Date,
    waterInterval:Int
  }
```

```jsx
  [
    plant,
    plant
  ]

```
## HTML skeleton

App
  header <- Header
    h1 
  section <- Section containing the plants
    article <- Specific plant
      h1
      h2
      p
    ...
  section <- Section contain the form to add a plant
    h1
    form


## Components

App
PlantList
Plant, PlantListItem, SinglePlant
PlantForm