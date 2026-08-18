# Learn Essential Angular

## Reading Material 1
1. Basic Component Guide https://angular.dev/guide/components
1. Inputs https://angular.dev/guide/components/inputs
1. Outputs https://angular.dev/guide/components/outputs
1. HTML Binding https://angular.dev/guide/templates/binding
1. Event Handling https://angular.dev/guide/templates/event-listeners
1. Control flow https://angular.dev/guide/templates/control-flow

## Checkpoint 1
Requirement: Create a recipe card that takes in a `Recipe` in the format listed below. If Description is empty, show "Description not available". Recipe Type should be uppercase. There should be a "Choose" button at the bottom that will output the ID when the user clicks on it. Update AppComponent to display the component.

```
Recipe Name (Recipe Type)
Recipe Description 

Choose Button
```

Use the following model for input. If the type property looks weird, here is a resource. String literal (https://www.w3schools.com/typescript/typescript_literal_types.php)
```ts
export interface Recipe {
  id: number;
  name: string;
  type: 'salad' | 'soup' | 'drink'
  description: string;
}
```



