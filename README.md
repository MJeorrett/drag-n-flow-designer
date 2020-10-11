# Drag 'n' Flow Designer
A proof of concept for a drag and drop workflow designer.

The main things I wanted to explore were:
- A drag and drop interface for defining relationships between steps in a workflow.
- The [@projectstorm/react-diagrams](https://github.com/projectstorm/react-diagrams) drag and drop library.

## Running
This app was templated with create-react-app. You can run it by running yarn install followed by yarn start in the root directory. This should start the app on http://localhost:3000/ and automatically open it in your browser.

## Using the application
This application allows building workflows with the following nested elements:
- Step
  - Section
    - Field

To get started:
- Create a steps by dragging the "New Step" box onto the canvas
- Click on "Add Section" then "Add Field" to add a field and a section.
- Click on the step title or field in a step to edit the details.
- Click and drag between the ">" on the start and "prev" on a step to form a relationship.
- Select the "Based on Field" branch condition type to create a fork in the process.